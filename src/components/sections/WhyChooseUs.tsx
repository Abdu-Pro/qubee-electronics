"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Truck, Users, MessageCircleHeart } from "lucide-react";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Genuine, warrantied stock",
    description:
      "Every laptop and phone is checked in-store before it reaches the shelf, backed by official manufacturer warranty.",
  },
  {
    icon: Truck,
    title: "Fast, reliable delivery",
    description:
      "Same-day pickup in Bole, delivery citywide — we tell you honestly when it'll arrive, no surprises.",
  },
  {
    icon: Users,
    title: "A brand people trust",
    description:
      "163,900+ on Facebook, 169,900+ on TikTok — built on real customer experiences, not paid promotion.",
  },
  {
    icon: MessageCircleHeart,
    title: "Real people, fast replies",
    description:
      "Message us on Telegram and talk to an actual team member — not a bot, not a script.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white dark:bg-zinc-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Why choose us
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            Built on trust, not just transactions
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={item}
              className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 ${
                i % 2 !== 0 ? "sm:mt-10" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                {reason.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}