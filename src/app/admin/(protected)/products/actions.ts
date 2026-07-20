"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createProduct(formData: {
  name: string;
  category_slug: string;
  description: string;
  images: string[];
}) {
  const supabase = await createClient();
  const { error } = await supabase.from("products").insert(formData);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function updateProduct(
  id: string,
  formData: {
    name: string;
    category_slug: string;
    description: string;
    images: string[];
  }
) {
  const supabase = await createClient();
  const { error } = await supabase.from("products").update(formData).eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/products");
}