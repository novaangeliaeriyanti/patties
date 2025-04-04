import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { TranslationProvider } from "../translations/provider";
const quicksand = Quicksand({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Camilan Jworo",
  description: "Camilan Jworo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(quicksand.className, "antialiased bg-[#EAEEFE]")}>
          <TranslationProvider>
            {children}
          </TranslationProvider>
      </body>
    </html>
  );
}
