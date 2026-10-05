import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { WHATSAPP_NUMBER } from "@/lib/constants";

const whatsappMessage =
  "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030507] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,116,255,0.10),transparent_45%)]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0759d9]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
        <div className="mx-auto mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#1474ff]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b8cff]">
            VL Autoclima
          </span>

          <span className="h-px w-8 bg-[#1474ff]" />
        </div>

        <h2 className="text-[42px] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[70px]">
          Seu carro em boas mãos.
        </h2>

        <p className="mx-auto mt-6 max-w-[520px] text-[13px] leading-6 text-white/40">
          Precisa de ar-condicionado automotivo ou mecânica geral?
          <br className="hidden sm:block" />
          Fale com a VL Autoclima.
        </p>

        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-9 inline-flex h-13 items-center justify-center gap-3 overflow-hidden rounded-xl border border-[#1474ff]/40 bg-[#0b5fd7] px-7 text-[12px] font-semibold text-white shadow-[0_12px_40px_rgba(20,116,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1474ff] hover:shadow-[0_16px_50px_rgba(20,116,255,0.25)]"
        >
          <span className="relative z-10">Solicitar orçamento</span>

          <ArrowUpRight
            size={16}
            strokeWidth={2}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Link>
      </div>
    </section>
  );
}