"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MapPin, Users } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutTeam() {
  return (
    <section className="relative bg-white dark:bg-zinc-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-4/5">
              <Image
                src="/images/qubee-team.jpg"
                alt="The Qubee Electronics team in our Bole showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-xl dark:shadow-2xl flex items-center gap-3"
            >
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                  5-person team
                </div>
                <div className="text-xs text-zinc-500">on the ground in Bole</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <motion.span
              variants={item}
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase"
            >
              Who we are
            </motion.span>

            <motion.h2
              variants={item}
              className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight mb-6"
            >
              A real team, a real store, real accountability
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6"
            >
              Qubee Electronics isn&apos;t a warehouse you&apos;ll never see —
              we&apos;re a five-person team running an actual showroom on
              Bole Road. Every laptop and phone on our shelves has been
              checked by someone whose name you can ask for.
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-8 text-zinc-600 dark:text-zinc-400"
            >
              <MapPin className="w-5 h-5 text-zinc-400 dark:text-zinc-600 shrink-0" />
              -   <span className="text-sm">
                -     Bole Medhanialem, Oromia Tower — open daily, walk-ins welcome
                -   </span>
              <a
                href="https://maps.app.goo.gl/AEo5EiPyttBMcsvG7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors duration-150"
              >
                Bole Medhanialem, Oromia Tower — open daily, walk-ins welcome
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2019</div>
                <div className="text-xs text-zinc-500 mt-1">Founded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">12,000+</div>
                <div className="text-xs text-zinc-500 mt-1">Orders shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">163K+</div>
                <div className="text-xs text-zinc-500 mt-1">Facebook community</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}