'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
