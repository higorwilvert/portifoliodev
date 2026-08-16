import type { Metadata } from "next/types"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Higor Wilvert | Desenvolvedor",
  description: "Desenvolvedor focado em soluções eficientes e interfaces modernas",
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" >
      <body>{children}</body>
    </html>
  )
}
