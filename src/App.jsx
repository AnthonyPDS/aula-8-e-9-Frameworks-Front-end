import { useState, useMemo, useEffect } from "react";
import { ollAlgorithms, pllAlgorithms, getSubcategorias } from "./data";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Filtro } from "./components/Filtro";
import { ListaAlgoritmos } from "./components/ListaAlgoritmos";
import { ModalDetalhes } from "./components/ModalDetalhes";
import { GuiaNotacoes } from "./components/GuiaNotacoes";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  // Aba ativa: "OLL", "PLL" ou "Notacoes"
  const [activeTab, setActiveTab] = useState("OLL");

  // Estados dos Filtros
  const [busca, setBusca] = useState("");
  const [subcategoria, setSubcategoria] = useState("Todas");
  const [apenas2Look, setApenas2Look] = useState(false);
  const [dificuldade, setDificuldade] = useState("Todas");
  const [filtroStatus, setFiltroStatus] = useState("Todos");

  // Estado para Modal de Detalhes (caso selecionado ou null)
  const [casoSelecionado, setCasoSelecionado] = useState(null);

  // Estado dos algoritmos aprendidos (com persistência no localStorage)
  const [aprendidos, setAprendidos] = useState(() => {
    try {
      const salvo = localStorage.getItem("speedcube_aprendidos");
      return salvo ? JSON.parse(salvo) : ["oll-sune", "pll-t", "pll-ua"];
    } catch {
      return ["oll-sune", "pll-t", "pll-ua"];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("speedcube_aprendidos", JSON.stringify(aprendidos));
    } catch {
      // Ignora falhas de storage em ambientes restritos
    }
  }, [aprendidos]);

  // Alterna o status de aprendizado de um caso
  const handleToggleAprendido = (id) => {
    setAprendidos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reseta os filtros de pesquisa
  const handleLimparFiltros = () => {
    setBusca("");
    setSubcategoria("Todas");
    setApenas2Look(false);
    setDificuldade("Todas");
    setFiltroStatus("Todos");
  };

  // Troca de aba e reinicia subcategoria
  const handleTrocaAba = (novaAba) => {
    setActiveTab(novaAba);
    setSubcategoria("Todas");
    setBusca("");
    setFiltroStatus("Todos");
  };

  // Base de dados ativa para a aba atual
  const listaBase = useMemo(() => {
    if (activeTab === "OLL") return ollAlgorithms;
    if (activeTab === "PLL") return pllAlgorithms;
    return [];
  }, [activeTab]);

  // Lista de subcategorias disponíveis para a aba atual
  const subcategoriasDisponiveis = useMemo(() => {
    if (activeTab === "OLL" || activeTab === "PLL") {
      return getSubcategorias(activeTab);
    }
    return [];
  }, [activeTab]);

  // Filtragem dos algoritmos
  const algoritmosFiltrados = useMemo(() => {
    return listaBase.filter((item) => {
      // 1. Filtro textual por nome, código WCA ou fórmula
      if (busca.trim() !== "") {
        const termo = busca.toLowerCase();
        const bateNome = item.nome.toLowerCase().includes(termo);
        const bateWCA = item.codigoWCA.toLowerCase().includes(termo);
        const bateFormula = item.formula.toLowerCase().includes(termo);
        if (!bateNome && !bateWCA && !bateFormula) return false;
      }

      // 2. Filtro por subcategoria
      if (subcategoria !== "Todas" && item.subcategoria !== subcategoria) {
        return false;
      }

      // 3. Filtro de 2-Look (modo iniciante)
      if (apenas2Look && !item.modo2Look) {
        return false;
      }

      // 4. Filtro por dificuldade
      if (dificuldade !== "Todas" && item.dificuldade !== dificuldade) {
        return false;
      }

      // 5. Filtro condicional por status de aprendizado
      const memorizado = aprendidos.includes(item.id);
      if (filtroStatus === "Memorizados" && !memorizado) {
        return false;
      }
      if (filtroStatus === "Pendentes" && memorizado) {
        return false;
      }

      return true;
    });
  }, [listaBase, busca, subcategoria, apenas2Look, dificuldade, filtroStatus, aprendidos]);

  // Quantidade de aprendidos na aba ativa
  const aprendidosAba = useMemo(() => {
    return listaBase.filter((item) => aprendidos.includes(item.id)).length;
  }, [listaBase, aprendidos]);

  return (
    <div className="app-container">
      {/* 1. Componente Header com Props */}
      <Header
        totalCasos={listaBase.length}
        aprendidosCount={aprendidosAba}
        activeTab={activeTab}
      />

      {/* 2. Componente Navbar com Props */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTrocaAba}
        ollCount={ollAlgorithms.length}
        pllCount={pllAlgorithms.length}
      />

      <main className="main-content">
        {/* Renderização condicional da aba de Guia de Notações */}
        {activeTab === "Notacoes" ? (
          <GuiaNotacoes />
        ) : (
          <>
            {/* 3. Componente Filtro com Props */}
            <Filtro
              busca={busca}
              onBuscaChange={setBusca}
              subcategoriaSelecionada={subcategoria}
              subcategorias={subcategoriasDisponiveis}
              onSelectSubcategoria={setSubcategoria}
              apenas2Look={apenas2Look}
              onToggle2Look={() => setApenas2Look((prev) => !prev)}
              filtroDificuldade={dificuldade}
              onSelectDificuldade={setDificuldade}
              filtroStatus={filtroStatus}
              onSelectStatus={setFiltroStatus}
              totalFiltrados={algoritmosFiltrados.length}
              totalGeral={listaBase.length}
              onLimparFiltros={handleLimparFiltros}
            />

            {/* 4. Componente ListaAlgoritmos (Renderização de Coleções e Keys) */}
            <ListaAlgoritmos
              algoritmos={algoritmosFiltrados}
              aprendidos={aprendidos}
              onToggleAprendido={handleToggleAprendido}
              onLimparFiltros={handleLimparFiltros}
              onSelectCaso={(caso) => setCasoSelecionado(caso)}
            />
          </>
        )}
      </main>

      {/* Renderização Condicional do Modal de Detalhes (curto-circuito) */}
      {casoSelecionado && (
        <ModalDetalhes
          caso={casoSelecionado}
          isAprendido={aprendidos.includes(casoSelecionado.id)}
          onToggleAprendido={handleToggleAprendido}
          onClose={() => setCasoSelecionado(null)}
        />
      )}

      {/* 5. Componente Footer com Props */}
      <Footer
        autor="Anthony Santos"
        curso="Frameworks Front-end • SENAI"
        ano={2026}
      />
    </div>
  );
}

export default App;
