/**
 * Componente DiagramaCubo (Visualizador Top-Down do Cubo Mágico 3x3)
 * Recebe via Props:
 * - tipo: "OLL" | "PLL"
 * - stickers: objeto opcional com array top (9 posições: 0..8)
 * - codigoWCA: identificador do caso
 */
export function DiagramaCubo({ tipo = "OLL", stickers, codigoWCA = "" }) {
  // Para OLL: se tiver stickers definidos, usa eles; caso contrário, usa cruz padrão
  const topStickers = stickers?.top || [
    "yellow", "yellow", "yellow",
    "yellow", "yellow", "yellow",
    "yellow", "yellow", "yellow"
  ];

  const isPLL = tipo === "PLL";

  return (
    <div className={`cube-diagram-container ${isPLL ? "pll-diagram" : "oll-diagram"}`}>
      <div className="cube-top-face" title={`Diagrama de reconhecimento: ${codigoWCA}`}>
        {topStickers.map((cor, idx) => {
          // No PLL o topo é sempre 100% amarelo
          const corAdesivo = isPLL ? "sticker-yellow" : (cor === "yellow" ? "sticker-yellow" : "sticker-gray");
          const isCenter = idx === 4;

          return (
            <div
              key={idx}
              className={`cube-sticker ${corAdesivo} ${isCenter ? "sticker-center" : ""}`}
            ></div>
          );
        })}
      </div>
      <div className="cube-diagram-badge">{codigoWCA}</div>
    </div>
  );
}
