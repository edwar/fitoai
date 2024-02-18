import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fito AI",
  description: "App fitosanitaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className={inter.className}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_55%_10%,#fff_40%,#316d3d_100%)]"></div>
        {children}
      </body>
    </html>
  );
}
