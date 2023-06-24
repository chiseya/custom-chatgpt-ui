'use client';

import { ChatMessagesPane } from '@/features/chat/components/messages/ChatMessagesPane';
import { useAtomValue } from 'jotai';
import { messengerPaneRefreshKeyAtom } from '@/features/chat/store/messengerPaneRefreshKey';

export const NewChatContainer = () => {
  const key = useAtomValue(messengerPaneRefreshKeyAtom);
  return <ChatMessagesPane key={key} />;
};
