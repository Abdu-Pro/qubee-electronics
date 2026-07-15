import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>Last updated: July 2026</p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
              What we collect
            </h2>
            <p>
              If you use our newsletter signup, we collect your email
              address only. If you contact us via Telegram, phone, or in
              person, we use the information you share (like your name and
              phone number) solely to process your order or inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
              How we use it
            </h2>
            <p>
              We use your contact details to fulfill orders, arrange
              delivery, and send occasional restock or deal updates if you
              opted into our newsletter. We do not sell or share your
              information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
              Your choices
            </h2>
            <p>
              You can unsubscribe from our newsletter at any time. To
              request that we delete any information we hold about you,
              message us directly on Telegram or by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
              Contact us
            </h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:qubeelectronics2020@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                qubeelectronics2020@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}