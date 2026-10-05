import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { WHATSAPP_NUMBER } from "@/lib/constants";

type WhatsAppButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function WhatsAppButton({
  children = "Solicitar orçamento",
  className = "",
}: WhatsAppButtonProps) {
  const message =
    "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-xl border border-[#1474ff]/40 bg-[#0b5fd7] px-6 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1474ff] ${className}`}
    >
      <span>{children}</span>

      <ArrowUpRight
        size={15}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}