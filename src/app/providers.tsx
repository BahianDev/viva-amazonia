"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
