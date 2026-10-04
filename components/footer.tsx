import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-section">
        <p>© {new Date().getFullYear()} Higor Wilvert</p>
        <span>Feito com código e cuidado.</span>
        <a href="#home">
          Voltar ao início
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
