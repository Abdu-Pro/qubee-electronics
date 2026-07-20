import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LayoutDashboard, Package, Tag, MessageSquareQuote, LogOut } from "lucide-react";
import SignOutButton from "@/components/admin/SignOutButton";

const NAV = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Deals", href: "/admin/deals", icon: Tag },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <aside className="w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <span className="font-semibold text-lg">
            <span className="text-red-600">Qubee</span>{" "}
            <span className="text-blue-600 dark:text-blue-400 font-normal">Admin</span>
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 mb-3 truncate">{user.email}</p>
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}