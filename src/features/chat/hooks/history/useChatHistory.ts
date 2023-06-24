import { useSWR } from '@/lib/swr';

export type ChatHistoryResponse = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}[];

export function useChatHistory() {
  return useSWR<ChatHistoryResponse>('/chat');
}
