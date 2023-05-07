import useSWROriginal from 'swr';
import { useSession } from 'next-auth/react';

export const fetcher = async ([url, token]: [string, string | undefined]) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${url}`,
    {
      ...(token && {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    },
  );

  const json = await res.json();
  if (!res.ok) {
    const error = new Error(
      json.message || 'An error occurred while fetching the data',
    );
    throw error;
  }
  return json;
};

export function useSWR<TData = any, TError = any>(url: string) {
  const { data: session } = useSession();
  return useSWROriginal<TData, TError>([url, session?.idToken], fetcher);
}
