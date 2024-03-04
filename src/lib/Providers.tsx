"use client";
import { Session as NextAuthSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import StyledComponentsRegistry from "./AntdRegistry";
import BrowserActivityProvider from "./BrowserActivityProvider";

const Providers = ({ children, session }: { children: ReactNode; session: NextAuthSession }) => {
  return (
    <SessionProvider session={session}>
      <BrowserActivityProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </BrowserActivityProvider>
    </SessionProvider>
  );
};

export default Providers;
