import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
};

export default function TermsPage() {
    return (
        <main className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
                    Terms of Service
                </h1>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <p>Last updated: July 2026</p>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
                            Orders &amp; pricing
                        </h2>
                        <p>
                            Product listings on this site do not display fixed prices, as
                            our inventory and pricing change frequently. All prices are
                            confirmed directly with our team via phone, Telegram, or
                            in-person visit before any order is placed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
                            Warranty
                        </h2>
                        <p>
                            All laptops and phones sold by Qubee Electronics carry the
                            official manufacturer warranty applicable to that product,
                            unless otherwise stated at the time of sale.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
                            Delivery
                        </h2>
                        <p>
                            Delivery timing and availability are confirmed at the time of
                            order and may vary based on your location within Addis Ababa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-3">
                            Contact us
                        </h2>
                        <p>
                            For any questions about an order, reach us at{" "}
                            <a
                                href="tel:+251911539551"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                0911 539 551
                            </a>{" "}
                            or on Telegram at{" "}
                            <a
                                href="https://t.me/QUBEE0911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                @QUBEE0911
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}