/**
 * Componente Filtro (Barra de Pesquisa e Filtros Interativos)
 * Recebe via Props:
 * - busca: termo atual digitado
 * - onBuscaChange: callback ao alterar o campo de busca
 * - subcategoriaSelecionada: categoria ativa
 * - subcategorias: lista de opções de subcategorias
 * - onSelectSubcategoria: callback para selecionar categoria
 * - apenas2Look: filtro booleano para casos de iniciantes
 * - onToggle2Look: callback para alternar modo 2-Look
 * - filtroDificuldade: nível selecionado
 * - onSelectDificuldade: callback para mudar dificuldade
 * - totalFiltrados: contagem de casos exibidos após os filtros
 * - totalGeral: contagem total disponível na aba
 * - onLimparFiltros: função para resetar os filtros
 */
export function Filtro({
  busca,
  onBuscaChange,
  subcategoriaSelecionada,
  subcategorias = [],
  onSelectSubcategoria,
  apenas2Look,
  onToggle2Look,
  filtroDificuldade,
  onSelectDificuldade,
  filtroStatus = "Todos",
  onSelectStatus,
  totalFiltrados = 0,
  totalGeral = 0,
  onLimparFiltros
}) {
  const temFiltroAtivo =
    busca.trim() !== "" ||
    subcategoriaSelecionada !== "Todas" ||
    apenas2Look ||
    filtroDificuldade !== "Todas" ||
    filtroStatus !== "Todos";

  return (
    <section className="filtro-container" aria-label="Filtros de busca e categorização">
      <div className="filtro-primary-row">
        {/* Campo de Busca em Tempo Real */}
        <div className="search-input-wrapper">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            id="input-busca-algoritmo"
            className="search-input"
            placeholder="Pesquisar por nome (ex: Sune, T-Perm) ou movimentos (R U R')..."
            value={busca}
            onChange={(e) => onBuscaChange(e.target.value)}
          />
          {busca && (
            <button
              type="button"
              className="btn-clear-search"
              onClick={() => onBuscaChange("")}
              aria-label="Limpar campo de busca"
            >
              ✕
            </button>
          )}
        </div>

        {/* Botão de alternar 2-Look (Modo Iniciante) */}
        <button
          type="button"
          className={`btn-toggle-2look ${apenas2Look ? "ativo" : ""}`}
          onClick={onToggle2Look}
          id="toggle-2look"
          aria-pressed={apenas2Look}
        >
          <span className="toggle-bullet"></span>
          <span>Apenas 2-Look (Iniciantes)</span>
        </button>
      </div>

      {/* Linha de Subcategorias e Dificuldades */}
      <div className="filtro-secondary-row">
        {/* Pílulas de Subcategoria */}
        <div className="pill-group" role="group" aria-label="Filtrar por subcategoria">
          <span className="pill-group-title">Grupo:</span>
          <div className="pill-scroll">
            {subcategorias.map((subcat) => (
              <button
                key={subcat}
                type="button"
                className={`pill-btn ${subcategoriaSelecionada === subcat ? "ativo" : ""}`}
                onClick={() => onSelectSubcategoria(subcat)}
              >
                {subcat}
              </button>
            ))}
          </div>
        </div>

        {/* Seletor de Dificuldade */}
        <div className="dificuldade-group" role="group" aria-label="Filtrar por nível">
          <span className="pill-group-title">Dificuldade:</span>
          {["Todas", "Iniciante", "Intermediário", "Avançado"].map((nivel) => (
            <button
              key={nivel}
              type="button"
              className={`pill-btn pill-dificuldade ${filtroDificuldade === nivel ? "ativo" : ""}`}
              onClick={() => onSelectDificuldade(nivel)}
            >
              {nivel}
            </button>
          ))}
        </div>

        {/* Seletor de Status de Aprendizado */}
        {onSelectStatus && (
          <div className="status-group" role="group" aria-label="Filtrar por status">
            <span className="pill-group-title">Status:</span>
            {[
              { id: "Todos", label: "Todos" },
              { id: "Memorizados", label: "✓ Memorizados" },
              { id: "Pendentes", label: "⏳ A Treinar" }
            ].map((st) => (
              <button
                key={st.id}
                type="button"
                className={`pill-btn pill-status ${filtroStatus === st.id ? "ativo" : ""}`}
                onClick={() => onSelectStatus(st.id)}
              >
                {st.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Barra de Status e Feedback de Resultados */}
      <div className="filtro-feedback-row">
        <span className="resultados-contagem">
          Exibindo <strong>{totalFiltrados}</strong> de {totalGeral} casos
        </span>

        {temFiltroAtivo && (
          <button
            type="button"
            className="btn-limpar-filtros"
            onClick={onLimparFiltros}
          >
            ↺ Limpar filtros
          </button>
        )}
      </div>
    </section>
  );
}
