import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
        <Router> {children}</Router>
      </QueryClientProvider>
    </>
  );
};
