import { CardAlgoritmo } from "./CardAlgoritmo";

/**
 * Componente ListaAlgoritmos (Renderização de Listas e Keys)
 * Atende aos conceitos dos slides 68 a 74 da aula SENAI:
 * - Utiliza .map() para iterar sobre a coleção de dados e gerar elementos JSX.
 * - Utiliza a prop especial 'key={algo.id}' com identificador único e estável para reconciliação do Virtual DOM.
 * 
 * Recebe via Props:
 * - algoritmos: array de objetos com os algoritmos filtrados
 * - aprendidos: array com IDs dos algoritmos já memorizados
 * - onToggleAprendido: função callback para alternar status de aprendizado
 * - onLimparFiltros: função callback para redefinir filtros caso a lista esteja vazia
 */
export function ListaAlgoritmos({
  algoritmos = [],
  aprendidos = [],
  onToggleAprendido,
  onLimparFiltros,
  onSelectCaso
}) {
  // Renderização condicional para estado de lista vazia
  if (algoritmos.length === 0) {
    return (
      <section className="lista-section" aria-label="Catálogo de Algoritmos">
        <div className="empty-state-card">
          <div className="empty-state-icon" aria-hidden="true">🧩</div>
          <h3>Nenhum algoritmo encontrado</h3>
          <p>
            Não encontramos nenhum algoritmo com os filtros ou termo de busca informados.
          </p>
          <button
            type="button"
            className="btn-limpar-filtros"
            onClick={onLimparFiltros}
          >
            ↺ Redefinir Filtros
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="lista-section" aria-label="Catálogo de Algoritmos">
      <div className="grid-algoritmos">
        {/* Renderização de Lista com .map() e chave única key obrigatória */}
        {algoritmos.map((algo) => (
          <CardAlgoritmo
            key={algo.id}
            id={algo.id}
            nome={algo.nome}
            codigoWCA={algo.codigoWCA}
            tipo={algo.tipo}
            subcategoria={algo.subcategoria}
            dificuldade={algo.dificuldade}
            formula={algo.formula}
            formulaAlternativa={algo.formulaAlternativa}
            descricaoVisual={algo.descricaoVisual}
            dica={algo.dica}
            modo2Look={algo.modo2Look}
            stickers={algo.stickers}
            isAprendido={aprendidos.includes(algo.id)}
            onToggleAprendido={onToggleAprendido}
            onSelect={() => onSelectCaso && onSelectCaso(algo)}
          />
        ))}
      </div>
    </section>
  );
}
