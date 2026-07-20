"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError("Incorrect email or password.");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <span className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-2 border border-zinc-200 mb-4">
            <Image
              src="/images/qubee-logo.png"
              alt="Qubee Electronics"
              width={48}
              height={48}
              className="object-contain"
            />
          </span>
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Admin Dashboard
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors duration-150"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors duration-150"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500 disabled:opacity-50 transition-colors duration-150"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}