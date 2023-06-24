import { useCallback } from 'react';
import { useFetch } from '@/lib/fetch';

export function useCreateNewChat() {
  const fetch = useFetch();
  return useCallback(
    async (title?: string): Promise<string> => {
      const res = await fetch('POST', '/chat', {
        title: title || 'Untitled',
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      return json.chatId;
    },
    [fetch],
  );
}
