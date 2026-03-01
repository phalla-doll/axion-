import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'AXION Logistics',
  description: 'Logistics and shipping solutions for modern businesses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#f4f4f2] text-[#111111]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
