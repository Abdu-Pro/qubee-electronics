"use client";

import { useState } from "react";
import { PackageSearch } from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

export default function ComingSoonCategory({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 py-20 px-8 text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-6">
          <PackageSearch className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
          {label} catalog photos coming soon
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
          Our {label.toLowerCase()} inventory changes often — message us
          directly and we&apos;ll tell you exactly what&apos;s in stock
          today, with real photos.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex px-8 py-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors duration-150"
        >
          Ask what&apos;s in stock
        </button>
      </div>

      {open && (
        <ContactModal
          productName={`${label} — general inquiry`}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}