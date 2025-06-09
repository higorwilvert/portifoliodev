"use client"

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#111827]">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-10 reveal">Sobre Mim</h2>

          <div className="space-y-6 text-lg text-white/80">
            <p className="reveal">
              Sou desenvolvedor com experiência prática na criação de aplicações web, utilizando React e tecnologias modernas do ecossistema JavaScript.
            </p>

            <p className="reveal stagger-delay-1">
              Tenho como foco principal o desenvolvimento de soluções eficientes, com interfaces intuitivas, boa performance e atenção especial à experiência do usuário e à estrutura dos dados.
            </p>

            <p className="reveal stagger-delay-2">
              Estou em constante evolução como profissional, com grande interesse em desenvolvimento full stack com Node.js e na construção de produtos robustos e escaláveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
