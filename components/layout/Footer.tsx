import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  ADDRESS,
  BUSINESS_HOURS,
  EMAIL,
  INSTAGRAM_URL,
  NAVIGATION,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export default function Footer() {
  const whatsappMessage =
    "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="border-t border-white/[0.07] bg-[#020304]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-16 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <Image
              src="/images/logo/logo-vl.png"
              alt="VL Autoclima"
              width={170}
              height={52}
              className="h-auto w-[145px] object-contain"
            />

            <p className="mt-6 max-w-[360px] text-[11px] leading-6 text-white/30">
              Ar-condicionado automotivo e mecânica geral em Paulínia.
              Diagnóstico preciso, atendimento transparente e cuidado em cada
              detalhe.
            </p>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold text-white transition-colors hover:text-[#5a9fff]"
            >
              <span>Solicitar orçamento</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Navegação
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-[11px] text-white/45 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Contato
            </p>

            <div className="mt-5 space-y-4 text-[11px] leading-5 text-white/40">
              <p>
                {ADDRESS.street}
                <br />
                {ADDRESS.neighborhood}
                <br />
                {ADDRESS.city}
              </p>

              <p>
                {BUSINESS_HOURS.days}
                <br />
                {BUSINESS_HOURS.hours}
              </p>

              <Link
                href={`mailto:${EMAIL}`}
                className="block transition-colors hover:text-white"
              >
                {EMAIL}
              </Link>

              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-white"
              >
                @vl_autoclima
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-[9px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} VL Autoclima. Todos os direitos
            reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <span className="font-semibold text-white/35">
              Eleva Studio
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}