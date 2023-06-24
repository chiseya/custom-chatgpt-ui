'use client';

import { ReactNode } from 'react';
import { ChatHistoryPane } from '@/features/chat/components/history/ChatHistoryPane';

type ChatLayoutProps = {
  children?: ReactNode;
};

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="h-full flex">
      <ChatHistoryPane />
      {children}
    </div>
  );
}
