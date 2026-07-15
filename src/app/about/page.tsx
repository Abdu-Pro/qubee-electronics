import type { Metadata } from "next";
import AboutTeam from "@/components/sections/AboutTeam";

export const metadata: Metadata = {
  title: "About Us — Qubee Electronics",
  description:
    "Meet the team behind Qubee Electronics — a five-person showroom on Bole Road, Addis Ababa.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutTeam />
    </main>
  );
}