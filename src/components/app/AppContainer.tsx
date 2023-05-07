'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { LoadingContainer } from '@/components/app/LoadingContainer';
import { UnauthenticatedContainer } from '@/components/app/UnauthenticatedContainer';
import { VerificationContainer } from '@/components/app/VerificationContainer';

export type AppContainerProps = {
  children?: ReactNode;
};

export const AppContainer = ({ children }: AppContainerProps) => {
  const { data, status } = useSession();
  if (status === 'loading') return <LoadingContainer />;
  if (status === 'unauthenticated') return <UnauthenticatedContainer />;
  return <VerificationContainer>{children}</VerificationContainer>;
};
