import type { Metadata } from "next";
import Link from "next/link";
import { Laptop, Monitor, Tablet, Smartphone, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "All Products — Qubee Electronics",
  description: "Browse laptops, desktops, tablets, phones, and accessories at Qubee Electronics.",
};

const CATEGORIES = [
  { slug: "laptops", label: "Laptops", icon: Laptop, blurb: "MacBooks, ThinkPads, EliteBooks, and more" },
  { slug: "desktops", label: "Desktops", icon: Monitor, blurb: "Full towers and all-in-ones" },
  { slug: "tablets", label: "Tablets", icon: Tablet, blurb: "iPads and Android tablets" },
  { slug: "phones", label: "Phones", icon: Smartphone, blurb: "iPhone, Galaxy, Tecno, and more" },
  { slug: "accessories", label: "Accessories", icon: Headphones, blurb: "Chargers, cases, and audio" },
];

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Shop
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Browse by category
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors duration-300">
                <cat.icon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {cat.label}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{cat.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}