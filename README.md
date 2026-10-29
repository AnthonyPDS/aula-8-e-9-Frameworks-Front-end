# 🧩 SpeedCube OLL & PLL Guide — Planejamento e Documentação do Projeto

Aplicação web interativa em **React** desenvolvida para apoiar speedcubers e entusiastas do Cubo Mágico 3x3 no aprendizado e consulta rápida dos algoritmos do método **CFOP (Fridrich)**, com foco nas etapas finais: **OLL** (*Orientation of the Last Layer*) e **PLL** (*Permutation of the Last Layer*).

Este projeto atende integralmente à atividade prática da disciplina **Frameworks Front-end (SENAI)**, incorporando todos os conceitos fundamentais do ecossistema React.

---

## 📌 Sumário
- [1. Visão Geral do Projeto](#1-visão-geral-do-projeto)
- [2. O Método CFOP e o Escopo da Aplicação](#2-o-método-cfop-e-o-escopo-da-aplicação)
- [3. Mapeamento dos Conceitos da Aula de React](#3-mapeamento-dos-conceitos-da-aula-de-react)
- [4. Arquitetura de Componentes](#4-arquitetura-de-componentes)
- [5. Estrutura de Pastas e Arquivos](#5-estrutura-de-pastas-e-arquivos)
- [6. Modelo de Dados (Estrutura de Objetos)](#6-modelo-de-dados-estrutura-de-objetos)
- [7. Design e Experiência do Usuário (UI/UX)](#7-design-e-experiência-do-usuário-uiux)
- [8. Funcionalidades da Aplicação](#8-funcionalidades-da-aplicação)
- [9. Roteiro de Implementação Passo a Passo](#9-roteiro-de-implementação-passo-a-passo)
- [10. Instruções para Execução](#10-instruções-para-execução)

---

## 1. Visão Geral do Projeto

Resolver o Cubo Mágico em alta velocidade requer o domínio de algoritmos específicos para orientar e permutar as peças da última camada. Speedcubers frequentemente precisam de uma folha de referência (*cheat sheet*) interativa, categorizada, que mostre a visualização do topo do cubo, a notação oficial internacional e dicas de execução (*fingertricks*).

### Objetivos do Site:
1. Proporcionar um catálogo visual limpo, moderno e responsivo dos algoritmos de **OLL** e **PLL**.
2. Permitir filtragem por grupo de casos (ex.: *Cruz Pronta*, *Cantos Orientados*, *Permutações Adjacentes*, *Permutações Diagonais*).
3. Oferecer modo iniciante (**2-Look OLL / 2-Look PLL**) e modo completo (**Full OLL / Full PLL**).
4. Permitir marcação de algoritmos como "Aprendidos" ou "Favoritos" para acompanhamento de evolução do usuário.

---

## 2. O Método CFOP e o Escopo da Aplicação

O método avançado **CFOP** é dividido em 4 etapas:
1. **Cross** (Cruz inicial na base branca)
2. **F2L** (*First Two Layers* - duas primeiras camadas simultâneas)
3. **OLL** (*Orientation of the Last Layer*): orienta todas as peças da camada superior para que a face amarela fique totalmente voltada para cima.
   - **Full OLL**: 57 casos.
   - **2-Look OLL** (para iniciantes): 7 casos principais (cruz amarela + orientação de cantos).
4. **PLL** (*Permutation of the Last Layer*): permuta as peças da última camada para que as cores laterais coincidam e o cubo fique completamente resolvido.
   - **Full PLL**: 21 casos (T-Perm, Y-Perm, J-Perm, H-Perm, etc.).
   - **2-Look PLL** (para iniciantes): 6 casos principais (cantos e meios).

A aplicação terá como foco central as etapas **OLL** e **PLL**, fornecendo notações padrão da WCA (*World Cube Association*), como:
- Movimentos básicos: `R` (Direita), `U` (Cima), `L` (Esquerda), `D` (Baixo), `F` (Frente), `B` (Trás).
- Modificadores: apóstrofo `'` (sentido anti-horário), número `2` (giro duplo de 180°), letra minúscula (dupla camada).

---

## 3. Mapeamento dos Conceitos da Aula de React

Para atender a todos os requisitos avaliados pelo SENAI, a aplicação implementará os conceitos da seguinte forma:

| Conceito | Aplicação Prática no Projeto |
| :--- | :--- |
| **JSX** | Sintaxe declarativa combinando HTML com expressões `{}` para exibir nomes de casos, movimentos de algoritmos, badges de dificuldade e contadores dinâmicos. Uso estrito de `className` e fragmentos `<>...</>`. |
| **Componentes** | Construção modular e reutilizável da interface com funções especializadas com inicial maiúscula (`Header`, `Navbar`, `Filtro`, `CardAlgoritmo`, `ListaAlgoritmos`, `ModalDetalhes`, `Footer`). |
| **Props** | Passagem unidirecional de dados: os objetos contendo nome, caso, notação, categoria e diagrama são passados do componente pai (`App`/`ListaAlgoritmos`) para o componente filho (`CardAlgoritmo`) via desestruturação (`{ id, nome, formula, visual, dificuldade }`). |
| **Virtual DOM** | Ao trocar de aba (OLL/PLL) ou digitar no campo de busca, o React atualiza o estado (`useState`), compara as árvores de representação em memória e aplica apenas as alterações no DOM real com alta performance e sem recarregar a página. |
| **Listas e Keys** | Renderização das coleções de algoritmos através do método `.map()`, utilizando a propriedade obrigatória e estável `key={item.id}` (ex.: `key="oll-01"`, `key="pll-t"`). Aplicação do método `.filter()` para busca textual e filtros de subgrupo. |
| **Renderização Condicional** | 1. Alternância de abas OLL / PLL.<br>2. Operador ternário (`? :`) para exibir o status de aprendizado ("Aprendido" vs "Aprender").<br>3. Renderização de mensagem amigável caso a busca não retorne nenhum resultado (`itens.length === 0`).<br>4. Exibição condicional de modal/detalhes ao clicar em um card. |

---

## 4. Arquitetura de Componentes

A aplicação será organizada segundo a seguinte árvore hierárquica:

```text
App
├── Header (Título, slogan, contador de progresso e tema)
├── Navbar / Abas (Alternador entre OLL, PLL e Guia de Notações)
├── BarraDeFiltros
│   ├── CampoBusca (Filtro por nome ou fórmula)
│   └── SeletorSubcategoria (Ex: 2-Look vs Completo, Casos de Cruz, etc.)
├── ListaAlgoritmos
│   ├── [Condicional: Mensagem "Nenhum resultado" se vazio]
│   └── CardAlgoritmo (Reutilizado via .map com key única)
│       ├── CuboVisual (Diagrama SVG/CSS da face superior)
│       ├── TagDificuldade (Renderização condicional de cor/status)
│       ├── FormulaDisplay (Código do algoritmo com destaque de parênteses)
│       └── BotaoAcao (Alternar status aprendido / copiar fórmula)
├── ModalDetalhes (Renderização condicional ao selecionar um caso)
└── Footer (Créditos, referências WCA e links SENAI)
```

---

## 5. Estrutura de Pastas e Arquivos

O projeto seguirá o padrão modular de desenvolvimento React:

```text
aula-8-e-9/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── cube-icon.svg
│   ├── data/
│   │   ├── ollAlgorithms.js    # Dados completos dos casos de OLL
│   │   └── pllAlgorithms.js    # Dados completos dos casos de PLL
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com estatísticas
│   │   ├── Navbar.jsx          # Seletor de abas (OLL / PLL / Notações)
│   │   ├── Filtro.jsx          # Campo de busca e botões de filtro
│   │   ├── CardAlgoritmo.jsx   # Card individual com props
│   │   ├── ListaAlgoritmos.jsx # Renderização de lista (.map + key)
│   │   ├── ModalDetalhes.jsx   # Modal condicional com mais detalhes
│   │   └── Footer.jsx          # Rodapé com créditos
│   ├── App.jsx                 # Componente principal e orquestração de estado
│   ├── App.css                 # Estilos específicos da aplicação
│   ├── index.css               # Design system global (cores, tipografia, resets)
│   └── main.jsx                # Ponto de entrada React (Virtual DOM / ReactDOM)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 6. Modelo de Dados (Estrutura de Objetos)

Cada algoritmo será tipado em formato de objeto JavaScript estruturado da seguinte forma:

```javascript
{
  id: "pll-t",
  tipo: "PLL",                // "OLL" | "PLL"
  nome: "T-Permutation",      // Nome comumente conhecido
  alias: "T-Perm",
  grupo: "Permutação Adjacente",
  modoIniciante: true,        // Faz parte do 2-Look PLL
  probabilidade: "1/18",
  movimentos: "(R U R' U') R' F R2 (U' R' U') (R U R') F'",
  dificuldade: "Fácil",       // "Fácil" | "Médio" | "Avançado"
  dicas: "Um dos algoritmos de PLL mais populares e confortáveis para fingertricks.",
  coresFaceSuperior: {
    // Representação dos adesivos da face superior e laterais para o diagrama
    corners: ["yellow", "yellow", "yellow", "yellow"],
    edges: ["yellow", "yellow", "yellow", "yellow"]
  }
}
```

---

## 7. Design e Experiência do Usuário (UI/UX)

- **Paleta de Cores**: Inspirada no próprio cubo mágico com fundo moderno no estilo *Dark Glassmorphism*:
  - Fundo principal: `#0f172a` (azul ardósia escuro)
  - Superfícies dos Cards: `#1e293b` com bordas sutis em `#334155`
  - Acentos de cor: Amarelo Cubo (`#facc15`), Azul (`#38bdf8`), Vermelho (`#f43f5e`), Verde (`#22c55e`), Laranja (`#fb923c`).
- **Tipografia**: Família moderna com fontes monospace legíveis para as notações dos algoritmos (ex.: `'JetBrains Mono'`, `'Fira Code'` ou `'Courier New'`), facilitando a leitura de letras maiúsculas e apóstrofos.
- **Interatividade**:
  - Efeito de hover suave nos cards com elevação e brilho.
  - Botão de "Copiar Algoritmo" com feedback visual temporário via tooltip.
  - Botão de favoritar/marcar como aprendido com atualização reativa do contador no topo.

---

## 8. Funcionalidades da Aplicação

1. **Catálogo Completo OLL e PLL**:
   - Visualização dos principais casos de orientação e permutação.
2. **Alternador de Modos**:
   - Modo **2-Look** (ideal para quem está começando).
   - Modo **Full** (todos os casos para speedcubers avançados).
3. **Filtro em Tempo Real**:
   - Busca instantânea conforme o usuário digita o nome do caso ou fragmento da fórmula.
4. **Gerenciador de Aprendizado (Checklist)**:
   - Permite marcar quais casos já foram memorizados, exibindo uma barra de progresso percentual.
5. **Guia Rápido de Notação**:
   - Seção explicativa sobre o que significa cada letra (`R`, `U`, `L`, `F`, `'`, `2`).

---

## 9. Roteiro de Implementação Passo a Passo

1. **Etapa 1**: Configuração do projeto com `Vite` e limpeza dos arquivos padrão.
2. **Etapa 2**: Criação do design system global em `index.css` (variáveis CSS, tema escuro, tipografia).
3. **Etapa 3**: Criação das bases de dados em `src/data/ollAlgorithms.js` e `src/data/pllAlgorithms.js`.
4. **Etapa 4**: Construção dos componentes visuais (`Header`, `Navbar`, `Filtro`, `CardAlgoritmo`).
5. **Etapa 5**: Montagem do componente `ListaAlgoritmos` com `.map()` e chaves únicas.
6. **Etapa 6**: Implementação da renderização condicional (filtros, estados vazios, tags e modais).
7. **Etapa 7**: Validação de responsividade (celular, tablet e desktop).
8. **Etapa 8**: Publicação e sincronização com o repositório GitHub.

---

## 10. Instruções para Execução

```bash
# 1. Clonar o repositório
git clone https://github.com/AnthonyPDS/aula-8-e-9-Frameworks-Front-end.git

# 2. Acessar a pasta
cd aula-8-e-9-Frameworks-Front-end

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

---
*Projeto desenvolvido para a disciplina de Frameworks Front-end — SENAI.*
