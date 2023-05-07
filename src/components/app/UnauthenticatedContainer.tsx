import { SignInWithGoogleButton } from '@/components/auth/SignInWithGoogleButton';

export const UnauthenticatedContainer = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <p className="text-xl">Hello!</p>
      <SignInWithGoogleButton className="mt-4" />
    </div>
  );
};
