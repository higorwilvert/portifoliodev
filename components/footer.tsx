import { Code2 } from "lucide-react"
import Link from "next/link"

const links = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-navy py-10 text-ivory">
      <div className="container-section">
        <div className="flex flex-col gap-8 border-b border-ivory/15 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">Higor Wilvert</p>
            <p className="mt-1 text-sm text-ivory/50">Desenvolvedor Full Stack • Back-End</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ivory/60" aria-label="Navegação do rodapé">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Higor Wilvert. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-gold" />
            Construído com Next.js e atenção aos detalhes.
          </p>
        </div>
      </div>
    </footer>
  )
}
