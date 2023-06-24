import { signOut } from 'next-auth/react';

export const SignOutButton = () => {
  return (
    <button
      type="button"
      className="btn btn-xs btn-ghost"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};
