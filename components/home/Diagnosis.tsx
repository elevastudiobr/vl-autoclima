const steps = [
  {
    number: "01",
    title: "Entender",
    description:
      "Ouvimos o que você percebeu e entendemos o comportamento do veículo.",
  },
  {
    number: "02",
    title: "Identificar",
    description:
      "Buscamos a causa do problema antes de indicar qualquer serviço.",
  },
  {
    number: "03",
    title: "Explicar",
    description:
      "Você entende o que encontramos e o que realmente precisa ser feito.",
  },
  {
    number: "04",
    title: "Resolver",
    description:
      "Com tudo aprovado, executamos o serviço com cuidado e transparência.",
  },
];

const principles = [
  "Diagnóstico preciso",
  "Atendimento rápido",
  "Preço justo",
  "Garantia",
];

export default function Diagnosis() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-[#030811] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* BASE */}
        <div className="absolute inset-0 bg-[#030811]" />

        {/* AZUL PROFUNDO — TOPO ESQUERDO */}
        <div className="absolute -left-[18%] -top-[25%] h-[720px] w-[720px] rounded-full bg-[#064bb8]/[0.16] blur-[180px]" />

        {/* AZUL MÉDIO — ÁREA DO CONTEÚDO */}
        <div className="absolute left-[15%] top-[18%] h-[480px] w-[600px] rounded-full bg-[#0759d9]/[0.08] blur-[150px]" />

        {/* AZUL — ATRÁS DO VÍDEO */}
        <div className="absolute -right-[12%] top-[8%] h-[680px] w-[680px] rounded-full bg-[#1474ff]/[0.13] blur-[180px]" />

        {/* PONTO DE LUZ */}
        <div className="absolute right-[22%] top-[28%] h-[240px] w-[240px] rounded-full bg-[#3b8cff]/[0.07] blur-[100px]" />

        {/* AZUL INFERIOR */}
        <div className="absolute bottom-[-260px] left-[20%] h-[620px] w-[900px] rounded-full bg-[#064bb8]/[0.08] blur-[190px]" />

        {/* LUZ HORIZONTAL CENTRAL */}
        <div className="absolute left-1/2 top-[48%] h-[220px] w-[900px] -translate-x-1/2 rounded-full bg-[#1474ff]/[0.025] blur-[130px]" />

        {/* VINHETA RADIAL */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(20,116,255,0.055)_0%,transparent_38%,rgba(1,4,8,0.55)_100%)]" />

        {/* SOMBRAS LATERAIS */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,12,0.5)_0%,transparent_22%,transparent_78%,rgba(2,6,12,0.5)_100%)]" />

        {/* ILUMINAÇÃO SUPERIOR */}
        <div className="absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-[#0759d9]/[0.045] via-transparent to-transparent" />

        {/* TRANSIÇÃO INFERIOR */}
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#030507] via-[#030507]/45 to-transparent" />

        {/* GRID PREMIUM */}
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(120,170,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(120,170,255,0.55)_1px,transparent_1px)] [background-size:100px_100px]" />

        {/* LINHA DE LUZ SUPERIOR */}
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1474ff]/[0.22] to-transparent" />

        {/* LINHA DE LUZ INFERIOR */}
        <div className="absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0759d9]/[0.18] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        {/* =====================================================
            HEADER + VÍDEO
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16">
          {/* TEXTO */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#3b8cff]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#5a9fff]">
                Como trabalhamos
              </span>
            </div>

            <h2 className="max-w-[820px] text-[42px] font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-[54px] lg:text-[64px] xl:text-[72px]">
              Clareza em cada etapa.
              <br />
              <span className="text-white/30">
                Cuidado em cada detalhe.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[12px] leading-6 text-white/40 sm:text-[13px]">
              Do primeiro contato à entrega do veículo, você sabe o que está
              sendo feito, por que precisa ser feito e o que pode esperar do
              serviço.
            </p>
          </div>

          {/* =====================================================
              VÍDEO DA OFICINA
          ====================================================== */}
          <div className="relative">
            <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#07101d] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:h-[360px] lg:h-[390px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover object-center"
              >
                <source src="/videos/oficina.mp4" type="video/mp4" />
              </video>

              {/* OVERLAY PRINCIPAL */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030507]/45 via-transparent to-[#030507]/20" />

              {/* OVERLAY INFERIOR */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030507]/75 via-transparent to-transparent" />

              {/* TOM AZUL */}
              <div className="absolute inset-0 bg-[#0759d9]/[0.025] mix-blend-screen" />

              {/* BORDA INTERNA */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/[0.10]" />

              {/* IDENTIFICAÇÃO */}
              <div className="absolute bottom-6 left-6">
                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  VL Autoclima • Paulínia
                </span>
              </div>

              {/* DETALHE AZUL SUPERIOR */}
              <div className="absolute right-0 top-0 h-24 w-px bg-gradient-to-b from-[#3b8cff]/70 to-transparent" />

              <div className="absolute right-0 top-0 h-px w-24 bg-gradient-to-l from-[#3b8cff]/70 to-transparent" />
            </div>

            {/* GLOW PRINCIPAL */}
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[32px] bg-[#0759d9]/[0.10] blur-[65px]" />

            {/* GLOW LATERAL */}
            <div className="pointer-events-none absolute -right-10 top-1/2 -z-10 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#1474ff]/[0.12] blur-[100px]" />
          </div>
        </div>

        {/* =====================================================
            FRASE DE DESTAQUE
        ====================================================== */}
        <div className="mt-12 flex items-center justify-between border-y border-white/[0.08] py-5 sm:mt-14">
          <p className="text-[13px] font-medium tracking-[-0.01em] text-white/65 sm:text-[15px]">
            Um processo simples, transparente e sem surpresas.
          </p>

          <span className="hidden text-[8px] font-semibold uppercase tracking-[0.22em] text-white/20 sm:block">
            04 etapas
          </span>
        </div>

        {/* =====================================================
            ETAPAS
        ====================================================== */}
        <div className="mt-8">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative min-h-[155px] overflow-hidden bg-[#07101d]/75 p-4 transition-all duration-500 hover:bg-[#091625] sm:min-h-[235px] sm:p-7 lg:min-h-[245px] lg:p-8 ${
                  index % 2 !== 0
                    ? "border-l border-white/[0.08]"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-white/[0.08]"
                    : ""
                } lg:border-t-0 ${
                  index !== 0
                    ? "lg:border-l"
                    : ""
                }`}
              >
                {/* NÚMERO GRANDE DECORATIVO */}
                <span className="absolute -right-1 top-2 select-none text-[42px] font-bold leading-none tracking-[-0.09em] text-white/[0.025] transition-all duration-500 group-hover:text-[#3b8cff]/[0.07] sm:text-[92px]">
                  {step.number}
                </span>

                {/* PEQUENO GLOW DO CARD */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#1474ff]/0 blur-[55px] transition-all duration-500 group-hover:bg-[#1474ff]/[0.10]" />

                {/* CONTEÚDO */}
                <div className="absolute bottom-4 left-4 right-3 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-7 lg:left-8 lg:right-8">
                  <h3 className="text-[14px] font-semibold tracking-[-0.045em] text-white sm:text-[24px]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-[8px] leading-[1.35] text-white/35 transition-colors duration-500 group-hover:text-white/50 sm:mt-2 sm:max-w-[245px] sm:text-[10px] sm:leading-5">
                    {step.description}
                  </p>
                </div>

                {/* LINHA BASE */}
                <span className="absolute bottom-0 left-0 h-px w-full bg-white/[0.06]" />

                {/* LINHA AZUL NO HOVER */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1474ff] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            FECHAMENTO
        ====================================================== */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.08] pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[560px] text-[12px] leading-6 text-white/40">
            Você entende o que está acontecendo com o seu veículo antes de
            autorizar qualquer serviço.
          </p>

          <div className="grid grid-cols-2 gap-x-7 gap-y-3 sm:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span className="h-1 w-1 rounded-full bg-[#3b8cff]" />

                <span className="text-[9px] font-medium text-white/40">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}