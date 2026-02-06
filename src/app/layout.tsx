import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sasidhar Appalla | Software Engineer",
  description:
    "Portfolio of Sasidhar Appalla — software engineer building modern web apps, scalable systems, and XR experiences.",
};

import { Cursor } from "@/components/ui/cursor";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
