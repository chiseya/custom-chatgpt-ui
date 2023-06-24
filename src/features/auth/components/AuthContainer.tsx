'use client';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { LoadingContainer } from '@/components/app/LoadingContainer';
import { UnauthenticatedContainer } from '@/features/auth/components/UnauthenticatedContainer';
import { VerificationContainer } from '@/features/auth/components/VerificationContainer';

type AuthContainerProps = {
  children?: ReactNode;
};

export const AuthContainer = ({ children }: AuthContainerProps) => {
  const { status } = useSession();
  if (status === 'loading') return <LoadingContainer />;
  if (status === 'unauthenticated') return <UnauthenticatedContainer />;
  return <VerificationContainer>{children}</VerificationContainer>;
};
