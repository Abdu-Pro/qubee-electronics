"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductDetailModal from "@/components/ui/ProductDetailModal";
import type { Product } from "@/lib/products";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function CategoryGrid({
  products,
  categoryLabel,
}: {
  products: Product[];
  categoryLabel: string;
}) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {products.map((product) => (
          <motion.button
            key={product.id}
            variants={card}
            onClick={() => setActiveProduct(product)}
            className="group relative text-left overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-red-400/50 dark:hover:border-red-500/40 transition-colors duration-300 aspect-4/5"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{product.name}</h3>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 group-hover:text-red-400 transition-colors duration-300">
                View details &amp; order
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {activeProduct && (
        <ProductDetailModal
          product={{ ...activeProduct, category: categoryLabel }}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </>
  );
}