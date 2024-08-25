import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fito AI',
  description: 'App fitosanitaria',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-CO'>
      <body className={inter.className}>
        <div className='h-auto bg-slate-900'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
