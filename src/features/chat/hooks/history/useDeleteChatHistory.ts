import { useCallback, useState } from 'react';
import { useRevalidateChatHistory } from '@/features/chat/hooks/history/useRevalidateChatHistory';

import { useFetch } from '@/lib/fetch';

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
