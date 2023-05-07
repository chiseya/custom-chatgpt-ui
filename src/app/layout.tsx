import './globals.css';
import { ReactNode } from 'react';
import AuthProvider from '@/providers/AuthProvider';
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
        <main className="h-screen bg-slate-50 text-slate-950">
          <AuthProvider>
            <AppContainer>{children}</AppContainer>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
