import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
} from "lucide-react";

import {
  ADDRESS,
  BUSINESS_HOURS,
  EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

const whatsappMessage =
  "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Pedro+Antonio+Bordignon,+635,+Paulínia,+SP";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-[#4d94ff] transition-colors duration-300 group-hover:text-[#5a9fff]"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#05070a] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-60 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#0759d9]/[0.07] blur-[170px]" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#1474ff]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b8cff]">
              Contato
            </span>
          </div>

          <h2 className="max-w-[700px] text-[40px] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[50px] lg:text-[62px]">
            Seu carro precisa de atenção?
            <br />
            <span className="text-white/35">Fale com a gente.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-2">
          {/* ATENDIMENTO */}
          <div className="bg-[#090d12] p-7 sm:p-10 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Atendimento
            </p>

            {/* WHATSAPP */}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex items-center justify-between border-b border-white/[0.08] pb-6"
            >
              <div>
                <span className="block text-[24px] font-semibold tracking-[-0.03em] text-white">
                  (19) 99789-6239
                </span>

                <span className="mt-1 block text-[11px] text-white/35">
                  WhatsApp
                </span>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.7}
                className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5a9fff]"
              />
            </Link>

            {/* E-MAIL */}
            <Link
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between border-b border-white/[0.08] py-6"
            >
              <div className="flex items-center gap-4">
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="text-[#4d94ff]"
                />

                <span className="text-[12px] text-white/60 transition-colors group-hover:text-white">
                  {EMAIL}
                </span>
              </div>

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="text-white/25 transition-colors group-hover:text-[#5a9fff]"
              />
            </Link>

            {/* INSTAGRAM */}
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6"
            >
              <div className="flex items-center gap-4">
                <InstagramIcon />

                <span className="text-[12px] text-white/60 transition-colors group-hover:text-white">
                  @vl_autoclima
                </span>
              </div>

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="text-white/25 transition-colors group-hover:text-[#5a9fff]"
              />
            </Link>
          </div>

          {/* LOCALIZAÇÃO */}
          <div className="relative bg-[#080c12] p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1474ff]/[0.08] blur-[90px]" />

            <div className="relative">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1474ff]/20 bg-[#1474ff]/[0.07]">
                <MapPin
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#4d94ff]"
                />
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
                Onde estamos
              </p>

              <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.03em] text-white">
                Paulínia — SP
              </h3>

              <p className="mt-3 max-w-[350px] text-[12px] leading-6 text-white/40">
                {ADDRESS.street}
                <br />
                {ADDRESS.neighborhood}
                <br />
                {ADDRESS.city} • {ADDRESS.zipCode}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-6">
                <Clock3
                  size={16}
                  strokeWidth={1.7}
                  className="text-[#4d94ff]"
                />

                <div>
                  <p className="text-[11px] font-semibold text-white">
                    {BUSINESS_HOURS.days}
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/35">
                    {BUSINESS_HOURS.hours}
                  </p>
                </div>
              </div>

              <Link
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold text-white transition-colors hover:text-[#5a9fff]"
              >
                <span>Ver localização</span>

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