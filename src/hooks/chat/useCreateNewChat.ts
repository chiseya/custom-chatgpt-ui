import { useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useFetch } from '@/hooks/useFetch';

export function useCreateNewChat() {
  const { data } = useSession();
  const createNewChat = useFetch('POST', '/chat');
  return useCallback(
    async (title?: string): Promise<string> => {
      const res = await createNewChat({
        title: title || 'Untitled',
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      return json.chatId;
    },
    [createNewChat],
  );
}
