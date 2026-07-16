"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const hasMultiple = images.length > 1;

  const goTo = (newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((newIndex + images.length) % images.length);
  };

  return (
    <div className="relative aspect-16/9 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          drag={hasMultiple ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) goTo(index + 1, 1);
            else if (info.offset.x > 60) goTo(index - 1, -1);
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${alt} — photo ${index + 1} of ${images.length}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={() => goTo(index - 1, -1)}
            aria-label="Previous photo"
            className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 rounded-full bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center text-zinc-100 hover:bg-zinc-950/80 transition-colors duration-150 z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => goTo(index + 1, 1)}
            aria-label="Next photo"
            className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 rounded-full bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center text-zinc-100 hover:bg-zinc-950/80 transition-colors duration-150 z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}