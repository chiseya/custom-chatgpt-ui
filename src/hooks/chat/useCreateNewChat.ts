import { useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useFetch } from '@/hooks/useFetch';

export function useCreateNewChat() {
  const { data } = useSession();
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
