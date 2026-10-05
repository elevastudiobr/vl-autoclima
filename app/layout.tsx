import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VL Autoclima | Ar-Condicionado Automotivo e Mecânica em Paulínia",
  description:
    "Ar-condicionado automotivo e mecânica geral em Paulínia. Diagnóstico, manutenção e reparos com atendimento transparente e preço justo.",
  keywords: [
    "ar-condicionado automotivo em Paulínia",
    "oficina mecânica em Paulínia",
    "mecânica automotiva em Paulínia",
    "manutenção de ar-condicionado automotivo",
    "oficina no João Aranha",
    "VL Autoclima Paulínia",
  ],
  openGraph: {
    title: "VL Autoclima | Seu carro em boas mãos",
    description:
      "Ar-condicionado automotivo e mecânica geral em Paulínia.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}