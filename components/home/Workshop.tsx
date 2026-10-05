"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/images/workshop/img-1.webp",
    alt: "Estrutura da oficina VL Autoclima",
  },
  {
    src: "/images/workshop/img-2.webp",
    alt: "Ambiente interno da VL Autoclima",
  },
  {
    src: "/images/workshop/img-3.webp",
    alt: "Serviço automotivo na oficina",
  },
  {
    src: "/images/workshop/img-4.webp",
    alt: "Detalhes da oficina VL Autoclima",
  },
  {
    src: "/images/workshop/img-5.webp",
    alt: "Serviço realizado na VL Autoclima",
  },
  {
    src: "/images/workshop/img-6.webp",
    alt: "Atendimento automotivo na VL Autoclima",
  },
  {
    src: "/images/workshop/img-7.webp",
    alt: "Detalhes técnicos da oficina",
  },
  {
    src: "/images/workshop/img-8.webp",
    alt: "Serviço automotivo na VL Autoclima",
  },
  {
    src: "/images/workshop/img-9.webp",
    alt: "Vista da oficina VL Autoclima",
  },
  {
    src: "/images/workshop/img-10.webp",
    alt: "Detalhe da estrutura da VL Autoclima",
  },
  {
    src: "/images/workshop/img-11.webp",
    alt: "Ambiente da oficina VL Autoclima",
  },
];

const duplicatedPhotos = [...photos, ...photos];

export default function Workshop() {
  const trackRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);

  const positionRef = useRef(0);

  const draggingRef = useRef(false);
  const pointerStartRef = useRef(0);
  const positionStartRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  const SPEED = 0.8;

  const getLoopWidth = () => {
    if (!trackRef.current) return 0;

    return trackRef.current.scrollWidth / 2;
  };

  const normalizePosition = () => {
    const loopWidth = getLoopWidth();

    if (!loopWidth) return;

    while (positionRef.current <= -loopWidth) {
      positionRef.current += loopWidth;
    }

    while (positionRef.current > 0) {
      positionRef.current -= loopWidth;
    }
  };

  const updatePosition = () => {
    if (!trackRef.current) return;

    trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    const animate = () => {
      if (!draggingRef.current) {
        positionRef.current -= SPEED;

        normalizePosition();
        updatePosition();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    draggingRef.current = true;
    setIsDragging(true);

    pointerStartRef.current = event.clientX;
    positionStartRef.current = positionRef.current;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!draggingRef.current) return;

    const distance = event.clientX - pointerStartRef.current;

    positionRef.current = positionStartRef.current + distance;

    normalizePosition();
    updatePosition();
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    draggingRef.current = false;
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {}
  };

  const handlePointerCancel = () => {
    draggingRef.current = false;
    setIsDragging(false);
  };

  const moveManual = (direction: "left" | "right") => {
    const amount = 360;

    if (direction === "left") {
      positionRef.current += amount;
    } else {
      positionRef.current -= amount;
    }

    normalizePosition();
    updatePosition();
  };

  return (
    <section
      id="oficina"
      className="relative overflow-hidden bg-[#02050a] py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-[#02050a]" />

        {/* Azul principal — canto esquerdo */}
        <div className="absolute -left-[18%] top-[5%] h-[620px] w-[620px] rounded-full bg-[#0759d9]/[0.13] blur-[180px]" />

        {/* Azul secundário — canto direito */}
        <div className="absolute -right-[15%] top-[15%] h-[680px] w-[680px] rounded-full bg-[#1474ff]/[0.11] blur-[190px]" />

        {/* Glow central atrás das imagens */}
        <div className="absolute left-1/2 top-[42%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#0759d9]/[0.075] blur-[150px]" />

        {/* Ponto de luz azul superior */}
        <div className="absolute left-[32%] top-[-180px] h-[360px] w-[520px] rounded-full bg-[#1474ff]/[0.07] blur-[120px]" />

        {/* Azul mais concentrado no rodapé */}
        <div className="absolute bottom-[-220px] left-[8%] h-[500px] w-[700px] rounded-full bg-[#064bb8]/[0.08] blur-[170px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(2,5,10,0.18)_45%,rgba(2,5,10,0.82)_100%)]" />

        {/* Escurecimento lateral */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,10,0.72)_0%,rgba(2,5,10,0.05)_22%,rgba(2,5,10,0.05)_78%,rgba(2,5,10,0.72)_100%)]" />

        {/* Linha de luz superior */}
        <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1474ff]/[0.35] to-transparent" />

        {/* Linha de luz inferior */}
        <div className="absolute bottom-0 left-1/2 h-px w-[58%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0759d9]/[0.22] to-transparent" />

        {/* Grid técnico extremamente sutil */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,160,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.7) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        {/* Pequena textura vertical */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015)_0%,transparent_20%,transparent_80%,rgba(20,116,255,0.018)_100%)]" />
      </div>

      {/* =========================================================
          CONTEÚDO
      ========================================================= */}

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-8">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#3b8cff]" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#5a9fff]">
                A oficina
              </span>
            </div>

            <h2 className="text-[34px] font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-[42px] lg:text-[50px]">
              A oficina por trás
              <br />
              <span className="text-white/30">do serviço.</span>
            </h2>
          </div>

          <div className="max-w-[350px]">
            <p className="text-[9px] leading-4.5 text-white/35 sm:text-[10px]">
              Um ambiente preparado para cuidar do seu veículo com atenção,
              conhecimento técnico e responsabilidade em cada etapa.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <MapPin
                size={10}
                strokeWidth={1.5}
                className="text-[#3b8cff]"
              />

              <span className="text-[7px] uppercase tracking-[0.13em] text-white/35">
                Paulínia — SP
              </span>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="relative">

          {/* Glow atrás do carrossel */}
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[30px] bg-[#0759d9]/[0.055] blur-[55px]" />

          {/* Linha de luz superior do carrossel */}
          <div className="pointer-events-none absolute -top-px left-[8%] right-[8%] z-30 h-px bg-gradient-to-r from-transparent via-[#1474ff]/[0.35] to-transparent" />

          {/* Máscara esquerda */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#02050a] via-[#02050a]/85 to-transparent sm:w-24" />

          {/* Máscara direita */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#02050a] via-[#02050a]/85 to-transparent sm:w-24" />

          <div
            className={`overflow-hidden rounded-[18px] ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              touchAction: "pan-y",
              userSelect: "none",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={(event) => {
              if (draggingRef.current) {
                handlePointerUp(event);
              }
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max gap-3"
              style={{
                willChange: "transform",
              }}
            >
              {duplicatedPhotos.map((photo, index) => (
                <div
                  key={`${photo.src}-${index}`}
                  className="relative h-[280px] w-[240px] shrink-0 overflow-hidden rounded-[14px] border border-white/[0.075] bg-[#080d14] shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:h-[320px] sm:w-[290px] lg:h-[350px] lg:w-[320px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={index < 5}
                    sizes="320px"
                    draggable={false}
                    className="pointer-events-none object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />

                  {/* Overlay cinematográfico */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/[0.08]" />

                  {/* Leve tonalidade azul */}
                  <div className="pointer-events-none absolute inset-0 bg-[#0759d9]/[0.025] mix-blend-screen" />

                  {/* Borda interna */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.055]" />
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLES */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => moveManual("left")}
                aria-label="Imagens anteriores"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/45 backdrop-blur-md transition-all duration-300 hover:border-[#1474ff]/50 hover:bg-[#1474ff]/10 hover:text-white"
              >
                <ArrowLeft
                  size={14}
                  strokeWidth={1.6}
                />
              </button>

              <button
                type="button"
                onClick={() => moveManual("right")}
                aria-label="Próximas imagens"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/45 backdrop-blur-md transition-all duration-300 hover:border-[#1474ff]/50 hover:bg-[#1474ff]/10 hover:text-white"
              >
                <ArrowRight
                  size={14}
                  strokeWidth={1.6}
                />
              </button>

              <span className="ml-2 text-[7px] uppercase tracking-[0.2em] text-white/20">
                Arraste para navegar
              </span>
            </div>

            <span className="text-[8px] font-medium tracking-[0.18em] text-white/25">
              11 imagens
            </span>
          </div>
        </div>

        {/* FECHAMENTO */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#4f96ff]">
              Nosso jeito de trabalhar
            </p>

            <h3 className="mt-1.5 text-[20px] font-semibold tracking-[-0.045em] text-white sm:text-[24px]">
              Honestidade é o nosso sobrenome.
            </h3>
          </div>

          <a
            href="#contato"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 backdrop-blur-md transition-all duration-300 hover:border-[#1474ff]/40 hover:bg-[#0759d9]/10"
          >
            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-white/60 group-hover:text-white">
              Conheça a VL Autoclima
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1474ff] shadow-[0_0_20px_rgba(20,116,255,0.25)]">
              <ArrowUpRight
                size={11}
                className="text-white"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}