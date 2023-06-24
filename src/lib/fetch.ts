import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { Jsonifiable } from 'type-fest';

export function useFetch<TData = any, TError = any>() {
  const { data: session } = useSession();
  return useCallback(
    (
      method: 'GET' | 'POST' | 'PUT' | 'DELETE',
      path: string,
      body?: Jsonifiable,
      opts?: { aborter: AbortController },
    ) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
        method,
        headers: {
          ...(body ? { 'Content-Type': 'application/json' } : {}),
          Authorization: `Bearer ${session?.idToken}`,
        },
        ...(opts?.aborter ? { signal: opts.aborter.signal } : {}),
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
    },
    [session?.idToken],
  );
}
