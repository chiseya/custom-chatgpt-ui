'use client';

import { useChatMessages } from '@/features/chat/hooks/messages/useChatMessages';
import { ErrorContainer } from '@/components/app/ErrorContainer';
import { ChatMessagesPane } from '@/features/chat/components/messages/ChatMessagesPane';

type ChatContainerProps = {
  chatId: string;
};

export const ChatContainer = ({ chatId }: ChatContainerProps) => {
  const { data, error } = useChatMessages(chatId);
  return error ? (
    <ErrorContainer message={error.message} />
  ) : !data ? (
    <></>
  ) : (
    <ChatMessagesPane chatId={chatId} messages={data} />
  );
};
