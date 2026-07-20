"use client";

import { useState, useTransition } from "react";
import ImageUploader from "@/components/admin/ImageUploader";
import { createProduct, updateProduct } from "@/app/admin/(protected)/products/actions";

interface Category {
  slug: string;
  label: string;
}

interface ProductFormProps {
  categories: Category[];
  productId?: string;
  initial?: {
    name: string;
    category_slug: string;
    description: string;
    images: string[];
  };
}

export default function ProductForm({ categories, productId, initial }: ProductFormProps) {
  const [name, setName] = useState(initial?.name ?? "");
  const [categorySlug, setCategorySlug] = useState(initial?.category_slug ?? categories[0]?.slug ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [images, setImages] = useState<string[]>(initial?.images ?? []);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (images.length === 0) {
      setError("Add at least one photo before saving.");
      return;
    }

    const payload = { name, category_slug: categorySlug, description, images };

    startTransition(async () => {
      try {
        if (productId) {
          await updateProduct(productId, payload);
        } else {
          await createProduct(payload);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Product name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. HP EliteBook x360, Convertible"
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Category
        </label>
        <select
          value={categorySlug}
          onChange={(e) => setCategorySlug(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors duration-150"
        >
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Genuine unit, checked in-store. Message us for full specs, condition, and current price."
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors duration-150 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Photos
        </label>
        <ImageUploader images={images} onChange={setImages} />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500 disabled:opacity-50 transition-colors duration-150"
      >
        {isPending ? "Saving..." : productId ? "Save changes" : "Add product"}
      </button>
    </form>
  );
}