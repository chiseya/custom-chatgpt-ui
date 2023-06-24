import { useSWR } from '@/lib/swr';
import { ChatMessageRole } from '@/features/chat/types';

export type ChatMessagesResponse = {
  id: string;
  role: ChatMessageRole;
  content: string;
  createdAt: string;
}[];

export function useChatMessages(chatId: string | undefined) {
  return useSWR<ChatMessagesResponse>(`/chat/${chatId}/messages`);
}
