import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CategoryGrid from "@/components/products/CategoryGrid";
import ComingSoonCategory from "@/components/products/ComingSoonCategory";
import { PRODUCTS, COMING_SOON_CATEGORIES, CATEGORY_LABELS } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = CATEGORY_LABELS[category];
  return { title: label ? `${label} — Qubee Electronics` : "Qubee Electronics" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category];
  if (!label) notFound();

  const products = PRODUCTS[category];
  const isComingSoon = COMING_SOON_CATEGORIES.includes(category);

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 mb-8 transition-colors duration-150"
        >
          <ArrowLeft className="w-4 h-4" />
          All categories
        </Link>

        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            {label}
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            {isComingSoon ? `Explore ${label}` : `In-stock ${label.toLowerCase()}`}
          </h1>
          {!isComingSoon && (
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Tap any item for pricing and availability — our team replies
              fast on Telegram.
            </p>
          )}
        </div>

        {isComingSoon ? (
          <ComingSoonCategory label={label} />
        ) : (
          <CategoryGrid products={products} categoryLabel={label} />
        )}
      </div>
    </main>
  );
}