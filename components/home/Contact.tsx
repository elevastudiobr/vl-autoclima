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
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#030507] py-16 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#02050a_0%,#061225_42%,#03070e_100%)]" />

        <div className="absolute -left-[25%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[#0759d9]/[0.15] blur-[150px] sm:-left-[18%] sm:h-[750px] sm:w-[750px] sm:blur-[190px]" />

        <div className="absolute left-[30%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#1474ff]/[0.08] blur-[120px] sm:left-[35%] sm:h-[550px] sm:w-[550px] sm:blur-[180px]" />

        <div className="absolute -right-[25%] bottom-[-5%] h-[500px] w-[500px] rounded-full bg-[#0759d9]/[0.14] blur-[150px] sm:-right-[18%] sm:h-[700px] sm:w-[700px] sm:blur-[190px]" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1474ff]/10 to-transparent sm:via-[#1474ff]/20" />

        <div
          className="absolute inset-0 opacity-[0.025] sm:opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,150,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(90,150,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#030507_100%)] opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mb-9 flex flex-col gap-5 sm:mb-14 sm:gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-px w-7 bg-[#1474ff] sm:w-9" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#4c96ff] sm:text-[10px] sm:tracking-[0.25em]">
                Contato
              </span>
            </div>

            <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.3rem]">
              Vamos cuidar do
              <br className="sm:hidden" /> seu carro
              <span className="block text-white/35">
                do jeito certo.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-6 text-white/40 sm:text-sm sm:leading-7 lg:pb-1">
            Precisa de ar-condicionado, manutenção ou algum reparo mecânico?
            Fale diretamente com a nossa equipe e veja como podemos ajudar.
          </p>
        </div>

        {/* =========================================================
            CONTACT + MAP
        ========================================================= */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          {/* =====================================================
              CONTACT CARD
          ===================================================== */}
          <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#07101d]/85 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:rounded-[30px] sm:shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-[220px] w-[220px] rounded-full bg-[#1474ff]/[0.09] blur-[90px]" />

            <div className="relative p-4 sm:p-8">
              {/* =================================================
                  WHATSAPP
              ================================================== */}
              <div className="relative overflow-hidden rounded-[18px] border border-[#1474ff]/25 bg-[#0a1b32]/80 p-4 sm:rounded-2xl sm:p-6">
                <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-[#1474ff]/10 blur-[40px]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1474ff] text-white shadow-[0_8px_25px_rgba(20,116,255,0.22)] sm:h-11 sm:w-11 sm:rounded-xl">
                      <Phone
                        size={16}
                        strokeWidth={2}
                        className="sm:h-[18px] sm:w-[18px]"
                      />
                    </div>

                    <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-[#4c96ff] sm:gap-2 sm:text-[10px] sm:tracking-[0.16em]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1474ff] shadow-[0_0_10px_rgba(20,116,255,0.8)]" />
                      Atendimento direto
                    </span>
                  </div>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/30 sm:mt-7 sm:text-[10px] sm:tracking-[0.16em]">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-white sm:text-xl">
                    (19) 99789-6239
                  </p>

                  <p className="mt-1.5 max-w-xs text-[11px] leading-5 text-white/40 sm:mt-2 sm:text-xs">
                    Converse com nossa equipe e solicite seu orçamento.
                  </p>

                  <a
                    href={WHATSAPP_QUOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1474ff] text-[12px] font-bold text-white transition-all duration-300 hover:bg-[#2580ff] sm:mt-5 sm:h-12 sm:rounded-xl sm:text-sm"
                  >
                    Solicitar orçamento
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* =================================================
                  INSTAGRAM + EMAIL
              ================================================== */}
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center gap-2.5 rounded-[16px] border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.045] sm:gap-4 sm:rounded-2xl sm:p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-white sm:h-10 sm:w-10 sm:rounded-xl">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[15px] w-[15px] sm:h-[17px] sm:w-[17px]"
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

                  <div className="min-w-0">
                    <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-white/25 sm:text-[10px] sm:tracking-[0.14em]">
                      Instagram
                    </span>

                    <span className="mt-0.5 block truncate text-[11px] font-semibold text-white sm:mt-1 sm:text-sm">
                      @vl_autoclima
                    </span>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white sm:h-[15px] sm:w-[15px]"
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex min-w-0 items-center gap-2.5 rounded-[16px] border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.045] sm:gap-4 sm:rounded-2xl sm:p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-white sm:h-10 sm:w-10 sm:rounded-xl">
                    <Mail
                      size={15}
                      strokeWidth={1.8}
                      className="sm:h-[17px] sm:w-[17px]"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-white/25 sm:text-[10px] sm:tracking-[0.14em]">
                      E-mail
                    </span>

                    <span className="mt-0.5 block truncate text-[10px] font-semibold text-white sm:mt-1 sm:text-sm">
                      {EMAIL}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white sm:h-[15px] sm:w-[15px]"
                  />
                </a>
              </div>

              {/* =================================================
                  ADDRESS + HOURS
              ================================================== */}
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
                {/* Address */}
                <div className="rounded-[16px] border border-white/[0.07] bg-black/20 p-3 sm:rounded-2xl sm:p-4">
                  <div className="flex gap-2.5 sm:gap-3">
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-[#1474ff] sm:h-[18px] sm:w-[18px]"
                      strokeWidth={1.8}
                    />

                    <div className="min-w-0">
                      <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/25 sm:text-[10px] sm:tracking-[0.14em]">
                        Onde estamos
                      </span>

                      <p className="mt-1.5 text-[10px] leading-4 text-white/55 sm:mt-2 sm:text-sm sm:leading-6">
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
                <div className="rounded-[16px] border border-white/[0.07] bg-black/20 p-3 sm:rounded-2xl sm:p-4">
                  <div className="flex gap-2.5 sm:gap-3">
                    <Clock3
                      size={15}
                      className="mt-0.5 shrink-0 text-[#1474ff] sm:h-[18px] sm:w-[18px]"
                      strokeWidth={1.8}
                    />

                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/25 sm:text-[10px] sm:tracking-[0.14em]">
                        Horário
                      </span>

                      <p className="mt-1.5 text-[10px] leading-4 text-white/55 sm:mt-2 sm:text-sm sm:leading-6">
                        {BUSINESS_HOURS.days}
                        <br />
                        {BUSINESS_HOURS.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  TRUST
              ================================================== */}
              <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.06] pt-4 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:pt-5">
                <div className="flex items-center gap-2 text-[9px] text-white/30 sm:text-[11px]">
                  <CheckCircle2
                    size={12}
                    className="text-[#1474ff] sm:h-[14px] sm:w-[14px]"
                  />
                  Atendimento transparente
                </div>

                <div className="flex items-center gap-2 text-[9px] text-white/30 sm:text-[11px]">
                  <CheckCircle2
                    size={12}
                    className="text-[#1474ff] sm:h-[14px] sm:w-[14px]"
                  />
                  Orçamento pelo WhatsApp
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MAP
          ===================================================== */}
          <div className="relative min-h-[330px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#07101d]/85 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:min-h-[460px] sm:rounded-[30px] sm:shadow-[0_30px_100px_rgba(0,0,0,0.25)] lg:min-h-[560px]">
            <iframe
              src={MAP_EMBED_URL}
              title="Localização da VL Autoclima no Google Maps"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.38] contrast-[1.08]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 bg-[#0759d9]/[0.05] mix-blend-screen" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030507]/65 to-transparent sm:h-32" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#020407] via-[#020407]/50 to-transparent sm:h-48" />

            {/* Location label */}
            <div className="absolute left-3 top-3 sm:left-6 sm:top-6">
              <div className="flex items-center gap-1.5 rounded-full border border-white/[0.11] bg-[#05080d]/90 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:gap-2 sm:px-3 sm:py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1474ff] shadow-[0_0_12px_rgba(20,116,255,0.9)]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-white/70 sm:text-[10px] sm:tracking-[0.16em]">
                  Nossa localização
                </span>
              </div>
            </div>

            {/* Map bottom card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="rounded-[16px] border border-white/[0.11] bg-[#05080d]/92 p-3 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:p-5">
                <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1474ff] text-white shadow-[0_8px_25px_rgba(20,116,255,0.2)] sm:h-10 sm:w-10 sm:rounded-xl">
                      <MapPin
                        size={15}
                        strokeWidth={2}
                        className="sm:h-[18px] sm:w-[18px]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-white sm:text-sm">
                        VL Autoclima
                      </p>

                      <p className="mt-0.5 text-[9px] leading-4 text-white/40 sm:mt-1 sm:text-xs sm:leading-5">
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
                    className="flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-white/[0.11] bg-white/[0.04] px-3 text-[10px] font-semibold text-white transition-all duration-300 hover:border-[#1474ff]/30 hover:bg-[#1474ff]/10 sm:h-10 sm:w-auto sm:px-4 sm:text-xs"
                  >
                    Abrir no Google Maps
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <div className="relative mt-4 overflow-hidden rounded-[22px] border border-[#1474ff]/20 bg-[#071426]/90 px-4 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:mt-6 sm:rounded-[30px] sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1474ff]/[0.08] blur-[100px]" />

          <div className="relative flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:gap-8 lg:text-left">
            <div>
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#4c96ff] sm:text-[10px] sm:tracking-[0.22em]">
                Seu carro merece cuidado de verdade
              </span>

              <h3 className="mt-2 text-[21px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:mt-3 sm:max-w-2xl sm:text-3xl lg:text-4xl">
                Precisa de manutenção ou quer resolver aquele problema?
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-white/35 sm:mt-3 sm:text-sm sm:leading-6">
                Fale com a VL Autoclima e solicite seu orçamento.
              </p>
            </div>

            <a
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1474ff] px-5 text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(20,116,255,0.2)] transition-all duration-300 hover:bg-[#2580ff] hover:shadow-[0_16px_50px_rgba(20,116,255,0.28)] sm:h-14 sm:w-auto sm:rounded-xl sm:px-7 sm:text-sm"
            >
              Solicitar orçamento
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-[17px] sm:w-[17px]"
              />
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================= */}
        <div className="mt-5 flex flex-col gap-2.5 border-t border-white/[0.06] pt-5 text-[10px] text-white/25 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-6 sm:text-xs">
          <p>Atendimento presencial em Paulínia — SP.</p>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-semibold text-white/40 transition-colors hover:text-white"
          >
            Como chegar
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}