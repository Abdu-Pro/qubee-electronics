import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://qubee-electronics.vercel.app/"), // replace with your real domain once live
  title: {
    default: "Qubee Electronics — Premium Tech in Addis Ababa",
    template: "%s — Qubee Electronics",
  },
  description:
    "Genuine laptops and phones with same-day pickup in Bole and delivery citywide. Trusted by 163,000+ followers across Ethiopia.",
  keywords: [
    "Qubee Electronics",
    "laptops Addis Ababa",
    "phones Ethiopia",
    "Bole electronics shop",
    "buy laptop Addis Ababa",
  ],
  openGraph: {
    title: "Qubee Electronics — Premium Tech in Addis Ababa",
    description:
      "Genuine laptops and phones with same-day pickup in Bole and delivery citywide.",
    url: "https://qubee-electronics.vercel.app/",
    siteName: "Qubee Electronics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qubee Electronics — Premium Tech in Addis Ababa",
    description:
      "Genuine laptops and phones with same-day pickup in Bole and delivery citywide.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}