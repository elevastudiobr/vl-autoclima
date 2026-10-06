"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  ADDRESS,
  BUSINESS_HOURS,
  EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "@/lib/constants";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para o meu carro."
);

const WHATSAPP_QUOTE_URL = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Pedro+Antonio+Bordignon,+635,+Paulínia,+SP";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Pedro+Antonio+Bordignon,+635,+João+Aranha,+Paulínia,+SP&output=embed";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#030507] py-24 sm:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#02050a_0%,#061225_42%,#03070e_100%)]" />

        {/* Glow esquerdo */}
        <div className="absolute -left-[18%] top-[0%] h-[750px] w-[750px] rounded-full bg-[#0759d9]/[0.18] blur-[190px]" />

        {/* Glow central */}
        <div className="absolute left-[35%] top-[18%] h-[550px] w-[550px] rounded-full bg-[#1474ff]/[0.11] blur-[180px]" />

        {/* Glow direito */}
        <div className="absolute -right-[18%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-[#0759d9]/[0.17] blur-[190px]" />

        {/* Linha vertical */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1474ff]/20 to-transparent" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,150,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(90,150,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vinheta */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#030507_100%)] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1474ff]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#4c96ff]">
                Contato
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.3rem]">
              Vamos cuidar do seu carro
              <span className="block text-white/35">
                do jeito certo.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-1">
            Precisa de ar-condicionado, manutenção ou algum reparo mecânico?
            Fale diretamente com a nossa equipe e veja como podemos ajudar.
          </p>
        </div>

        {/* =========================================================
            CONTACT + MAP
        ========================================================= */}
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          {/* =====================================================
              CONTACT CARD
          ===================================================== */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#07101d]/85 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            {/* Internal glow */}
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[260px] w-[260px] rounded-full bg-[#1474ff]/[0.10] blur-[100px]" />

            <div className="relative p-6 sm:p-8">
              {/* Main WhatsApp CTA */}
              <div className="relative overflow-hidden rounded-2xl border border-[#1474ff]/25 bg-[#0a1b32]/80 p-5 sm:p-6">
                <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-36 w-36 rounded-full bg-[#1474ff]/10 blur-[45px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1474ff] text-white shadow-[0_10px_35px_rgba(20,116,255,0.22)]">
                      <Phone size={18} strokeWidth={2} />
                    </div>

                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4c96ff]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1474ff] shadow-[0_0_10px_rgba(20,116,255,0.8)]" />
                      Atendimento direto
                    </span>
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-white">
                    (19) 99789-6239
                  </p>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-white/40">
                    Converse com nossa equipe e solicite seu orçamento.
                  </p>

                  <a
                    href={WHATSAPP_QUOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#1474ff] text-sm font-bold text-white transition-all duration-300 hover:bg-[#2580ff] hover:shadow-[0_14px_40px_rgba(20,116,255,0.22)]"
                  >
                    Solicitar orçamento
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Links */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.045]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[17px] w-[17px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                      />
                      <circle cx="12" cy="12" r="4.2" />
                      <circle
                        cx="17.4"
                        cy="6.7"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                      Instagram
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-white">
                      @vl_autoclima
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.045]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white">
                    <Mail size={17} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                      E-mail
                    </span>

                    <span className="mt-1 block truncate text-sm font-semibold text-white">
                      {EMAIL}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
              </div>

              {/* Address + Hours */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {/* Address */}
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-[#1474ff]"
                      strokeWidth={1.8}
                    />

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                        Onde estamos
                      </span>

                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {ADDRESS.street}
                        <br />
                        {ADDRESS.neighborhood}
                        <br />
                        {ADDRESS.city} — {ADDRESS.zipCode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex gap-3">
                    <Clock3
                      size={18}
                      className="mt-0.5 shrink-0 text-[#1474ff]"
                      strokeWidth={1.8}
                    />

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                        Horário
                      </span>

                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {BUSINESS_HOURS.days}
                        <br />
                        {BUSINESS_HOURS.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust details */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.06] pt-5">
                <div className="flex items-center gap-2 text-[11px] text-white/35">
                  <CheckCircle2
                    size={14}
                    className="text-[#1474ff]"
                  />
                  Atendimento transparente
                </div>

                <div className="flex items-center gap-2 text-[11px] text-white/35">
                  <CheckCircle2
                    size={14}
                    className="text-[#1474ff]"
                  />
                  Orçamento pelo WhatsApp
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MAP
          ===================================================== */}
          <div className="relative min-h-[560px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#07101d]/85 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <iframe
              src={MAP_EMBED_URL}
              title="Localização da VL Autoclima no Google Maps"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.38] contrast-[1.08]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Map tint */}
            <div className="pointer-events-none absolute inset-0 bg-[#0759d9]/[0.05] mix-blend-screen" />

            {/* Top gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030507]/65 to-transparent" />

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020407] via-[#020407]/50 to-transparent" />

            {/* Location label */}
            <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.11] bg-[#05080d]/90 px-3 py-2 shadow-xl backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1474ff] shadow-[0_0_12px_rgba(20,116,255,0.9)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Nossa localização
                </span>
              </div>
            </div>

            {/* Map bottom card */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="rounded-2xl border border-white/[0.11] bg-[#05080d]/92 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1474ff] text-white shadow-[0_8px_25px_rgba(20,116,255,0.2)]">
                      <MapPin size={18} strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        VL Autoclima
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/40">
                        Av. Pedro Antonio Bordignon, 635
                        <br />
                        João Aranha — Paulínia/SP
                      </p>
                    </div>
                  </div>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-white/[0.11] bg-white/[0.04] px-4 text-xs font-semibold text-white transition-all duration-300 hover:border-[#1474ff]/30 hover:bg-[#1474ff]/10"
                  >
                    Abrir no Google Maps
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <div className="relative mt-6 overflow-hidden rounded-[30px] border border-[#1474ff]/20 bg-[#071426]/90 px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14">
          {/* CTA glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1474ff]/[0.09] blur-[120px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#4c96ff]">
                Seu carro merece cuidado de verdade
              </span>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                Precisa de manutenção ou quer resolver aquele problema?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                Fale com a VL Autoclima e solicite seu orçamento.
              </p>
            </div>

            <a
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#1474ff] px-7 text-sm font-bold text-white shadow-[0_12px_40px_rgba(20,116,255,0.2)] transition-all duration-300 hover:bg-[#2580ff] hover:shadow-[0_16px_50px_rgba(20,116,255,0.28)]"
            >
              Solicitar orçamento
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Atendimento presencial em Paulínia — SP.
          </p>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-semibold text-white/40 transition-colors hover:text-white"
          >
            Como chegar
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}