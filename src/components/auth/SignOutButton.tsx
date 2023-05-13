import { signOut } from 'next-auth/react';

export const SignOutButton = () => {
  return (
    <button
      type="button"
      className="btn btn-xs btn-outline"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
