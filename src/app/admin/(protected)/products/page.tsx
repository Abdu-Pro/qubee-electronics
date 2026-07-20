import Link from "next/link";
import Image from "next/image";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DeleteProductButton from "@/components/admin/DeleteProductButton";

export default async function AdminProductsPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("*, categories(label)")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">Products</h1>
          <p className="text-zinc-500 text-sm">{products?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors duration-150"
        >
          <Plus className="w-4 h-4" />
          Add product
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
        {!products || products.length === 0 ? (
          <div className="p-12 text-center text-zinc-500">
            No products yet. Add your first one above.
          </div>
        ) : (
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {products.map((product) => (
              <li key={product.id} className="flex items-center gap-4 p-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                  {product.images?.[0] && (
                    <Image src={product.images[0]} alt="" fill className="object-cover" sizes="56px" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {(product.categories as { label: string } | null)?.label ?? product.category_slug} ·{" "}
                    {product.images?.length ?? 0} photo{product.images?.length === 1 ? "" : "s"}
                  </p>
                </div>

                <Link
                  href={`/admin/products/${product.id}/edit`}
                  className="text-zinc-400 hover:text-blue-500 transition-colors duration-150"
                  aria-label={`Edit ${product.name}`}
                >
                  <Pencil className="w-4 h-4" />
                </Link>
                <DeleteProductButton id={product.id} name={product.name} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}