/**
 * Componente GuiaNotacoes (Guia de Notações Oficiais WCA do Cubo Mágico 3x3)
 * Exibe a explicação didática dos movimentos para facilitar o estudo dos algoritmos.
 */
export function GuiaNotacoes() {
  const movimentosBasicos = [
    { letra: "R", nome: "Right (Direita)", desc: "Giro da camada direita 90° no sentido horário (para cima)." },
    { letra: "R'", nome: "R Prime (Anti-horário)", desc: "Giro da camada direita 90° no sentido anti-horário (para baixo)." },
    { letra: "U", nome: "Up (Cima)", desc: "Giro da camada superior 90° no sentido horário (para a esquerda)." },
    { letra: "U'", nome: "U Prime", desc: "Giro da camada superior 90° no sentido anti-horário (para a direita)." },
    { letra: "F", nome: "Front (Frente)", desc: "Giro da face frontal 90° no sentido horário." },
    { letra: "F'", nome: "F Prime", desc: "Giro da face frontal 90° no sentido anti-horário." },
    { letra: "L", nome: "Left (Esquerda)", desc: "Giro da camada esquerda 90° no sentido horário (para baixo)." },
    { letra: "D", nome: "Down (Baixo)", desc: "Giro da camada da base 90° no sentido horário." },
    { letra: "M", nome: "Middle (Camada Média)", desc: "Giro da fatia central vertical acompanhando a camada L." }
  ];

  const modificadores = [
    { simbolo: "Letra com ' (Prime)", explicacao: "Indica movimento no sentido anti-horário (ex: R', U', F')." },
    { simbolo: "Número 2 (ex: U2, R2)", explicacao: "Giro duplo de 180° (duas voltas de 90° em qualquer direção)." },
    { simbolo: "Letra minúscula (r, f, u)", explicacao: "Movimento de camada dupla (ex: 'r' move a camada R e a camada central M juntas)." },
    { simbolo: "Parênteses ( )", explicacao: "Indicam 'gatilhos' ou fingertricks ergonômicos memorizados em bloco, como o Sexy Move (R U R' U')." },
    { simbolo: "Rotações (x, y, z)", explicacao: "Rotacionam o cubo inteiro sem girar nenhuma camada individual." }
  ];

  return (
    <section className="notacoes-container" aria-label="Guia de Notações">
      <div className="notacoes-header">
        <h2 className="notacoes-title">📖 Guia de Notações Internacionais (WCA)</h2>
        <p className="notacoes-sub">
          Aprenda a ler os movimentos das fórmulas de OLL e PLL com facilidade.
        </p>
      </div>

      <div className="notacoes-grid">
        <div className="notacoes-card">
          <h3 className="notacoes-card-title">Movimentos Principais</h3>
          <ul className="notacoes-list">
            {movimentosBasicos.map((mov) => (
              <li key={mov.letra} className="notacao-item">
                <span className="notacao-badge">{mov.letra}</span>
                <div className="notacao-info">
                  <strong>{mov.nome}</strong>
                  <span>{mov.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="notacoes-card">
          <h3 className="notacoes-card-title">Regras e Modificadores</h3>
          <ul className="notacoes-list">
            {modificadores.map((mod, index) => (
              <li key={index} className="notacao-item">
                <span className="notacao-badge mod-badge">{mod.simbolo}</span>
                <div className="notacao-info">
                  <span>{mod.explicacao}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
