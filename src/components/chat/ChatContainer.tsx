'use client';

import { useMessageHistory } from '@/hooks/chat/useMessageHistory';
import { ErrorContainer } from '@/components/app/ErrorContainer';
import { ChatMessagesPane } from '@/components/chat/ChatMessagesPane';

export type ChatContainerProps = {
  chatId: string;
};

export const ChatContainer = ({ chatId }: ChatContainerProps) => {
  const { data, error } = useMessageHistory(chatId);
  return error ? (
    <ErrorContainer message={error.message} />
  ) : !data ? (
    <></>
  ) : (
    <ChatMessagesPane chatId={chatId} messages={data} />
  );
};
