import { useMemo, useState } from 'react';
import { ChatMessage, ChatMessageRole } from '@/features/chat/types';
import { useGenerateChatCompletion } from '@/features/chat/hooks/messages/useGenerateChatCompletion';
import { nanoid } from 'nanoid';

type UseChatMessageHandlerOptions = {
  chatId?: string;
  defaultMessages?: ChatMessage[];
};

export function useChatMessageHandler({
  chatId,
  defaultMessages,
}: UseChatMessageHandlerOptions) {
  const [systemPrompt, setSystemPrompt] = useState(
    defaultMessages?.[defaultMessages?.length - 1]?.role ===
      ChatMessageRole.System
      ? defaultMessages?.[defaultMessages?.length - 1]?.content
      : '',
  );
  const [persistedMessages, setPersistedMessages] = useState<ChatMessage[]>(
    () =>
      defaultMessages?.filter(
        (message) => message.role !== ChatMessageRole.System,
      ) ?? [],
  );
  const {
    receivedMessage,
    isGenerating,
    cancelChatCompletion,
    error,
    generateChatCompletion,
  } = useGenerateChatCompletion(chatId);

  const handleSubmit = async (input: string) => {
    setPersistedMessages((messages) => [
      {
        id: `client-generated-${nanoid()}`,
        role: ChatMessageRole.User,
        content: input,
      },
      ...messages,
    ]);
    await generateChatCompletion({
      messageContent: input,
      systemPrompt,
      onSuccess: (messageContent) => {
        setPersistedMessages((messages) => [
          {
            id: `client-generated-${nanoid()}`,
            role: ChatMessageRole.Assistant,
            content: messageContent,
          },
          ...messages,
        ]);
      },
    });
  };

  const messages = useMemo(
    () => [
      ...persistedMessages.slice().reverse(),
      ...(receivedMessage
        ? [
            {
              content: receivedMessage,
              role: ChatMessageRole.Assistant,
              id: 'tmp',
            },
          ]
        : []),
    ],
    [persistedMessages, receivedMessage],
  );

  return {
    systemPrompt,
    onSystemPromptChange: setSystemPrompt,
    messages,
    error,
    generateChatCompletion: handleSubmit,
    cancelChatCompletion,
    isGenerating,
  };
}
