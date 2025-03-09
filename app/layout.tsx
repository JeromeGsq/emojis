import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';

export const metadata: Metadata = {
  title: 'Emojis App',
  description: 'Emojis App',
  generator: 'Emojis App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
