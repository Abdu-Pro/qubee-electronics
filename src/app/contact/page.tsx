import type { Metadata } from "next";
import { Phone, Send, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us — Qubee Electronics",
    description: "Reach Qubee Electronics by phone, Telegram, email, or visit our Bole showroom.",
};

const CHANNELS = [
    {
        icon: Phone,
        label: "Call us",
        value: "0911 539 551",
        href: "tel:+251911539551",
    },
    {
        icon: Send,
        label: "Telegram — Sales",
        value: "@QUBEE0911",
        href: "https://t.me/QUBEE0911",
    },
    {
        icon: Send,
        label: "Telegram — Sales",
        value: "@Bonex1011",
        href: "https://t.me/Bonex1011",
    },
    {
        icon: Mail,
        label: "Email",
        value: "qubeelectronics2020@gmail.com",
        href: "mailto:qubeelectronics2020@gmail.com",
    },
];

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-5 gap-16">
                    <div className="lg:col-span-2">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                            Get in touch
                        </span>
                        <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight mb-6">
                            We reply fast
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                            Telegram is usually the quickest way to reach us. Prefer to
                            talk it through? Give us a call.
                        </p>

                        <a
                            href="https://maps.app.goo.gl/AEo5EiPyttBMcsvG7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 mb-6"
                        >
                            <MapPin className="w-5 h-5 text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:underline transition-colors duration-150">
                                Bole Medhanialem, Oromia Tower, Addis Ababa
                            </span>
                        </a>

                        <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                Open daily — walk-ins welcome
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                        {CHANNELS.map((c) => (
                            <a
                                key={c.label + c.value}
                                href={c.href}
                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 transition-colors duration-150"
                            >
                                <div className="w-11 h-11 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-red-500/10 transition-colors duration-150 shrink-0">
                                    <c.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-300 group-hover:text-red-500 transition-colors duration-150" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                        {c.label}
                                    </div>
                                    <div className="text-xs text-zinc-500">{c.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main >
    );
}