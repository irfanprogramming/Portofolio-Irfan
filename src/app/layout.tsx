import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irfan - Portfolio Website",
  description: "Portfolio website showcasing my work and skills in web development",
  keywords: ["portfolio", "web developer", "react", "next.js", "javascript", "typescript"],
  authors: [{ name: "Irfan" }],
  creator: "Irfan",
  openGraph: {
    title: "Irfan - Portfolio Website",
    description: "Portfolio website showcasing my work and skills in web development",
    type: "website",
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
