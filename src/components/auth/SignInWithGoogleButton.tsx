import { signIn } from 'next-auth/react';
import clsx from 'clsx';
import Image from 'next/image';
import googleLogo from '@/assets/images/google.png';

export type SignInWithGoogleButtonProps = {
  className?: string;
};
export const SignInWithGoogleButton = ({
  className,
}: SignInWithGoogleButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('flex items-center justify-center btn', className)}
      onClick={() => signIn('google')}
    >
      <Image src={googleLogo} className="w-6 h-6 mr-2" alt="" />
      <span>Sign in with Google</span>
    </button>
  );
};
