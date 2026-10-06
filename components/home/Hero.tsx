import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

import { WHATSAPP_NUMBER } from "@/lib/constants";

const whatsappMessage =
  "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[760px] w-full overflow-hidden bg-[#030507] lg:min-h-screen"
    >
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero/hero-1.webp"
          alt="Fachada da VL Autoclima em Paulínia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 -z-20 bg-black/35" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#030507]/[0.98] via-[#030507]/[0.76] to-[#030507]/[0.18]" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#030507] via-transparent to-[#030507]/35" />

      {/* GLOW AZUL */}
      <div className="absolute -left-40 top-[30%] -z-10 h-[600px] w-[600px] rounded-full bg-[#0759d9]/10 blur-[160px]" />

      {/* TRANSIÇÃO INFERIOR */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#030507]/95 via-[#030507]/35 to-transparent" />

      {/* CONTEÚDO */}
      <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1440px] items-center px-5 pb-32 pt-32 sm:px-8 lg:min-h-screen lg:px-16 lg:pb-36 lg:pt-32">
        <div className="max-w-[790px]">
          {/* TÍTULO */}
          <h1 className="hero-fade max-w-[780px] text-[46px] font-bold leading-[0.96] tracking-[-0.05em] text-white [animation-delay:100ms] sm:text-[60px] md:text-[70px] lg:text-[78px] xl:text-[86px]">
            Seu carro em
            <br />
            <span className="text-white">boas mãos.</span>
            <br />
            <span className="text-[#3b8cff]">
              Do diagnóstico à solução.
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p className="hero-fade mt-7 max-w-[570px] text-[14px] leading-7 text-white/60 [animation-delay:250ms] sm:text-[15px]">
            Ar-condicionado automotivo e mecânica geral com diagnóstico
            preciso, serviço transparente e cuidado em cada detalhe.
          </p>

          {/* BOTÕES */}
          <div className="hero-fade mt-9 flex flex-col gap-3 [animation-delay:400ms] sm:flex-row">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[53px] items-center justify-center gap-3 rounded-xl border border-[#3b8cff]/40 bg-[#0b5fd7] px-6 text-[12px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_40px_rgba(20,116,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5a9fff]/70 hover:bg-[#1474ff] hover:shadow-[0_16px_45px_rgba(20,116,255,0.28)]"
            >
              <span>Solicitar orçamento</span>

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#servicos"
              className="group inline-flex h-[53px] items-center justify-center gap-3 rounded-xl border border-white/[0.16] bg-white/[0.045] px-6 text-[12px] font-medium tracking-[-0.01em] text-white/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              <span>Nossos serviços</span>

              <ArrowDown
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* INFORMAÇÕES INFERIORES */}
        <div className="hero-fade absolute bottom-7 left-5 right-5 flex flex-col gap-4 pt-5 [animation-delay:600ms] sm:left-8 sm:right-8 lg:bottom-9 lg:left-16 lg:right-16 lg:flex-row lg:items-center lg:justify-between">
          {/* LOCALIZAÇÃO */}
          <div className="flex items-center gap-2.5 text-white/45">
            <MapPin
              size={14}
              strokeWidth={1.7}
              className="text-[#3b8cff]"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.13em] sm:text-[11px]">
              João Aranha • Paulínia — SP
            </span>
          </div>

          {/* SERVIÇOS */}
          <div className="flex items-center gap-5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30 sm:text-[10px]">
            <span>Ar-condicionado</span>

            <span className="h-1 w-1 rounded-full bg-[#1474ff]" />

            <span>Mecânica geral</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#1474ff] sm:block" />

            <span className="hidden sm:block">Diagnóstico</span>
          </div>
        </div>
      </div>

      {/* TEXTO LATERAL */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/20">
          VL AUTOCLIMA
        </span>
      </div>
    </section>
  );
}