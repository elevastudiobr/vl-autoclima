"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Snowflake,
  Wrench,
} from "lucide-react";
import { useState } from "react";

import { WHATSAPP_NUMBER } from "@/lib/constants";

const whatsappMessage =
  "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const serviceCategories = {
  ar: {
    label: "Ar-condicionado",
    description:
      "Diagnóstico e manutenção completa do sistema de climatização do seu veículo.",
    services: [
      "Diagnóstico do sistema",
      "Higienização",
      "Recarga de gás",
      "Manutenção preventiva",
      "Reparo do sistema",
      "Compressor e componentes",
    ],
  },

  mecanica: {
    label: "Mecânica geral",
    description:
      "Manutenção preventiva e corretiva para manter seu veículo seguro e em perfeito funcionamento.",
    services: [
      "Troca de óleo e filtros",
      "Freios",
      "Suspensão",
      "Manutenção do motor",
      "Bateria",
      "Revisão preventiva",
    ],
  },
};

type Category = keyof typeof serviceCategories;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>("ar");

  const activeService = serviceCategories[activeCategory];

  return (
    <section
      id="servicos"
      className="relative isolate overflow-hidden bg-[#030507] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-[180px] -top-[180px] -z-10 h-[620px] w-[620px] rounded-full bg-[#0759d9]/[0.12] blur-[150px]" />

      <div className="pointer-events-none absolute -left-[280px] top-[35%] -z-10 h-[620px] w-[620px] rounded-full bg-[#1474ff]/[0.08] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-300px] right-[15%] -z-10 h-[600px] w-[600px] rounded-full bg-[#0759d9]/[0.07] blur-[180px]" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_25%,rgba(7,89,217,0.08),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(20,116,255,0.045),transparent_28%)]" />

      <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#1474ff]/25 to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-[680px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1474ff]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b8cff]">
                Nossos serviços
              </span>
            </div>

            <h2 className="text-[38px] font-bold leading-[1] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[58px]">
              Cuidado técnico para
              <br />
              <span className="text-white/40">o seu veículo.</span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[13px] leading-6 text-white/45 lg:pb-1">
            Da climatização à mecânica geral, a VL Autoclima cuida do seu carro
            com diagnóstico preciso e serviço transparente.
          </p>
        </div>

        <div className="relative min-h-[650px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090d12] shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:min-h-[680px]">
          <div className="absolute inset-0">
            <Image
              src="/images/services/services-main.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#030507]/[0.97] via-[#030507]/[0.86] to-[#030507]/[0.30]" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030507]/[0.92] via-transparent to-[#030507]/[0.18]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(20,116,255,0.13),transparent_34%)]" />

          <div className="relative z-10 flex min-h-[650px] flex-col justify-center p-6 sm:p-10 lg:min-h-[680px] lg:max-w-[720px] lg:p-14 xl:p-16">
            <div className="mb-10 flex max-w-[500px] border-b border-white/[0.10]">
              <button
                type="button"
                onClick={() => setActiveCategory("ar")}
                className={`relative flex flex-1 items-center gap-2.5 pb-4 text-left text-[11px] font-semibold transition-colors duration-300 ${
                  activeCategory === "ar"
                    ? "text-white"
                    : "text-white/35 hover:text-white/65"
                }`}
              >
                <Snowflake
                  size={15}
                  strokeWidth={1.7}
                  className={
                    activeCategory === "ar"
                      ? "text-[#3b8cff]"
                      : "text-white/30"
                  }
                />

                <span>Ar-condicionado</span>

                <span
                  className={`absolute bottom-[-1px] left-0 h-px transition-all duration-300 ${
                    activeCategory === "ar"
                      ? "w-full bg-[#1474ff]"
                      : "w-0"
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("mecanica")}
                className={`relative flex flex-1 items-center gap-2.5 pb-4 text-left text-[11px] font-semibold transition-colors duration-300 ${
                  activeCategory === "mecanica"
                    ? "text-white"
                    : "text-white/35 hover:text-white/65"
                }`}
              >
                <Wrench
                  size={15}
                  strokeWidth={1.7}
                  className={
                    activeCategory === "mecanica"
                      ? "text-[#3b8cff]"
                      : "text-white/30"
                  }
                />

                <span>Mecânica geral</span>

                <span
                  className={`absolute bottom-[-1px] left-0 h-px transition-all duration-300 ${
                    activeCategory === "mecanica"
                      ? "w-full bg-[#1474ff]"
                      : "w-0"
                  }`}
                />
              </button>
            </div>

            <div className="mb-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1474ff]/20 bg-[#1474ff]/[0.08]">
                {activeCategory === "ar" ? (
                  <Snowflake
                    size={21}
                    strokeWidth={1.6}
                    className="text-[#3b8cff]"
                  />
                ) : (
                  <Wrench
                    size={21}
                    strokeWidth={1.6}
                    className="text-[#3b8cff]"
                  />
                )}
              </div>

              <h3 className="text-[27px] font-semibold tracking-[-0.03em] text-white sm:text-[30px]">
                {activeService.label}
              </h3>

              <p className="mt-3 max-w-[500px] text-[13px] leading-6 text-white/50">
                {activeService.description}
              </p>
            </div>

            <div className="max-w-[560px]">
              <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
                {activeService.services.map((service, index) => (
                  <div
                    key={service}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-medium tabular-nums text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                        {service}
                      </span>
                    </div>

                    <Check
                      size={14}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#3b8cff]/70"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold text-white transition-colors duration-300 hover:text-[#5a9fff]"
              >
                <span>Solicitar orçamento</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}