"use client";

import { useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteProduct } from "@/app/admin/(protected)/products/actions";

export default function DeleteProductButton({ id, name }: { id: string; name: string }) {
  const [confirming, setConfirming] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (confirming) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className="text-zinc-500">Delete &ldquo;{name}&rdquo;?</span>
        <button
          onClick={() => startTransition(() => deleteProduct(id))}
          disabled={isPending}
          className="text-red-500 font-semibold hover:text-red-400"
        >
          {isPending ? "..." : "Yes"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      aria-label={`Delete ${name}`}
      className="text-zinc-400 hover:text-red-500 transition-colors duration-150"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}