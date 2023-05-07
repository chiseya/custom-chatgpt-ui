import { useCallback, useState } from 'react';
import { useRevalidateChatHistory } from '@/hooks/chat/useRevalidateChatHistory';
import { useFetch } from '@/hooks/useFetch';

export function useDeleteChatHistory(chatId: string) {
  const revalidateChatHistory = useRevalidateChatHistory();
  const [isLoading, setIsLoading] = useState(false);
  const deleteChatHistory = useFetch('DELETE', `/chat/${chatId}`);

  const mutate = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      await deleteChatHistory();
      await revalidateChatHistory();
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [deleteChatHistory, revalidateChatHistory]);
  return {
    mutate,
    isLoading,
  };
}
