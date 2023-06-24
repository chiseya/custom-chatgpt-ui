'use client';

import { ReactNode } from 'react';
import { AppFooter } from '@/components/app/AppFooter';

type AppContainerProps = {
  children?: ReactNode;
};

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className="h-full pb-10">
      {children}
      <AppFooter />
    </div>
  );
};
