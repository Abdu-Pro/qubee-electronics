"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const LINK_GROUPS = [
  {
    title: "Shop",
    links: [
      { label: "Laptops", href: "/products/laptops" },
      { label: "Desktops", href: "/products/desktops" },
      { label: "Tablets", href: "/products/tablets" },
      { label: "Phones", href: "/products/phones" },
      { label: "Accessories", href: "/products/accessories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Qubee", href: "/about" },
      { label: "Store location", href: "https://maps.app.goo.gl/AEo5EiPyttBMcsvG7" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-1.03-.85-1.6-2.05-1.6-3.32h-3.15v13.7a2.65 2.65 0 1 1-2.65-2.65c.29 0 .57.04.83.12V10.6a5.8 5.8 0 0 0-.83-.06A5.8 5.8 0 1 0 15 16.34V9.28a6.7 6.7 0 0 0 4 1.3V7.44a3.7 3.7 0 0 1-2.4-1.62Z" />
    </svg>
  );
}

const SOCIALS = [
  {
    icon: FacebookIcon,
    href: "https://web.facebook.com/people/Qubee-Electronics/100083217444304/",
    label: "Facebook",
    count: "163.9K",
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@qubee_electronics",
    label: "TikTok",
    count: "169.9K",
  },
  {
    icon: Send,
    href: "https://telegram.me/qubee_electronics",
    label: "Telegram",
    count: "3.7K",
  },
];

export default function Footer() {
  // Footer stays a fixed deep-navy band regardless of site theme —
  // same treatment as the Hero video, and avoids a washed-out pale
  // blue-50 tint in light mode.
  return (
    <footer className="relative bg-blue-950 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          <motion.div variants={item} className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-md bg-white flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/images/qubee-logo.png"
                  alt="Qubee Electronics"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </span>
              <span className="font-semibold text-lg tracking-tight">
                <span className="text-red-400">Qubee</span>{" "}
                <span className="text-blue-300 font-normal">Electronics</span>
              </span>
            </Link>

            <p className="text-blue-200/70 leading-relaxed max-w-sm mb-8">
              Genuine laptops and phones — trusted by over 163,000 followers
              and 12,000+ customers across Addis Ababa.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="https://maps.app.goo.gl/AEo5EiPyttBMcsvG7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-blue-200/70 hover:text-blue-100 hover:underline transition-colors duration-150 w-fit"
              >
                <MapPin className="w-4 h-4 text-blue-400/60 shrink-0" />
                Bole Medhanialem, Oromia Tower
              </a>
              <div className="flex items-center gap-3 text-sm text-blue-200/70">
                <Phone className="w-4 h-4 text-blue-400/60 shrink-0" />
                0911 539 551
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-200/70">
                <Mail className="w-4 h-4 text-blue-400/60 shrink-0" />
                qubeelectronics2020@gmail.com
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-900 text-blue-300/70 hover:text-blue-100 hover:border-blue-700 transition-colors duration-150"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{social.count}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block lg:col-span-1" />

          {LINK_GROUPS.map((group) => (
            <motion.div key={group.title} variants={item} className="lg:col-span-3">
              <h4 className="text-sm font-semibold text-blue-50 mb-5">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-blue-300/70 hover:text-blue-100 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-10 border-t border-blue-900"
        >
          <div>
            <h4 className="text-lg font-semibold text-blue-50 mb-1">
              Get restock alerts and deal drops
            </h4>
            <p className="text-sm text-blue-300/70">
              One email a week. Unsubscribe anytime.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 min-w-0 sm:w-72 px-4 py-3 rounded-lg bg-blue-900/40 border border-blue-800 text-sm text-blue-50 placeholder:text-blue-300/50 focus:outline-none focus:border-blue-500/50 transition-colors duration-150"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors duration-150 shrink-0 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-blue-900 text-xs text-blue-300/50">
          <p>&copy; {new Date().getFullYear()} Qubee Electronics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-blue-200 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-200 transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}