export default function Footer() {
  return (
    <footer className="py-8 bg-[#111827] text-center text-white/60 text-sm">
      <div className="container-section">
        <p>
          Feito com <span className="text-white">💻</span> por Higor Wilvert – Todos os direitos reservados ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
