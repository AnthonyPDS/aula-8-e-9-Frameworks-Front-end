/**
 * Base de dados completa dos 21 algoritmos de PLL (Permutation of the Last Layer)
 * Métodos do CFOP / Fridrich com subdivisões canônicas, notação WCA e dicas de execução.
 */
export const pllAlgorithms = [
  // --- 1. Permutação apenas de Cantos ---
  {
    id: "pll-aa",
    tipo: "PLL",
    nome: "Aa-Permutation",
    codigoWCA: "PLL Aa",
    subcategoria: "Permutação de Cantos",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "x (R' U R') D2 (R U' R') D2 R2 x'",
    descricaoVisual: "Troca 3 cantos no sentido horário. Mantém os 4 meios e 1 par de cantos intactos.",
    dica: "Inicia com rotação de cubo x (face branca para frente). Bastante usado no 2-Look PLL."
  },
  {
    id: "pll-ab",
    tipo: "PLL",
    nome: "Ab-Permutation",
    codigoWCA: "PLL Ab",
    subcategoria: "Permutação de Cantos",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "x R2 D2 (R U R') D2 (R U' R) x'",
    descricaoVisual: "Troca 3 cantos no sentido anti-horário. Espelho do caso Aa.",
    dica: "Fluidez alta com movimentos D2 usando anelar e mindinho."
  },
  {
    id: "pll-e",
    tipo: "PLL",
    nome: "E-Permutation",
    codigoWCA: "PLL E",
    subcategoria: "Permutação de Cantos",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x",
    descricaoVisual: "Troca 2 pares de cantos na diagonal. Todos os meios já estão nos lugares certos.",
    dica: "Padrão de ritmo alternando U' e U com movimentos de base D."
  },

  // --- 2. Permutação apenas de Meios ---
  {
    id: "pll-ua",
    tipo: "PLL",
    nome: "Ua-Permutation",
    codigoWCA: "PLL Ua",
    subcategoria: "Permutação de Meios",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "R U' R U R U R U' R' U' R2",
    formulaAlternativa: "M2 U M U2 M' U M2",
    descricaoVisual: "Todos os 4 cantos estão resolvidos; 3 meios ciclam no sentido horário.",
    dica: "Algoritmo mais rápido do cubo. Pode ser feito com movimentos R e U ou com a camada M."
  },
  {
    id: "pll-ub",
    tipo: "PLL",
    nome: "Ub-Permutation",
    codigoWCA: "PLL Ub",
    subcategoria: "Permutação de Meios",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "R2 U (R U R' U') R' U' R' U R'",
    formulaAlternativa: "M2 U' M U2 M' U' M2",
    descricaoVisual: "Todos os 4 cantos estão resolvidos; 3 meios ciclam no sentido anti-horário.",
    dica: "Inverso do Ua. O caso canônico mais fácil de reconhecer com barra sólida atrás."
  },
  {
    id: "pll-h",
    tipo: "PLL",
    nome: "H-Permutation",
    codigoWCA: "PLL H",
    subcategoria: "Permutação de Meios",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "M2 U M2 U2 M2 U M2",
    descricaoVisual: "Cantos resolvidos; troca meios opostos (Frente <-> Trás e Esquerda <-> Direita).",
    dica: "Execução simétrica pura usando fingertricks de camada média (M2)."
  },
  {
    id: "pll-z",
    tipo: "PLL",
    nome: "Z-Permutation",
    codigoWCA: "PLL Z",
    subcategoria: "Permutação de Meios",
    dificuldade: "Intermediário",
    modo2Look: true,
    formula: "M' U M2 U M2 U M' U2 M2",
    descricaoVisual: "Cantos resolvidos; troca meios adjacentes (Frente <-> Direita e Trás <-> Esquerda).",
    dica: "Padrão xadrez diagonal dos meios. Muito veloz com treino de M'."
  },

  // --- 3. Permutações Adjacentes ---
  {
    id: "pll-t",
    tipo: "PLL",
    nome: "T-Permutation",
    codigoWCA: "PLL T",
    subcategoria: "Permutação Adjacente",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "(R U R' U') R' F R2 (U' R' U') (R U R') F'",
    descricaoVisual: "Troca 2 cantos e 2 meios no lado direito, formando o formato da letra T.",
    dica: "O algoritmo de PLL mais amado e treinado do mundo. Extremamente ergonômico."
  },
  {
    id: "pll-ja",
    tipo: "PLL",
    nome: "Ja-Permutation",
    codigoWCA: "PLL Ja",
    subcategoria: "Permutação Adjacente",
    dificuldade: "Intermediário",
    modo2Look: false,
    formula: "x R2 F R F' R U2 r' U r U2 x'",
    descricaoVisual: "Troca 2 cantos e 2 meios adjacentes à esquerda, preservando uma barra de 1x1x3.",
    dica: "Transição suave com camada dupla r'."
  },
  {
    id: "pll-jb",
    tipo: "PLL",
    nome: "Jb-Permutation",
    codigoWCA: "PLL Jb",
    subcategoria: "Permutação Adjacente",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "(R U R' F') (R U R' U') R' F R2 (U' R' U')",
    descricaoVisual: "Troca 2 cantos e 2 meios adjacentes à direita com uma barra de 1x1x3 montada à esquerda.",
    dica: "Variação direta do T-Perm, trocando o fechamento da fórmula."
  },
  {
    id: "pll-ra",
    tipo: "PLL",
    nome: "Ra-Permutation",
    codigoWCA: "PLL Ra",
    subcategoria: "Permutação Adjacente",
    dificuldade: "Intermediário",
    modo2Look: false,
    formula: "(R U' R' U') (R U R D) (R' U' R D') (R' U2 R')",
    descricaoVisual: "Barra 1x1x2 na frente e faróis na esquerda; permuta 2 cantos e 2 meios.",
    dica: "Usa movimentos D discretos na mão esquerda."
  },
  {
    id: "pll-rb",
    tipo: "PLL",
    nome: "Rb-Permutation",
    codigoWCA: "PLL Rb",
    subcategoria: "Permutação Adjacente",
    dificuldade: "Intermediário",
    modo2Look: false,
    formula: "(R' U2 R U2) R' F (R U R' U') R' F' R2",
    descricaoVisual: "Barra 1x1x2 na frente e faróis atrás; espelho do caso Ra.",
    dica: "Começa com R' U2 R U2 criando uma abertura fluida."
  },
  {
    id: "pll-f",
    tipo: "PLL",
    nome: "F-Permutation",
    codigoWCA: "PLL F",
    subcategoria: "Permutação Adjacente",
    dificuldade: "Intermediário",
    modo2Look: false,
    formula: "(R' U' F') (R U R' U') (R' F R2 U') (R' U' R U) (R' U R)",
    descricaoVisual: "Barra 1x1x3 sólida completa na face esquerda com faróis na face direita.",
    dica: "Pode ser pensado como uma configuração prévia para o T-Perm."
  },

  // --- 4. Permutações Diagonais ---
  {
    id: "pll-v",
    tipo: "PLL",
    nome: "V-Permutation",
    codigoWCA: "PLL V",
    subcategoria: "Permutação Diagonal",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "(R' U R' U') y (R' F' R2 U') (R' U R' F) R F",
    descricaoVisual: "Troca 2 cantos na diagonal e 2 meios adjacentes formando um padrão em V.",
    dica: "Possui uma pequena rotação y de transição."
  },
  {
    id: "pll-y",
    tipo: "PLL",
    nome: "Y-Permutation",
    codigoWCA: "PLL Y",
    subcategoria: "Permutação Diagonal",
    dificuldade: "Iniciante",
    modo2Look: true,
    formula: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')",
    descricaoVisual: "Troca 2 cantos diagonais e 2 meios adjacentes. Barra 1x1x2 no canto traseiro-direito.",
    dica: "Fusão de dois gatilhos clássicos de F e F'. Padrão do 2-Look PLL para cantos."
  },
  {
    id: "pll-na",
    tipo: "PLL",
    nome: "Na-Permutation",
    codigoWCA: "PLL Na",
    subcategoria: "Permutação Diagonal",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "(R U R' U) (R U R' F' R U R' U' R' F R2 U' R') U2 (R' U R)",
    descricaoVisual: "Troca cantos diagonais e meios opostos com duas barras laterais de 1x1x2.",
    dica: "Construído sobre a base do J-Perm com conjugados de abertura e fechamento."
  },
  {
    id: "pll-nb",
    tipo: "PLL",
    nome: "Nb-Permutation",
    codigoWCA: "PLL Nb",
    subcategoria: "Permutação Diagonal",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "(R' U R U') (R' F' U' F) (R U R' F R' F' R U' R)",
    descricaoVisual: "Espelho simétrico do Na com duas barras laterais de 1x1x2 opostas.",
    dica: "Algoritmo longo porém muito rítmico."
  },

  // --- 5. Permutações G (Ciclos Triplos) ---
  {
    id: "pll-ga",
    tipo: "PLL",
    nome: "Ga-Permutation",
    codigoWCA: "PLL Ga",
    subcategoria: "Permutações G",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "R2 U (R' U R' U') (R U' R2) D (U' R' U R D')",
    descricaoVisual: "Faróis à esquerda e uma barra 1x1x2 na face frontal.",
    dica: "Um dos 4 temidos G-Perms. Requer coordenação precisa de movimentos U e D."
  },
  {
    id: "pll-gb",
    tipo: "PLL",
    nome: "Gb-Permutation",
    codigoWCA: "PLL Gb",
    subcategoria: "Permutações G",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "(R' U' R) y (R2 u R' U) (R U' R u') R2",
    descricaoVisual: "Faróis à esquerda e barra 1x1x2 na face traseira.",
    dica: "Utiliza rotação y e movimentos de dupla camada u'."
  },
  {
    id: "pll-gc",
    tipo: "PLL",
    nome: "Gc-Permutation",
    codigoWCA: "PLL Gc",
    subcategoria: "Permutações G",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "R2 U' (R U' R U) (R' U R2 D') (U R U' R' D)",
    descricaoVisual: "Faróis à direita e barra 1x1x2 na face frontal.",
    dica: "Espelho do Ga com inversão de giros U e U'."
  },
  {
    id: "pll-gd",
    tipo: "PLL",
    nome: "Gd-Permutation",
    codigoWCA: "PLL Gd",
    subcategoria: "Permutações G",
    dificuldade: "Avançado",
    modo2Look: false,
    formula: "(R U R') y' (R2 u' R U') (R' U R' u) R2",
    descricaoVisual: "Faróis à direita e barra 1x1x2 na face traseira.",
    dica: "Espelho direto do Gb com rotação y' rápida."
  }
];
