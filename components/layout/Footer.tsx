import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5519997896239?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20carro.";

const INSTAGRAM_URL = "https://www.instagram.com/vl_autoclima/";

const ELEVA_URL = "https://eleva-studio.vercel.app/";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#020407]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0759d9]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-7 py-9 sm:py-10 md:flex-row">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/logo/logo-vl.png"
              alt="VL Autoclima"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Social */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da VL Autoclima"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
            >
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
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da VL Autoclima"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-[#1474ff]/40 hover:bg-[#1474ff]/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"
                />
                <path
                  d="M8.5 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-1.3-.3-2.6-1-3.6-2s-1.7-2.3-2-3.6c-.2-.5-.1-1.1.1-1.5Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] leading-5 text-white/30">
            © 2026 VL Autoclima. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2.5">
            <span className="text-[10px] text-white/25">
              Desenvolvido por
            </span>

            <a
              href={ELEVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eleva Studio"
              className="group flex items-center"
            >
              <img
                src="/images/logo-eleva.webp"
                alt="Eleva Studio"
                className="h-6 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}