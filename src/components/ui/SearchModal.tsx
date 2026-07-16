"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { PRODUCTS, CATEGORY_LABELS } from "@/lib/products";

interface SearchResult {
  id: string;
  name: string;
  image: string;
  categorySlug: string;
  categoryLabel: string;
}

const ALL_PRODUCTS: SearchResult[] = Object.entries(PRODUCTS).flatMap(
  ([categorySlug, products]) =>
    products.map((p) => ({
      id: p.id,
      name: p.name,
      image: p.images[0],
      categorySlug,
      categoryLabel: CATEGORY_LABELS[categorySlug],
    }))
);

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-zinc-950/60 dark:bg-zinc-950/80 backdrop-blur-sm flex items-start justify-center p-4 pt-24 sm:pt-32"
      >
        <motion.div
          initial={{ y: -16, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -16, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <Search className="w-5 h-5 text-zinc-400 shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search laptops, phones..."
              className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none text-sm"
            />
            <button
              onClick={onClose}
              aria-label="Close search"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {query.trim() === "" && (
              <div className="px-5 py-10 text-center text-sm text-zinc-500">
                Start typing to search our catalog
              </div>
            )}

            {query.trim() !== "" && results.length === 0 && (
              <div className="px-5 py-10 text-center">
                <p className="text-sm text-zinc-500 mb-4">
                  No matches for &ldquo;{query}&rdquo;
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors duration-150"
                >
                  Ask us directly instead →
                </Link>
              </div>
            )}

            {results.map((r) => (
              <Link
                key={r.id}
                href={`/products/${r.categorySlug}`}
                onClick={onClose}
                className="flex items-center gap-4 px-5 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-150"
              >
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800">
                  <Image src={r.image} alt={r.name} fill className="object-cover" sizes="48px" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                    {r.name}
                  </div>
                  <div className="text-xs text-zinc-500">{r.categoryLabel}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}