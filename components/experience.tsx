import { FaBriefcase, FaInfoCircle, FaDatabase } from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiCplusplus, SiQt,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor de Software Junior",
      company: "Gamatec",
      period: "11/2024 – Presente",
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
    <section id="experience" className="py-20 md:py-32 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Um resumo da minha trajetória e contribuições profissionais.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-[16px] md:left-1/2 w-px h-full bg-gray-700 md:-translate-x-px"></div>

          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6 md:gap-8">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#0a0a0a] border-2 border-gray-700 rounded-full md:-translate-x-1/2 flex items-center justify-center">
                  <FaBriefcase className="w-4 h-4 text-white" />
                </div>

                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-[50%] md:pr-8" : "md:ml-[50%] md:pl-8"
                  }`}
                >
                  <div className="bg-[#1a2540] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-blue-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.period}</p>

                    {exp.technologies.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-2 py-1 text-xs border rounded border-gray-600"
                            >
                              {tech.icon}
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-medium mb-2">Principais Atividades</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-300"
                          >
                            <span className="mt-1">•</span>
                            <span>{item}</span>
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
