// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ClientLayout } from "@/components/ClientLayout"; // 1. Import the new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RapidFuge",
  description: "Personal website and portfolio of RapidFuge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* REMOVE bg-white dark:bg-zinc-900 FROM HERE */}
      <body className={`${inter.className} text-zinc-900 dark:text-zinc-50 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}