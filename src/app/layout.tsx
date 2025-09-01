import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Irfan - Portfolio Website',
  description: 'Portfolio website data analyst',
  keywords: [
    'portfolio',
    'data analyst',
    'excel',
    'mysql',
    'power bi',
    'python',
  ],
  authors: [{ name: 'Irfan' }],
  creator: 'Irfan',
  openGraph: {
    title: 'Irfan - Portfolio Website',
    description: 'Portfolio website data analyst',
    type: 'website',
    url: 'https://irfan91.vercel.app',
    siteName: 'Irfan Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
