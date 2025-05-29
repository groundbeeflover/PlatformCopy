import "./globals.css";
import type { Metadata } from 'next';
import { ReactNode } from 'react';

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Maasec.com",
  description: "Official website of ACM Student chapter MaaSec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
