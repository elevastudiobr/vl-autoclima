import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5519997896239?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20carro.";

const INSTAGRAM_URL = "https://www.instagram.com/vl_autoclima/";

const ELEVA_URL = "https://eleva-studio.vercel.app/";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#020407]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        {/* Copyright */}
        <p className="whitespace-nowrap text-[9px] text-white/30 sm:text-[10px]">
          © 2026 VL Autoclima. Todos os direitos reservados.
        </p>

        {/* Links */}
        <div className="flex shrink-0 items-center gap-4">
          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da VL Autoclima"
            className="text-white/35 transition-colors duration-300 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
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
            className="text-white/35 transition-colors duration-300 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
              <path d="M8.5 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-1.3-.3-2.6-1-3.6-2s-1.7-2.3-2-3.6c-.2-.5-.1-1.1.1-1.5Z" />
            </svg>
          </a>

          <span className="h-3 w-px bg-white/[0.08]" />

          {/* Eleva */}
          <Link
            href={ELEVA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[9px] text-white/30 transition-colors duration-300 hover:text-white sm:text-[10px]"
          >
            Desenvolvido por{" "}
            <span className="font-medium text-white/55">EA</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}