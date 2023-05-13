import { ChatMessage, ChatMessageRole } from '@/models/message';
import { useMemo, useState } from 'react';
import { useGenerateChatCompletion } from '@/hooks/chat/useGenerateChatCompletion';
import { nanoid } from 'nanoid';
import { useRevalidateChatHistory } from '@/hooks/chat/useRevalidateChatHistory';
import { ChatMessageForm } from '@/components/chat/ChatMessageForm';
import { ChatMessageList } from '@/components/chat/ChatMessageList';
import { ChatEmpty } from '@/components/chat/ChatEmpty';
import { useRouter } from 'next/navigation';

export type ChatMessagesPaneProps = {
  chatId?: string;
  messages?: ChatMessage[];
};

export const ChatMessagesPane = ({
  chatId,
  messages: defaultMessages,
}: ChatMessagesPaneProps) => {
  const router = useRouter();
  const revalidateChatHistory = useRevalidateChatHistory();
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
    data: temporaryMessageContent,
    isLoading: isMutating,
    error,
    mutate,
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
    await mutate({
      messageContent: input,
      systemPrompt,
      onChatIdDetermined: (chatId) => {
        revalidateChatHistory();
      },
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
      ...(temporaryMessageContent
        ? [
            {
              content: temporaryMessageContent,
              role: ChatMessageRole.Assistant,
              id: 'tmp',
            },
          ]
        : []),
    ],
    [persistedMessages, temporaryMessageContent],
  );

  return (
    <div className="flex-grow h-full flex flex-col">
      {messages.length === 0 ? (
        <ChatEmpty
          systemPrompt={systemPrompt}
          onSystemPromptChange={setSystemPrompt}
        />
      ) : (
        <ChatMessageList
          messages={messages}
          systemPrompt={systemPrompt}
          error={error}
        />
      )}
      <ChatMessageForm onSubmit={handleSubmit} isSubmitting={isMutating} />
    </div>
  );
};
