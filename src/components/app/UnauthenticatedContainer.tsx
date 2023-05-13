import { SignInWithGoogleButton } from '@/components/auth/SignInWithGoogleButton';

export const UnauthenticatedContainer = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <p className="text-5xl font-bold text-base-content/90">Hello!</p>
      <p className="mt-3">
        Please Sign in to continue using{' '}
        {process.env.NEXT_PUBLIC_ORGANIZATION_NAME || 'custom'} ChatGPT
      </p>
      <SignInWithGoogleButton className="mt-6" />
    </div>
  );
};
