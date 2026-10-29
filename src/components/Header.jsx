/**
 * Componente Header (Cabeçalho da Aplicação)
 * Recebe via Props:
 * - totalCasos: número total de algoritmos no modo atual
 * - aprendidosCount: quantidade de algoritmos marcados como aprendidos
 * - activeTab: aba atual ("OLL" | "PLL" | "Notacoes")
 */
export function Header({ totalCasos = 0, aprendidosCount = 0, activeTab = "OLL" }) {
  const percentual = totalCasos > 0 ? Math.round((aprendidosCount / totalCasos) * 100) : 0;

  return (
    <header className="header-container">
      <div className="header-brand">
        <div className="cube-logo-badge" aria-hidden="true">
          <div className="cube-face-mini">
            <span className="dot dot-yellow"></span>
            <span className="dot dot-blue"></span>
            <span className="dot dot-red"></span>
            <span className="dot dot-green"></span>
            <span className="dot dot-orange"></span>
            <span className="dot dot-white"></span>
          </div>
        </div>
        <div className="header-titles">
          <div className="header-tag">Método CFOP / Fridrich</div>
          <h1 className="header-main-title">SpeedCube OLL &amp; PLL</h1>
          <p className="header-subtitle">
            Guia interativo de algoritmos para o Cubo Mágico 3x3 • Última Camada
          </p>
        </div>
      </div>

      {activeTab !== "Notacoes" && (
        <div className="header-stats-card">
          <div className="stats-header">
            <span className="stats-label">Seu Progresso em {activeTab}</span>
            <span className="stats-count">
              <strong>{aprendidosCount}</strong> / {totalCasos} ({percentual}%)
            </span>
          </div>
          <div className="progress-bar-bg" role="progressbar" aria-valuenow={percentual} aria-valuemin="0" aria-valuemax="100">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentual}%` }}
            ></div>
          </div>
        </div>
      )}
    </header>
  );
}
