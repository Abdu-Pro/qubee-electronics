import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ProductForm from "@/components/admin/ProductForm";

export default async function NewProductPage() {
  const supabase = await createClient();
  const { data: categories } = await supabase
    .from("categories")
    .select("slug, label")
    .order("sort_order");

  return (
    <div>
      <Link
        href="/admin/products"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 mb-6 transition-colors duration-150"
      >
        <ArrowLeft className="w-4 h-4" />
        All products
      </Link>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">Add product</h1>
      <ProductForm categories={categories ?? []} />
    </div>
  );
}