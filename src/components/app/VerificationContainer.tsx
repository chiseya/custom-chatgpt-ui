import { ReactNode } from 'react';
import { ErrorContainer } from '@/components/app/ErrorContainer';
import { LoadingContainer } from '@/components/app/LoadingContainer';
import { useVerify } from '@/hooks/auth/useVerify';

export type VerificationContainerProps = {
  children?: ReactNode;
};
export const VerificationContainer = ({
  children,
}: VerificationContainerProps) => {
  const { data, error } = useVerify();
  if (!data && !error) return <LoadingContainer />;
  if (error) {
    return <ErrorContainer message={error.message} showSignIn />;
  }
  return <>{children}</>;
};
