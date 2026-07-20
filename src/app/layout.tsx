import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://qubee-electronics.vercel.app"),
  title: {
    default: "Qubee Electronics — Premium Tech in Addis Ababa",
    template: "%s — Qubee Electronics",
  },
  description: "Genuine laptops and phones with same-day pickup in Bole and delivery citywide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}