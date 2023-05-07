import { useSWR } from '@/lib/swr';

export function useVerify() {
  return useSWR('/verify');
}
