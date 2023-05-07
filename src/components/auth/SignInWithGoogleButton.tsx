import { signIn } from 'next-auth/react';
import clsx from 'clsx';

export type SignInWithGoogleButtonProps = {
  className?: string;
};
export const SignInWithGoogleButton = ({
  className,
}: SignInWithGoogleButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center bg-slate-200 py-2 px-4 bg-opacity-25 hover:bg-opacity-50 transition-colors',
        className,
      )}
      onClick={() => signIn('google')}
    >
      <img src="/images/google.png" className="w-6 h-6 mr-2" />
      <span>Sign in with google</span>
    </button>
  );
};
