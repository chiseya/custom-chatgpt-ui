import './globals.css';
import { ReactNode } from 'react';
import AuthProvider from '@/providers/AuthProvider';
import { AuthContainer } from '@/components/app/AuthContainer';
import { AppContainer } from '@/components/app/AppContainer';

export const metadata = {
  title: 'Custom ChatGPT',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen">
          <AuthProvider>
            <AuthContainer>
              <AppContainer>
                {children}
                <div id="modal" />
              </AppContainer>
            </AuthContainer>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
