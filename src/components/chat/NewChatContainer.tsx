'use client';

import { ChatHistoryPane } from '@/components/chat/ChatHistoryPane';
import { ChatMessagesPane } from '@/components/chat/ChatMessagesPane';
import { ChatLayout } from '@/components/chat/ChatLayout';

export const NewChatContainer = () => {
  return (
    <ChatLayout>
      <ChatHistoryPane />
      <ChatMessagesPane />
    </ChatLayout>
  );
};
