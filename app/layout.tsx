import type { Metadata } from "next";

import { instrumentSans } from "@/config/font";
import { rootMetadata } from "@/config/metadata";

import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${instrumentSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
