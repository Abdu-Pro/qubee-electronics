import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Monitor, Tablet, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "All Products — Qubee Electronics",
  description: "Browse laptops, desktops, tablets, phones, and accessories at Qubee Electronics.",
};

const PHOTO_CATEGORIES = [
  {
    slug: "laptops",
    label: "Laptops",
    blurb: "MacBooks, ThinkPads, EliteBooks, and more",
    image: "/images/products/category-laptops.jpg",
  },
  {
    slug: "phones",
    label: "Phones",
    blurb: "iPhone, Galaxy, Tecno, and more",
    image: "/images/products/category-phones.jpg",
  },
];

const ICON_CATEGORIES = [
  { slug: "desktops", label: "Desktops", icon: Monitor, blurb: "Full towers and all-in-ones" },
  { slug: "tablets", label: "Tablets", icon: Tablet, blurb: "iPads and Android tablets" },
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

        {/* Photo cards for categories with real in-store stock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {PHOTO_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors duration-300 aspect-4/3"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{cat.label}</h2>
                <p className="text-sm text-zinc-300">{cat.blurb}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Icon cards for categories without real stock photos yet */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ICON_CATEGORIES.map((cat) => (
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