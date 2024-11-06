import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                border: "1px solid purple",
                color: "#FFFFFF",
                backgroundColor: "#000000",
              },
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
