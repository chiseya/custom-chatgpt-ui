'use client';

import { ChatMessagesPane } from '@/components/chat/ChatMessagesPane';
import { useAtomValue } from 'jotai';
import { newChatKeyAtom } from '@/store/newChatKeyAtom';

export const NewChatContainer = () => {
  const newChatKey = useAtomValue(newChatKeyAtom);
  return <ChatMessagesPane key={newChatKey} />;
};
