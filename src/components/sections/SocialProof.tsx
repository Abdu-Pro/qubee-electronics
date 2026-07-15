"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Star } from "lucide-react";
import RatingBadge from "@/components/ui/RatingBadge";
const TESTIMONIALS = [
  {
    quote:
      "Ordered a MacBook Pro on a Tuesday, had it in my hands in Bole by Wednesday afternoon. Warranty card was genuine — I checked with Apple directly.",
    author: "Betelhem Girma",
    role: "Graphic Designer, Addis Ababa",
    rating: 5,
  },
  {
    quote:
      "I bought my study laptop from Qubee right after high school. Scored 590/600 on the ESSLCE, and this laptop got me through every late-night study session.",
    author: "Gosa Negeso",
    role: "ESSLCE 590/600 Scorer",
    rating: 5,
  },
  {
    quote:
      "As an engineering student at SIT, I needed something that could handle CAD software without lagging. Qubee's team pointed me to the right laptop and it hasn't let me down once.",
    author: "Abdurehman Hussein",
    role: "Student, Shaggar Institute of Technology",
    rating: 5,
  },
  {
    quote:
      "Messaged their Telegram about the Galaxy S24 and got a reply within minutes. Picked it up same day.",
    author: "Nathnael Tesfaye",
    role: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "Called about a charging port issue. They swapped it same week, no questions asked.",
    author: "Hiwot Alemu",
    role: "University Student",
    rating: 5,
  },
  {
    quote:
      "Best prices I found on the ThinkPad X1 after checking four other shops in Bole.",
    author: "Dawit Mekonnen",
    role: "Small Business Owner",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 flex flex-col justify-between rounded-2xl border border-blue-100 dark:border-zinc-800 bg-blue-50 dark:bg-zinc-900 p-8 select-none">
      <div>
        <div className="flex gap-1 mb-5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400"
            />
          ))}
        </div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 mt-8">
        <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-600/30 flex items-center justify-center shrink-0">
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
            {t.author.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t.author}</div>
          <div className="text-xs text-zinc-500">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

const SPEED_PX_PER_SEC = 40;

export default function SocialProof() {
  const looped = [...TESTIMONIALS, ...TESTIMONIALS];
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (trackRef.current) setSetWidth(trackRef.current.scrollWidth / 2);
  }, []);

  useEffect(() => {
    if (!setWidth || paused) return;
    let cancelled = false;
    let controls: ReturnType<typeof animate>;

    function loop() {
      const from = x.get();
      const to = from - setWidth;
      controls = animate(x, to, {
        duration: setWidth / SPEED_PX_PER_SEC,
        ease: "linear",
        onComplete: () => {
          if (cancelled) return;
          x.set(from); // wrap seamlessly — the duplicated list makes this invisible
          loop();
        },
      });
    }
    loop();

    return () => {
      cancelled = true;
      controls?.stop();
    };
  }, [setWidth, paused, x]);

  return (
    <section className="relative bg-white dark:bg-zinc-950 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="max-w-2xl ml-auto text-right">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Customer stories
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            Trusted across Addis Ababa
          </h2>
          <div className="mt-4 flex justify-end">
            <RatingBadge rating={4.9} totalLabel="12,000+ orders" />
          </div>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Real feedback from customers across Addis Ababa. Hover and drag
            to browse at your own pace.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-linear-to-r from-white dark:from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-linear-to-l from-white dark:from-zinc-950 to-transparent" />

        <motion.div
          ref={trackRef}
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -setWidth * 3, right: setWidth }}
          dragElastic={0.15}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onDragStart={() => setPaused(true)}
          onDragEnd={() => setPaused(false)}
        >
          {looped.map((t, i) => (
            <TestimonialCard key={`${t.author}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}