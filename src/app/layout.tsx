//@ts-nocheck
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Session } from "next-auth";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task",
  description: "Task",
};

const RootLayout = ({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) => {
  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
