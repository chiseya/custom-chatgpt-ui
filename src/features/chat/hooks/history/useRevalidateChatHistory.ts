import { useSWRConfig } from 'swr';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';

export function useRevalidateChatHistory() {
  const { data } = useSession();
  const { mutate } = useSWRConfig();
  return useCallback(async () => {
    await mutate(['/chat', data?.idToken]);
  }, [data?.idToken, mutate]);
}
