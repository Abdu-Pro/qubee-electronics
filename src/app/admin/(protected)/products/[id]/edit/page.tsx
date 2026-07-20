import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ProductForm from "@/components/admin/ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const [{ data: product }, { data: categories }] = await Promise.all([
    supabase.from("products").select("*").eq("id", id).single(),
    supabase.from("categories").select("slug, label").order("sort_order"),
  ]);

  if (!product) notFound();

  return (
    <div>
      <Link
        href="/admin/products"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 mb-6 transition-colors duration-150"
      >
        <ArrowLeft className="w-4 h-4" />
        All products
      </Link>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">Edit product</h1>
      <ProductForm
        categories={categories ?? []}
        productId={product.id}
        initial={{
          name: product.name,
          category_slug: product.category_slug,
          description: product.description ?? "",
          images: product.images ?? [],
        }}
      />
    </div>
  );
}