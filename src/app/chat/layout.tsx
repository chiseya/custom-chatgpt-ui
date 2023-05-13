'use client';

import { ReactNode } from 'react';
import { ChatHistoryPane } from '@/components/chat/ChatHistoryPane';

export type ChatLayoutProps = {
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
