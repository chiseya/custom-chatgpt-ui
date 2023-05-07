'use client';

import { useMessageHistory } from '@/hooks/chat/useMessageHistory';
import { ErrorContainer } from '@/components/app/ErrorContainer';
import { ChatHistoryPane } from '@/components/chat/ChatHistoryPane';
import { ChatMessagesPane } from '@/components/chat/ChatMessagesPane';
import { ChatLayout } from '@/components/chat/ChatLayout';

export type ChatContainerProps = {
  chatId: string;
};

export const ChatContainer = ({ chatId }: ChatContainerProps) => {
  const { data, error } = useMessageHistory(chatId);
  return (
    <ChatLayout>
      <ChatHistoryPane />
      {error ? (
        <ErrorContainer message={error.message} />
      ) : !data ? (
        <></>
      ) : (
        <ChatMessagesPane chatId={chatId} messages={data} />
      )}
    </ChatLayout>
  );
};
