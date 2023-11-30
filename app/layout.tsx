"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { FormProvider } from "./contexts/FormContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        <FormProvider>
          {children}
          </FormProvider>
      </body>
    </html>
  );
}
