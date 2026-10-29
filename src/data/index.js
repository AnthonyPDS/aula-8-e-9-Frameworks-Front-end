import { ollAlgorithms } from "./ollAlgorithms";
import { pllAlgorithms } from "./pllAlgorithms";

export { ollAlgorithms, pllAlgorithms };

/**
 * Retorna todos os algoritmos combinados (OLL e PLL).
 */
export const allAlgorithms = [...ollAlgorithms, ...pllAlgorithms];

/**
 * Retorna lista de subcategorias únicas disponíveis para um tipo específico ("OLL" ou "PLL").
 */
export function getSubcategorias(tipo) {
  const lista = tipo === "OLL" ? ollAlgorithms : pllAlgorithms;
  const categorias = new Set(lista.map((item) => item.subcategoria));
  return ["Todas", ...Array.from(categorias)];
}
