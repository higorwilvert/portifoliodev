"use client"

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#111827]">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-10 reveal">Sobre Mim</h2>

          <div className="space-y-6 text-lg text-white/80">
            <p className="reveal">
              Sou um desenvolvedor com experiência prática em aplicações web e desktop, usando C++, React e tecnologias
              modernas.
            </p>

            <p className="reveal stagger-delay-1">
              Atuo principalmente na criação de soluções inteligentes e performáticas, com foco na experiência do
              usuário e otimização de bancos de dados.
            </p>

            <p className="reveal stagger-delay-2">
              Tenho interesse crescente em desenvolvimento full stack com Node.js, e busco evoluir constantemente como
              profissional de tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
