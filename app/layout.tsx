import type { Metadata } from "next/types";
import type React from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Higor Wilvert | Desenvolvedor de Software",
  description:
    "Desenvolvedor Full Stack na Hightech. Conheça minha trajetória e meus projetos, incluindo o Kiwi Play, plataforma para conectar jogadores de esportes de raquete.",
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
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
