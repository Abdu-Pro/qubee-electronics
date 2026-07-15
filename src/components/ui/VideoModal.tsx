"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950"
        >
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-lg bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-300 hover:text-zinc-50 transition-colors duration-150"
          >
            <X className="w-4 h-4" />
          </button>
          <video
            src="/videos/store-tour.mp4"
            controls
            autoPlay
            className="w-full aspect-video bg-black"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}