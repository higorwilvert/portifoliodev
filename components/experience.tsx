import { FaBriefcase } from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiQt,
  SiReact,
  SiVite,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full-Stack Junior",
      company: "Epicora",
      period: "07/2025 – Presente",
      technologies: [
        { name: "Nest.js", icon: <SiNestjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      achievements: [
        "Desenvolvimento de APIs RESTful utilizando Nest.js e Node.js.",
        "Criação de interfaces modernas e responsivas com React e Vite.",
        "Implementação de autenticação e autorização com JWT.",
        "Integração completa entre front-end e back-end.",
        "Criação de testes unitários e de integração para garantir a qualidade do código.",
      ],
    },
    {
      title: "Desenvolvedor de Software Junior",
      company: "Gamatec",
      period: "11/2024 – 07/2025",
      technologies: [
        { name: "Qt", icon: <SiQt /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "SQL Server", icon: <DiMsqlServer /> },
      ],
      achievements: [
        "Desenvolvimento de aplicações de força de vendas multiplataforma com C++ e Qt.",
        "Manutenção e criação de funcionalidades em sistemas web utilizando React e Node.js.",
        "Otimização de queries e performance em banco de dados SQL Server com grande volume de dados.",
        "Colaboração com equipe de QA e analistas para garantir qualidade nas entregas."
      ],
    },
    {
      title: "Assistente de Programação",
      company: "Gamatec",
      period: "08/2023 – 11/2024",
      technologies: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Qt", icon: <SiQt /> },
        { name: "SQL Server", icon: <DiMsqlServer /> },
      ],
      achievements: [
        "Desenvolvimento de aplicações desktop para automação comercial usando C++ e framework Qt.",
        "Criação de scripts otimizados em SQL para consultas e relatórios gerenciais.",
        "Apoio na documentação técnica e testes de novas funcionalidades."
      ],
    },
    {
      title: "Assistente Administrativo",
      company: "Vértice",
      period: "06/2022 – 02/2023",
      technologies: [],
      achievements: [
        "Responsável pelo controle de notas fiscais, contas a pagar/receber e relatórios financeiros.",
        "Otimização de rotinas administrativas com planilhas e sistemas de gestão.",
        "Organização documental e suporte direto ao setor contábil e financeiro."
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-32 text-white bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#050810]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="text-blue-400">Profissional</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Um resumo da minha trajetória e contribuições profissionais.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Linha da timeline */}
          <div className="absolute top-0 left-[16px] md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent md:-translate-x-px"></div>

          <div className="relative space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6 md:gap-8">
                {/* Ícone da timeline */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 border-4 border-[#0a0e1a] rounded-full md:-translate-x-1/2 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                  <FaBriefcase className="w-4 h-4 text-white" />
                </div>

                <div
                  className={`ml-14 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-[50%] md:pr-10" : "md:ml-[50%] md:pl-10"
                  }`}
                >
                  <div className="group bg-[#141E33]/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-5">{exp.period}</p>

                    {exp.technologies.length > 0 && (
                      <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-3 text-gray-300">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-colors"
                            >
                              <span className="text-base">{tech.icon}</span>
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-300">Principais Atividades</h4>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-400"
                          >
                            <span className="text-blue-400 mt-0.5 font-bold">▸</span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
