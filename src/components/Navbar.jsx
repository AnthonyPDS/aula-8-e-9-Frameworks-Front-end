/**
 * Componente Navbar (Abas de Navegação)
 * Recebe via Props:
 * - activeTab: aba selecionada no momento ("OLL" | "PLL" | "Notacoes")
 * - onSelectTab: função callback para troca de aba
 * - ollCount: quantidade de algoritmos OLL cadastrados
 * - pllCount: quantidade de algoritmos PLL cadastrados
 */
export function Navbar({ activeTab, onSelectTab, ollCount = 0, pllCount = 0 }) {
  return (
    <nav className="navbar-container" aria-label="Navegação por categorias de algoritmos">
      <div className="tabs-wrapper">
        <button
          type="button"
          className={`tab-btn ${activeTab === "OLL" ? "active" : ""}`}
          onClick={() => onSelectTab("OLL")}
          id="tab-oll"
        >
          <span className="tab-icon">🟡</span>
          <span className="tab-title">OLL</span>
          <span className="tab-badge">{ollCount} casos</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === "PLL" ? "active" : ""}`}
          onClick={() => onSelectTab("PLL")}
          id="tab-pll"
        >
          <span className="tab-icon">🟢</span>
          <span className="tab-title">PLL</span>
          <span className="tab-badge">{pllCount} casos</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === "Notacoes" ? "active" : ""}`}
          onClick={() => onSelectTab("Notacoes")}
          id="tab-notacoes"
        >
          <span className="tab-icon">📖</span>
          <span className="tab-title">Guia de Notações</span>
        </button>
      </div>
    </nav>
  );
}
