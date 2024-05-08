"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormProvider } from "../app/contexts/FormContext";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <FormProvider>
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
        </FormProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
