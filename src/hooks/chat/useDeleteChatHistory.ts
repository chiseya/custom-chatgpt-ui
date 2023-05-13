import { useCallback, useState } from 'react';
import { useRevalidateChatHistory } from '@/hooks/chat/useRevalidateChatHistory';
import { useFetch } from '@/hooks/useFetch';

export function useDeleteChatHistory(chatId: string) {
  const revalidateChatHistory = useRevalidateChatHistory();
  const [isLoading, setIsLoading] = useState(false);
  const fetch = useFetch();

  const mutate = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      await fetch('DELETE', `/chat/${chatId}`);
      await revalidateChatHistory();
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [chatId, fetch, revalidateChatHistory]);
  return {
    mutate,
    isLoading,
  };
}
