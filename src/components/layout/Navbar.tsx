"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  ChevronDown,
  Laptop,
  Monitor,
  Tablet,
  Smartphone,
  Headphones,
} from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SearchModal from "@/components/ui/SearchModal";

const PRODUCT_LINKS = [
  { label: "Laptops", href: "/products/laptops", icon: Laptop },
  { label: "Desktops", href: "/products/desktops", icon: Monitor },
  { label: "Tablets", href: "/products/tablets", icon: Tablet },
  { label: "Phones", href: "/products/phones", icon: Smartphone },
  { label: "Accessories", href: "/products/accessories", icon: Headphones },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openProducts = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setProductsOpen(true);
  };
  const scheduleCloseProducts = () => {
    closeTimeout.current = setTimeout(() => setProductsOpen(false), 150);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-md bg-white flex items-center justify-center overflow-hidden p-1 border border-zinc-200 dark:border-transparent">
            <Image
              src="/images/qubee-logo.png"
              alt="Qubee Electronics"
              width={32}
              height={32}
              className="object-contain"
            />
          </span>
          <span className="font-semibold text-lg tracking-tight">
            <span className="text-red-600 dark:text-red-500">Qubee</span>{" "}
            <span className="text-blue-600 dark:text-blue-400 font-normal">
              Electronics
            </span>
          </span>
        </Link>

        {/* Middle nav — Products dropdown, Contact, About ONLY. No search here. */}
        <div className="hidden lg:flex items-center gap-10">
          <div
            className="relative"
            onMouseEnter={openProducts}
            onMouseLeave={scheduleCloseProducts}
          >
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56"
                >
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-2">
                    {PRODUCT_LINKS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                      >
                        <p.icon className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
          >
            About
          </Link>
        </div>

        {/* Right cluster — ONE search trigger (icon + label), then theme toggle, cart, Shop Now */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
          <ThemeToggle />
          <button
            aria-label="Cart"
            className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
          <Link
            href="/products"
            className="px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors duration-150"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-zinc-900 dark:text-zinc-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMobileOpen(false);
                }}
                className="flex items-center gap-3 py-3 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                Search
              </button>

              <button
                onClick={() => setMobileProductsOpen((v) => !v)}
                className="flex items-center justify-between py-3 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4 flex flex-col"
                  >
                    {PRODUCT_LINKS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="flex items-center gap-3 py-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                        onClick={() => setMobileOpen(false)}
                      >
                        <p.icon className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                        {p.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/contact"
                className="py-3 text-zinc-700 dark:text-zinc-300 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="py-3 text-zinc-700 dark:text-zinc-300 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              <Link
                href="/products"
                className="mt-4 px-5 py-3 rounded-lg bg-red-600 text-white text-sm font-semibold text-center"
                onClick={() => setMobileOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </motion.header>
  );
}