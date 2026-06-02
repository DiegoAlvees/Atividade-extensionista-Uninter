import { useState } from "react";
import dados from "./data/unidades.json";
import UnidadeCard from "./components/UnidadeCard";
import bannerCidade from "./assets/artur-nogueira.jpeg";

function App() {
  const [busca, setBusca] = useState("");

  const categoriasFiltradas = dados.categorias.map((categoria) => ({
    ...categoria,
    unidades: categoria.unidades.filter((unidade) =>
      unidade.nome.toLowerCase().includes(busca.toLowerCase())
    ),
  }));

  return (
    <div className="container">
      <header
  className="hero"
  style={{
    backgroundImage: `url(${bannerCidade})`,
  }}
>
  <div className="overlay">
    <h1>Serviços Públicos</h1>
    <h2>
      {dados.cidade} - {dados.estado}
    </h2>

    <input
      type="text"
      placeholder="Pesquisar unidade..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  </div>
</header>

      {categoriasFiltradas.map((categoria) => (
        <section key={categoria.id}>
          <h2
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              color: categoria.cor,
            }}
          >
            {categoria.icone} {categoria.nome}
          </h2>

          <div className="grid">
            {categoria.unidades.map((unidade) => (
              <UnidadeCard
                key={unidade.id}
                unidade={unidade}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;