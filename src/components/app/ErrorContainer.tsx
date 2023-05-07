import { SignInWithGoogleButton } from '@/components/auth/SignInWithGoogleButton';

export type ErrorContainerProps = {
  message?: string;
  showSignIn?: boolean;
};

export const ErrorContainer = ({
  message,
  showSignIn,
}: ErrorContainerProps) => {
  return (
    <div className="w-full h-full flex-col flex items-center justify-center">
      <p className="text-lg text-center">
        {message || 'Oops! Something went wrong.'}
      </p>
      {showSignIn && <SignInWithGoogleButton className="mt-4" />}
    </div>
  );
};
