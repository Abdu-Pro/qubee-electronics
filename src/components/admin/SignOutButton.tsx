"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 text-sm text-zinc-500 hover:text-red-500 transition-colors duration-150"
    >
      <LogOut className="w-4 h-4" />
      Sign out
    </button>
  );
}