/**
 * Base de dados dos algoritmos de OLL (Orientation of the Last Layer)
 * Inclui os 7 casos essenciais do 2-Look OLL (Orientação de Cantos com Cruz Pronta)
 * e os 3 casos básicos de formação da Cruz (Linha, L e Ponto).
 */
export const ollAlgorithms = [
  {
    id: "oll-sune",
    tipo: "OLL",
    nome: "Sune",
    codigoWCA: "OLL 27",
    subcategoria: "Cruz Pronta",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "R U R' U R U2 R'",
    descricaoVisual: "1 canto amarelo orientado no topo; o canto frontal-direito tem amarelo apontando para a direita.",
    dica: "Giro simples e muito rápido para fingertricks. O mais básico do cubo.",
    stickers: {
      top: ["gray", "yellow", "gray", "yellow", "yellow", "yellow", "yellow", "yellow", "gray"],
      frente: ["yellow", "yellow"]
    }
  },
  {
    id: "oll-anti-sune",
    tipo: "OLL",
    nome: "Anti-Sune",
    codigoWCA: "OLL 26",
    subcategoria: "Cruz Pronta",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "R U2 R' U' R U' R'",
    descricaoVisual: "1 canto amarelo orientado no topo; o canto frontal-esquerdo tem amarelo apontando para a frente.",
    dica: "Espelho exato do Sune, desfazendo no sentido anti-horário.",
    stickers: {
      top: ["gray", "yellow", "gray", "yellow", "yellow", "yellow", "gray", "yellow", "yellow"],
      frente: ["yellow", "yellow"]
    }
  },
  {
    id: "oll-carro-h",
    tipo: "OLL",
    nome: "Carro (H)",
    codigoWCA: "OLL 21",
    subcategoria: "Cruz Pronta",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "F (R U R' U') (R U R' U') (R U R' U') F'",
    descricaoVisual: "Nenhum canto orientado no topo. Faróis duplos amarelos nas laterais opostas.",
    dica: "F seguido de 3 Sexy Moves (R U R' U') finalizando com F'.",
    stickers: {
      top: ["gray", "yellow", "gray", "yellow", "yellow", "yellow", "gray", "yellow", "gray"],
      frente: ["yellow", "yellow"]
    }
  },
  {
    id: "oll-pi",
    tipo: "OLL",
    nome: "Pi",
    codigoWCA: "OLL 22",
    subcategoria: "Cruz Pronta",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "R U2 (R2 U' R2 U' R2) U2 R",
    descricaoVisual: "Nenhum canto orientado no topo. Um par de faróis amarelos à esquerda e dois cantos opostos.",
    dica: "Mantenha os faróis à esquerda ao executar.",
    stickers: {
      top: ["gray", "yellow", "gray", "yellow", "yellow", "yellow", "gray", "yellow", "gray"],
      frente: ["yellow", "gray"]
    }
  },
  {
    id: "oll-farois-u",
    tipo: "OLL",
    nome: "Faróis (U)",
    codigoWCA: "OLL 23",
    subcategoria: "Cruz Pronta",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "R2 D (R' U2 R) D' (R' U2 R')",
    descricaoVisual: "2 cantos traseiros amarelos orientados; dois cantos frontais apontam amarelo para a frente (faróis).",
    dica: "Excelente uso de movimentos de camada D para evitar rotações de cubo.",
    stickers: {
      top: ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "gray", "yellow", "gray"],
      frente: ["yellow", "yellow"]
    }
  },
  {
    id: "oll-gravata-l",
    tipo: "OLL",
    nome: "Gravata / Bowtie (L)",
    codigoWCA: "OLL 24",
    subcategoria: "Cruz Pronta",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "r U R' U' r' F R F'",
    descricaoVisual: "2 cantos orientados na diagonal; os outros 2 cantos apontam para direções opostas.",
    dica: "Utiliza movimento 'r' de camada dupla com a mão direita.",
    stickers: {
      top: ["yellow", "yellow", "gray", "yellow", "yellow", "yellow", "gray", "yellow", "yellow"],
      frente: ["gray", "yellow"]
    }
  },
  {
    id: "oll-camaleao-t",
    tipo: "OLL",
    nome: "Camaleão (T)",
    codigoWCA: "OLL 25",
    subcategoria: "Cruz Pronta",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "F' (r U R' U') r' F R",
    descricaoVisual: "2 cantos orientados do mesmo lado; os cantos frontais apontam para fora como olhos de camaleão.",
    dica: "Variação fluida do alg da gravata iniciando com F'.",
    stickers: {
      top: ["yellow", "yellow", "gray", "yellow", "yellow", "yellow", "yellow", "yellow", "gray"],
      frente: ["gray", "gray"]
    }
  },
  {
    id: "oll-linha-cruz",
    tipo: "OLL",
    nome: "Linha (Orientação de Meios)",
    codigoWCA: "OLL 45",
    subcategoria: "Construção da Cruz",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "F (R U R' U') F'",
    descricaoVisual: "Linha amarela horizontal no meio da camada superior.",
    dica: "O primeiro passo do 2-Look OLL para criar a cruz amarela a partir da linha.",
    stickers: {
      top: ["gray", "gray", "gray", "yellow", "yellow", "yellow", "gray", "gray", "gray"],
      frente: ["yellow", "yellow"]
    }
  },
  {
    id: "oll-formato-l",
    tipo: "OLL",
    nome: "Pequeno L (Orientação de Meios)",
    codigoWCA: "OLL 44",
    subcategoria: "Construção da Cruz",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "f (R U R' U') f'",
    descricaoVisual: "Formato de 'L' de meios amarelos no topo (posicionado nas horas 9 e 12).",
    dica: "Mesmo gatilho da linha, porém usando camada dupla frontal 'f'.",
    stickers: {
      top: ["gray", "yellow", "gray", "yellow", "yellow", "gray", "gray", "gray", "gray"],
      frente: ["gray", "yellow"]
    }
  },
  {
    id: "oll-ponto",
    tipo: "OLL",
    nome: "Ponto Central (Orientação de Meios)",
    codigoWCA: "OLL 01",
    subcategoria: "Construção da Cruz",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "F (R U R' U') F' f (R U R' U') f'",
    descricaoVisual: "Nenhum meio amarelo orientado no topo, apenas o centro.",
    dica: "Combinação direta do algoritmo da Linha seguido do algoritmo do Pequeno L.",
    stickers: {
      top: ["gray", "gray", "gray", "gray", "yellow", "gray", "gray", "gray", "gray"],
      frente: ["yellow", "yellow"]
    }
  }
];
