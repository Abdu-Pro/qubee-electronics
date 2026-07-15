"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Phone, Send, MapPin, Truck, ShieldCheck } from "lucide-react";

interface ProductLike {
  name: string;
  image: string;
  description?: string;
  category?: string;
}

const CONTACT_OPTIONS = [
  { icon: Phone, label: "Call us", sub: "0911 539 551", href: "tel:+251911539551" },
  { icon: Send, label: "Telegram — Sales", sub: "@QUBEE0911", href: "https://t.me/QUBEE0911" },
  { icon: Send, label: "Telegram — Sales", sub: "@Bonex1011", href: "https://t.me/Bonex1011" },
  {
    icon: MapPin,
    label: "Visit in person",
    sub: "Bole Medhanialem, Oromia Tower",
    href: "https://maps.app.goo.gl/AEo5EiPyttBMcsvG7",
  },
  { icon: Truck, label: "Request delivery", sub: "Message us your address", href: "https://t.me/QUBEE0911" },
];

export default function ProductDetailModal({
  product,
  onClose,
}: {
  product: ProductLike;
  onClose: () => void;
}) {
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
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl"
        >
          <div className="relative aspect-16/9">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center text-zinc-200 hover:text-white transition-colors duration-150"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {product.category && (
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {product.category}
              </span>
            )}
            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {product.name}
            </h3>

            {product.description && (
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {product.description}
              </p>
            )}

            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              Genuine stock, checked in-store before sale
            </div>

            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-3">
              Get pricing &amp; availability
            </div>
            <div className="space-y-2">
              {CONTACT_OPTIONS.map((opt) => (
                <a
                  key={opt.label + opt.sub}
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 transition-colors duration-150"
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}