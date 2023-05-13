import { useCallback, useRef, useState } from 'react';
import { useCreateNewChat } from '@/hooks/chat/useCreateNewChat';
import { useFetch } from '@/hooks/useFetch';

export type MutateOptions = {
  chatId?: string;
  messageContent: string;
  systemPrompt?: string;
  onChatIdDetermined?: (chatId: string) => void;
  onSuccess?: (receivedMessageContent: string) => void;
  onError?: (error: string) => void;
};

export function useGenerateChatCompletion(
  argChatId: string | undefined = undefined,
) {
  const [chatId, setChatId] = useState(argChatId);
  const [data, setData] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const createNewChat = useCreateNewChat();
  const fetch = useFetch();

  const abortControllerRef = useRef<AbortController>();
  const cancel = useCallback(() => {
    if (!abortControllerRef.current) return;
    abortControllerRef.current?.abort();
  }, []);

  const mutate = useCallback(
    async ({
      messageContent,
      systemPrompt,
      onSuccess,
      onError,
      onChatIdDetermined,
    }: MutateOptions) => {
      setIsLoading(true);
      setError(undefined);
      abortControllerRef.current = new AbortController();

      let receivedMessageContent = '';

      let targetChatId: string;
      if (!chatId) {
        targetChatId = await createNewChat(messageContent);
        setChatId(targetChatId);
        onChatIdDetermined?.(targetChatId);
      } else {
        targetChatId = chatId;
      }

      const res = await fetch(
        'POST',
        `/chat/${targetChatId}/completion`,
        {
          messageContent,
          systemPrompt: systemPrompt || undefined,
        },
        { aborter: abortControllerRef.current },
      );
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Oops! Something went wrong.');
      }
      const reader = res.body?.getReader();
      if (!reader) {
        throw new Error('Oops! Something went wrong.');
      }

      try {
        for await (const chunk of readStream(reader)) {
          receivedMessageContent += chunk;
          setData(receivedMessageContent);
        }
        onSuccess?.(receivedMessageContent);
        setData(undefined);
      } catch (e) {
        const error =
          e instanceof Error ? e.message : 'Oops! Something went wrong.';
        onError?.(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [chatId, createNewChat, fetch],
  );

  return {
    data,
    isLoading,
    error,
    mutate,
    cancel,
  };
}

async function* readStream(reader: ReadableStreamDefaultReader<Uint8Array>) {
  const decoder = new TextDecoder('utf-8');
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      reader.releaseLock();
      return;
    }
    const token = decoder.decode(value, { stream: true });
    yield token;
  }
}
