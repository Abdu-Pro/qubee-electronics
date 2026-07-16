"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ProductDetailModal from "@/components/ui/ProductDetailModal";
import { FEATURED_DEALS } from "@/lib/deals";

const AUTO_ADVANCE_MS = 5000;

const variants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 75 : -75,
    opacity: 0,
    scale: 0.92,
  }),
  center: { rotateY: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -75 : 75,
    opacity: 0,
    scale: 0.92,
  }),
};

export default function FeaturedDeals() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [activeDeal, setActiveDeal] = useState<(typeof FEATURED_DEALS)[number] | null>(null);

  const goTo = useCallback((newIndex: number, dir: number) => {
    setState([(newIndex + FEATURED_DEALS.length) % FEATURED_DEALS.length, dir]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => goTo(index + 1, 1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, paused, goTo]);

  const deal = FEATURED_DEALS[index];
  const isPhone = deal.category === "Phones";

  return (
    <section className="relative bg-white dark:bg-zinc-950 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl mb-16">
          <span className="text-sm font-semibold text-red-500 dark:text-red-400 tracking-wide uppercase">
            Featured this week
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            In stock, ready to go
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            One highlight at a time — tap for full details, or let it rotate.
          </p>
        </div>

        {/* Pause listeners live here, on the visual card only — not on the
            heading above, so resting your cursor anywhere else on the page
            doesn't accidentally freeze the rotation. */}
        <div
          className="relative mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ perspective: 1400 }}
        >
          <motion.div
            layout
            transition={{ layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
            className={`relative mx-auto rounded-2xl overflow-hidden ${
              isPhone
                ? "max-w-sm aspect-3/4"
                : "max-w-4xl aspect-16/10 sm:aspect-2/1"
            }`}
          >
            <AnimatePresence custom={direction}>
              <motion.button
                key={deal.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setActiveDeal(deal)}
                className="group absolute inset-0 w-full h-full text-left overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <Image
                  src={deal.images[0]}
                  alt={deal.name}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={isPhone ? "384px" : "(max-width: 1024px) 100vw, 60vw"}
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/10" />

                <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
                  <span className="text-xs font-medium text-zinc-300 uppercase tracking-wide mb-2">
                    {deal.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 max-w-md">
                    {deal.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 group-hover:text-red-400 transition-colors duration-300 w-fit">
                    View details
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            </AnimatePresence>
          </motion.div>

          <button
            aria-label="Previous"
            onClick={() => goTo(index - 1, -1)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => goTo(index + 1, 1)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {FEATURED_DEALS.map((d, i) => (
            <button
              key={d.id}
              aria-label={`Go to ${d.name}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-red-500"
                  : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>

      {activeDeal && (
        <ProductDetailModal product={activeDeal} onClose={() => setActiveDeal(null)} />
      )}
    </section>
  );
}