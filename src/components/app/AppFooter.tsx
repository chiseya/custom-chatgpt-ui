import { ThemeToggleButton } from '@/components/app/ThemeToggleButton';
import { UserInfo } from '@/features/auth/components/UserInfo';
import { SignOutButton } from '@/features/auth/components/SignOutButton';

export const AppFooter = () => {
  return (
    <div className="bg-base-200/50 text-content h-10 absolute bottom-0 left-0 right-0 flex items-center px-6 text-sm">
      <UserInfo />
      <div className="divider divider-horizontal" />
      <ThemeToggleButton />
      <div className="flex-grow" />
      <SignOutButton />
    </div>
  );
};
