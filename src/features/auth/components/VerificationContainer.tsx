import { ReactNode } from 'react';
import { ErrorContainer } from '@/components/app/ErrorContainer';
import { LoadingContainer } from '@/components/app/LoadingContainer';
import { useVerify } from '@/features/auth/hooks/useVerify';

type VerificationContainerProps = {
  children?: ReactNode;
};
export const VerificationContainer = ({
  children,
}: VerificationContainerProps) => {
  const { data, error } = useVerify();
  if (!data && !error) return <LoadingContainer />;
  if (error) {
    return (
      <ErrorContainer
        message={error.message}
        showSignIn={error.status === 401 || error.status === 403}
      />
    );
  }
  return <>{children}</>;
};
