import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { TranslationProvider } from "../translations/provider";
const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <div className="font-[Arial Rounded MT Bold] font-bold">
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </div>
      </body>
    </html>
  );
}
