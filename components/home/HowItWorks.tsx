"use client";

import { ArrowUpRight, Check, Search, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Avaliamos",
    description:
      "Começamos entendendo o que está acontecendo com o seu veículo, sem pressa e sem suposições.",
    icon: Search,
  },
  {
    number: "02",
    title: "Diagnosticamos",
    description:
      "Buscamos a causa do problema antes de indicar qualquer serviço ou troca de componente.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Explicamos",
    description:
      "Você sabe o que encontramos, o que precisa ser feito e por quê. Sem complicação.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Resolvemos",
    description:
      "Depois da aprovação, executamos o serviço com cuidado e foco em entregar o carro como deve.",
    icon: Check,
  },
];

const principles = [
  "Diagnóstico preciso",
  "Atendimento rápido",
  "Preço justo",
  "Garantia",
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-[#030507] py-28 sm:py-32 lg:py-40"
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute -left-72 top-1/3 h-[650px] w-[650px] rounded-full bg-[#0759d9]/[0.055] blur-[170px]" />

      <div className="pointer-events-none absolute -right-72 bottom-0 h-[600px] w-[600px] rounded-full bg-[#1474ff]/[0.045] blur-[180px]" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1474ff]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#3b8cff]">
                Nosso princípio
              </span>
            </div>

            <h2 className="max-w-[900px] text-[43px] font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-[57px] lg:text-[72px] xl:text-[82px]">
              Antes de trocar,
              <br />
              <span className="text-white/30">a gente entende.</span>
            </h2>
          </div>

          <div className="max-w-[390px] lg:justify-self-end lg:pb-2">
            <p className="text-[13px] leading-7 text-white/45">
              É assim que a VL Autoclima trabalha. Primeiro entendemos o
              problema. Depois explicamos o que precisa ser feito. Só então
              colocamos a mão na massa.
            </p>
          </div>
        </div>

        {/* FRASE PRINCIPAL */}
        <div className="mt-16 border-y border-white/[0.08] py-8 sm:mt-20 sm:py-10 lg:mt-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[720px] text-[20px] font-medium leading-8 tracking-[-0.025em] text-white/80 sm:text-[24px] sm:leading-9">
              Honestidade é o nosso sobrenome.
              <span className="text-white/30">
                {" "}
                E isso começa muito antes do serviço.
              </span>
            </p>

            <div className="flex shrink-0 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1474ff]" />
              <span>VL Autoclima</span>
            </div>
          </div>
        </div>

        {/* PROCESSO */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Como funciona
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/20">
              04 etapas
            </span>
          </div>

          <div className="relative">
            {/* LINHA CENTRAL */}
            <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-white/[0.08] lg:block" />

            <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative min-h-[280px] bg-[#070a0f] p-7 transition-colors duration-500 hover:bg-[#0a1018] sm:p-8 lg:min-h-[330px] lg:p-9"
                  >
                    {/* NÚMERO */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-semibold tabular-nums tracking-[0.15em] text-[#3b8cff]">
                        {step.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-500 group-hover:border-[#1474ff]/40 group-hover:bg-[#1474ff]/[0.08]">
                        <Icon
                          size={15}
                          strokeWidth={1.6}
                          className="text-white/35 transition-colors duration-500 group-hover:text-[#5a9fff]"
                        />
                      </div>
                    </div>

                    {/* CONTEÚDO */}
                    <div className="absolute bottom-8 left-7 right-7 sm:bottom-9 sm:left-8 sm:right-8 lg:left-9 lg:right-9">
                      <h3 className="text-[25px] font-semibold tracking-[-0.035em] text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[260px] text-[11px] leading-6 text-white/35 transition-colors duration-500 group-hover:text-white/50">
                        {step.description}
                      </p>
                    </div>

                    {/* DETALHE */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#1474ff] transition-all duration-500 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PRINCÍPIOS */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
              O que você pode esperar
            </span>

            <p className="mt-4 max-w-[330px] text-[12px] leading-6 text-white/40">
              Um atendimento direto, transparente e focado no que realmente
              importa: resolver o problema do seu veículo.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-white/[0.08] sm:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className={`group relative px-5 py-3 sm:px-6 ${
                  index !== 0 ? "border-l border-white/[0.08]" : ""
                }`}
              >
                <span className="mb-4 block text-[8px] font-semibold tabular-nums tracking-[0.18em] text-white/20">
                  0{index + 1}
                </span>

                <span className="block text-[11px] font-medium leading-5 text-white/55 transition-colors duration-300 group-hover:text-white">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-start border-t border-white/[0.08] pt-7 sm:mt-20 sm:pt-8">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2.5 text-[11px] font-semibold text-white transition-colors duration-300 hover:text-[#5a9fff]"
          >
            <span>Fale com a VL Autoclima</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}