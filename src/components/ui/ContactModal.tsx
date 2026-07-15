"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Send, MapPin, Truck } from "lucide-react";

interface ContactModalProps {
  productName: string;
  onClose: () => void;
}

const CONTACT_OPTIONS = [
  {
    icon: Phone,
    label: "Call us",
    sub: "0911 539 551",
    href: "tel:+251911539551",
  },
  {
    icon: Send,
    label: "Telegram — Sales",
    sub: "@QUBEE0911",
    href: "https://t.me/QUBEE0911",
  },
  {
    icon: Send,
    label: "Telegram — Sales",
    sub: "@Bonex1011",
    href: "https://t.me/Bonex1011",
  },
  {
    icon: MapPin,
    label: "Visit in person",
    sub: "Bole Medhanialem, Oromia Tower",
    href: "https://maps.app.goo.gl/qxb6Gax2k6VHnAg79",
  },
  {
    icon: Truck,
    label: "Request delivery",
    sub: "Message us your address",
    href: "https://t.me/QUBEE0911",
  },
];

export default function ContactModal({ productName, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-zinc-950/60 dark:bg-zinc-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 32, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-500 mb-1">
                Get pricing &amp; availability
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {productName}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {CONTACT_OPTIONS.map((opt) => (
              <a
                key={opt.label + opt.sub}
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/40 transition-colors duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-red-500/10 transition-colors duration-150 shrink-0">
                  <opt.icon className="w-4 h-4 text-zinc-600 dark:text-zinc-300 group-hover:text-red-500 transition-colors duration-150" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {opt.label}
                  </div>
                  <div className="text-xs text-zinc-500">{opt.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}