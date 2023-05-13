'use client';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { LoadingContainer } from '@/components/app/LoadingContainer';
import { UnauthenticatedContainer } from '@/components/app/UnauthenticatedContainer';
import { VerificationContainer } from '@/components/app/VerificationContainer';

export type AuthContainerProps = {
  children?: ReactNode;
};

export const AuthContainer = ({ children }: AuthContainerProps) => {
  const { data, status } = useSession();
  if (status === 'loading') return <LoadingContainer />;
  if (status === 'unauthenticated') return <UnauthenticatedContainer />;
  return <VerificationContainer>{children}</VerificationContainer>;
};
