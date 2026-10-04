import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { socialLinks } from "@/lib/portfolio";
import Reveal from "./reveal";

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Vamos nos conectar",
    href: socialLinks.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Veja o que estou construindo",
    href: socialLinks.github,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (49) 99836-1882",
    href: socialLinks.phone,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container-section">
        <Reveal className="contact-heading">
          <div>
            <p className="section-label">Uma boa conversa é um começo</p>
            <h2 id="contact-title">
              Vamos construir
              <br />
              algo juntos?
            </h2>
            <p>
              Para falar de um projeto, trocar uma ideia ou simplesmente dizer
              olá.
            </p>
          </div>
          <a
            href={`mailto:${socialLinks.email}`}
            className="contact-cta"
            aria-label="Enviar e-mail para Higor"
          >
            <ArrowUpRight size={46} strokeWidth={1.3} aria-hidden="true" />
          </a>
        </Reveal>
        <div className="contact-links">
          {contacts.map(({ icon: Icon, ...contact }) => (
            <a
              href={contact.href}
              key={contact.label}
              target={contact.href.startsWith("https") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("https")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <div>
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
              <p>{contact.label}</p>
              <span>{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
