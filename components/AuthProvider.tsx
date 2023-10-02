"use client";

import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
