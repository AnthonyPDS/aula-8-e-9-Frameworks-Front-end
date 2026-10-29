/**
 * Componente Footer (Rodapé da Aplicação)
 * Recebe via Props:
 * - autor: nome do estudante/desenvolvedor
 * - curso: nome da disciplina e instituição
 * - ano: ano de desenvolvimento
 */
export function Footer({
  autor = "Anthony Santos",
  curso = "Frameworks Front-end • SENAI",
  ano = new Date().getFullYear()
}) {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-author">
          Desenvolvido por <strong>{autor}</strong> para a disciplina de <strong>{curso}</strong> ({ano}).
        </p>
        <p className="footer-sub">
          Projeto React demonstrando <em>JSX</em>, <em>Componentes</em>, <em>Props</em>, <em>Virtual DOM</em>, <em>Listas/Keys</em> e <em>Renderização Condicional</em>.
        </p>
        <div className="footer-links">
          <a
            href="https://www.worldcubeassociation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            World Cube Association (WCA)
          </a>
          <span className="footer-divider">•</span>
          <a
            href="https://github.com/AnthonyPDS/aula-8-e-9-Frameworks-Front-end"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Repositório GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
