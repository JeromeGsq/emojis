import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
