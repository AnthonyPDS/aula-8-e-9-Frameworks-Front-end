import { useState } from "react";
import { DiagramaCubo } from "./DiagramaCubo";

/**
 * Componente CardAlgoritmo (Card individual reutilizável)
 * Recebe todas as informações do caso via Props com desestruturação explícita:
 * - id: identificador único
 * - nome: nome comum do algoritmo
 * - codigoWCA: código oficial WCA (ex: OLL 27, PLL T)
 * - tipo: "OLL" | "PLL"
 * - subcategoria: categoria do caso
 * - dificuldade: "Iniciante" | "Intermediário" | "Avançado"
 * - formula: fórmula principal com notação internacional
 * - formulaAlternativa: fórmula secundária opcional
 * - descricaoVisual: texto explicativo do padrão de peças
 * - dica: dica de execução / fingertrick
 * - modo2Look: booleano indicando se pertence ao método iniciante
 * - stickers: mapeamento visual para o diagrama do cubo
 * - isAprendido: booleano se o usuário já memorizou
 * - onToggleAprendido: função disparada ao alternar o status de aprendizado
 */
export function CardAlgoritmo({
  id,
  nome,
  codigoWCA,
  tipo,
  subcategoria,
  dificuldade,
  formula,
  formulaAlternativa,
  descricaoVisual,
  dica,
  modo2Look,
  stickers,
  isAprendido = false,
  onToggleAprendido
}) {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = () => {
    navigator.clipboard.writeText(formula);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  // Cores dinâmicas para a tag de dificuldade
  const badgeDificuldadeClass = {
    Iniciante: "badge-iniciante",
    Intermediário: "badge-intermediario",
    Avançado: "badge-avancado"
  }[dificuldade] || "badge-iniciante";

  return (
    <article className={`card-algoritmo ${isAprendido ? "card-aprendido" : ""}`} id={`card-${id}`}>
      <div className="card-top-bar">
        <div className="card-badges-group">
          <span className="badge-wca">{codigoWCA}</span>
          <span className={`badge-dificuldade ${badgeDificuldadeClass}`}>{dificuldade}</span>
          {modo2Look && <span className="badge-2look">2-Look</span>}
        </div>

        <button
          type="button"
          className={`btn-aprendido-toggle ${isAprendido ? "ativo" : ""}`}
          onClick={() => onToggleAprendido(id)}
          title={isAprendido ? "Marcar como não aprendido" : "Marcar como aprendido"}
          aria-pressed={isAprendido}
        >
          {isAprendido ? "✓ Memorizado" : "+ Memorizar"}
        </button>
      </div>

      <div className="card-main-content">
        <div className="card-visual-wrapper">
          <DiagramaCubo tipo={tipo} stickers={stickers} codigoWCA={codigoWCA} />
        </div>

        <div className="card-info-wrapper">
          <h2 className="card-title">{nome}</h2>
          <span className="card-subcategoria">{subcategoria}</span>
          <p className="card-descricao">{descricaoVisual}</p>
        </div>
      </div>

      <div className="card-formula-box">
        <div className="formula-header">
          <span className="formula-label">Fórmula:</span>
          <button
            type="button"
            className="btn-copiar"
            onClick={handleCopiar}
            aria-label="Copiar fórmula para área de transferência"
          >
            {copiado ? "✓ Copiado!" : "📋 Copiar"}
          </button>
        </div>
        <div className="formula-code">
          <code>{formula}</code>
        </div>
        {formulaAlternativa && (
          <div className="formula-alternativa">
            <span className="formula-alt-label">Alternativa: </span>
            <code>{formulaAlternativa}</code>
          </div>
        )}
      </div>

      {dica && (
        <div className="card-footer-dica">
          <span className="dica-icone">💡</span>
          <span className="dica-texto">{dica}</span>
        </div>
      )}
    </article>
  );
}
