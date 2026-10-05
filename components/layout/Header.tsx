"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NAVIGATION, WHATSAPP_NUMBER } from "@/lib/constants";

const whatsappMessage =
  "Olá! Gostaria de solicitar um orçamento para o meu veículo com a VL Autoclima.";

const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-[#030507]/88 shadow-[0_8px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-10">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="group relative z-10 flex shrink-0 items-center"
          aria-label="VL Autoclima - Início"
        >
          <Image
            src="/images/logo/logo-vl.png"
            alt="VL Autoclima"
            width={170}
            height={52}
            priority
            className="h-auto w-[130px] object-contain transition-opacity duration-300 group-hover:opacity-85 sm:w-[145px] lg:w-[155px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[12px] font-medium tracking-[0.01em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#1474ff] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-11 items-center gap-2.5 overflow-hidden rounded-xl border border-[#1474ff]/40 bg-[#0b5fd7] px-5 text-[12px] font-semibold text-white shadow-[0_8px_30px_rgba(20,116,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3b8cff]/70 hover:bg-[#1474ff] hover:shadow-[0_12px_35px_rgba(20,116,255,0.24)]"
          >
            <span className="relative z-10">
              Solicitar orçamento
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={19} strokeWidth={1.8} />
          ) : (
            <Menu size={19} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#030507]/96 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 pb-6 pt-3 sm:px-8">
          <div className="flex flex-col">
            {NAVIGATION.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 text-[13px] font-medium text-white/65 transition-colors hover:text-white"
              >
                <span>{item.label}</span>

                <span className="text-[9px] font-bold tracking-[0.15em] text-white/20">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <Link
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="group mt-5 flex h-12 items-center justify-center gap-2.5 rounded-xl border border-[#1474ff]/40 bg-[#0b5fd7] text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#1474ff]"
            >
              <span>Solicitar orçamento</span>

              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}