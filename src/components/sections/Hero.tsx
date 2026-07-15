"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, Send } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[max(90vh,640px)] w-full overflow-hidden bg-zinc-950 flex items-end">      {/* Video background — always dark-treated regardless of site theme,
          same precedent as the photo tiles in BentoFeatures */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/products/hero-laptop-qubee.jpg"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Vignette so text stays legible over any footage */}
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/20" />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/80 via-zinc-950/20 to-transparent" />

      {/* Content — asymmetric, lower-left, not centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-28 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="inline-block text-xs uppercase tracking-widest font-semibold text-blue-300 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-6"
          >
            Addis Ababa&apos;s Premier Tech Showroom
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6"
          >
            Premium Tech,{" "}
            <span className="text-blue-400">Delivered Fast</span> in Addis Ababa
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg lg:text-xl text-zinc-300 max-w-xl leading-relaxed mb-10"
          >
            Genuine laptops and phones from the brands you trust — with
            same-day pickup in Bole and delivery citywide.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/products"
              className="group px-8 py-4 rounded-lg bg-red-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-500 transition-colors duration-150"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => setVideoOpen(true)}
              className="px-8 py-4 rounded-lg border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm text-zinc-200 font-semibold flex items-center justify-center gap-2 hover:border-zinc-500 hover:bg-zinc-900 transition-colors duration-150"
            >
              <PlayCircle className="w-4 h-4" />
              Watch Store Tour
            </button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">12,000+</div>
                <div className="text-sm text-zinc-400">Orders delivered</div>
              </div>
              <div className="w-px h-10 bg-zinc-700" />
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-zinc-400">Customer rating</div>
              </div>
              <div className="w-px h-10 bg-zinc-700" />
              <div>
                <div className="text-2xl font-bold text-white">48hr</div>
                <div className="text-sm text-zinc-400">Warranty response</div>
              </div>
            </div>

            <a
              href="https://t.me/QUBEE0911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-blue-300 transition-colors duration-150"
            >
              <Send className="w-4 h-4" />
              Chat on Telegram
            </a>
          </motion.div>
        </motion.div>
      </div>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  );
}