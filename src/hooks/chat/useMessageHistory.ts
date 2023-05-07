import { useSWR } from '@/lib/swr';
import { ChatMessageRole } from '@/models/message';

export type MessageHistoryResponse = {
  id: string;
  role: ChatMessageRole;
  content: string;
  createdAt: string;
}[];

export function useMessageHistory(chatId: string | undefined) {
  return useSWR<MessageHistoryResponse>(`/chat/${chatId}/messages`);
}
