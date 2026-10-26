import type { Metadata } from "next";

import { instrumentSans } from "@/config/font";
import { rootMetadata } from "@/config/metadata";
import { ThemeProvider } from "@/providers/theme-provider";

import "@/styles/globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${instrumentSans.variable}`} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
