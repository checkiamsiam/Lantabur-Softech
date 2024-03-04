import Layout from "@/components/layouts/Layout";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Session } from "next-auth";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task",
  description: "Task",
};

export default function RootLayout({ children, session }: { children: ReactNode; session: Session }) {
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
