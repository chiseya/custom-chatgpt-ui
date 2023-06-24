import './globals.css';
import { ReactNode } from 'react';
import AppProvider from '@/providers/app/AppProvider';
import { AuthContainer } from '@/features/auth/components/AuthContainer';
import { AppContainer } from '@/components/app/AppContainer';
import { Montserrat } from 'next/font/google';
const font = Montserrat({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_ORGANIZATION_NAME || 'Custom'} Chat Bot`,
  robots: 'noindex, nofollow',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <main className="h-screen">
          <AppProvider>
            <AuthContainer>
              <AppContainer>{children}</AppContainer>
            </AuthContainer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
