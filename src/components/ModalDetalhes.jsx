import { useEffect } from "react";
import { DiagramaCubo } from "./DiagramaCubo";

/**
 * Componente ModalDetalhes (Renderização Condicional Avançada)
 * Atende aos conceitos dos slides 75 a 82 da aula SENAI:
 * - Só é montado/renderizado se houver um caso selecionado (curto-circuito no pai: caso && <ModalDetalhes />).
 * - Utiliza operadores ternários para renderizar estados condicionais (memorizado vs pendente, fórmulas alternativas, dicas).
 * 
 * Recebe via Props:
 * - caso: objeto do algoritmo selecionado (ou null)
 * - isAprendido: booleano indicando se o caso já foi memorizado
 * - onToggleAprendido: callback para alternar o status
 * - onClose: callback para fechar o modal
 */
export function ModalDetalhes({ caso, isAprendido, onToggleAprendido, onClose }) {
  // Fecha o modal ao pressionar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!caso) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Cabeçalho do Modal */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="badge-wca">{caso.codigoWCA}</span>
            <span className={`badge-dificuldade badge-${caso.dificuldade.toLowerCase()}`}>
              {caso.dificuldade}
            </span>
            {caso.modo2Look && <span className="badge-2look">2-Look</span>}
            <h2 id="modal-title" className="modal-title">{caso.nome}</h2>
          </div>
          <button
            type="button"
            className="modal-btn-close"
            onClick={onClose}
            aria-label="Fechar janela"
          >
            ✕
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="modal-body">
          <div className="modal-visual-col">
            <DiagramaCubo tipo={caso.tipo} stickers={caso.stickers} codigoWCA={caso.codigoWCA} />
            <span className="modal-subcategoria-tag">{caso.subcategoria}</span>
          </div>

          <div className="modal-info-col">
            <p className="modal-descricao">{caso.descricaoVisual}</p>

            <div className="modal-formula-card">
              <span className="modal-section-label">Fórmula Principal (WCA):</span>
              <div className="modal-formula-display">
                <code>{caso.formula}</code>
              </div>
            </div>

            {/* Renderização Condicional: fórmula alternativa apenas se existir */}
            {caso.formulaAlternativa && (
              <div className="modal-formula-card formula-secundaria">
                <span className="modal-section-label">Fórmula Alternativa:</span>
                <div className="modal-formula-display">
                  <code>{caso.formulaAlternativa}</code>
                </div>
              </div>
            )}

            {/* Renderização Condicional: dica apenas se existir */}
            {caso.dica && (
              <div className="modal-dica-box">
                <span className="dica-icone">💡</span>
                <span>{caso.dica}</span>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé do Modal com Ações Condicionais */}
        <div className="modal-footer">
          <button
            type="button"
            className={`btn-aprendido-toggle modal-toggle-btn ${isAprendido ? "ativo" : ""}`}
            onClick={() => onToggleAprendido(caso.id)}
          >
            {isAprendido ? "✓ Caso Marcado como Memorizado" : "+ Marcar como Memorizado"}
          </button>

          <button
            type="button"
            className="btn-copiar modal-copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(caso.formula);
              alert(`Fórmula do ${caso.codigoWCA} copiada para a área de transferência!`);
            }}
          >
            📋 Copiar Fórmula
          </button>
        </div>
      </div>
    </div>
  );
}
