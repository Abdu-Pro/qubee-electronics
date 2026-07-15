"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card: Variants = {
  hidden: { y: 32, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const STATS = [
  { value: "24hr", label: "Same-day dispatch in Bole" },
  { value: "12mo", label: "Official manufacturer warranty" },
  { value: "0%", label: "Interest on 3-month installments" },
];

export default function BentoFeatures() {
  return (
    <section className="relative bg-white dark:bg-zinc-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Shop by category
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            Laptops and phones, done right
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every unit on our shelves is genuine, in stock, and photographed
            exactly as it sits in our Bole showroom.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[220px] gap-6"
        >
          <motion.div variants={card} className="md:col-span-4 md:row-span-2">
            <Link
              href="/products/laptops"
              className="group relative h-full flex flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors duration-300"            >
              <Image
                src="/images/products/category-laptops.jpg"
                alt="Laptops in stock at Qubee Electronics"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="relative p-8 flex items-end justify-between">
                <div>
                  <div className="text-xs font-medium text-zinc-300 mb-2">
                    180+ models
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Laptops
                  </h3>
                  <p className="text-sm text-zinc-300 mt-2 max-w-sm">
                    MacBooks, ThinkPads, EliteBooks, and gaming rigs — official warranty on every unit.
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </div>
            </Link>
          </motion.div>

          <motion.div variants={card} className="md:col-span-2 md:row-span-1">
            <Link
              href="/products/phones"
              className="group relative h-full flex flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <Image
                src="/images/products/category-phones.jpg"
                alt="Phones in stock at Qubee Electronics"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

              <div className="relative p-6 flex items-end justify-between">
                <div>
                  <div className="text-xs font-medium text-zinc-300 mb-1">
                    240+ models
                  </div>
                  <h3 className="text-xl font-bold text-white">Phones</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </div>
            </Link>
          </motion.div>

          <motion.div variants={card} className="md:col-span-2 md:row-span-1">
            <div className="relative h-full flex flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/images/products/verified-stock.jpg"
                alt="Verified in-store laptop inventory at Qubee Electronics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              <div className="relative p-6">
                <ShieldCheck className="w-5 h-5 text-red-400 mb-2" />
                <h3 className="text-lg font-bold text-white leading-snug">
                  Real inventory,<br />verified in-store
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={card}
            className="md:col-span-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${i > 0 ? "sm:pl-8 sm:border-l sm:border-zinc-200 dark:sm:border-zinc-800" : ""
                    }`}
                >
                  <span className="text-3xl font-bold text-red-500 dark:text-red-400 shrink-0">
                    {stat.value}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}