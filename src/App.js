import { filmes } from "./filmes.js";

//Crie um Component que irá renderizar apenas um filme.
//O nome do component pode ser FilmeCard.
//Nesse Component deve ser renderizado o emoji se
//o filme é ganhador de oscar.

function FilmeCard(props) {
  return (
    <div>
      <span role="img" aria-label="monk">
        {props.filme.nome}
      </span>
      {props.filme.oscar === true && (
        <span role="img" aria-label="monk">
          {" "}
          🙏{" "}
        </span>
      )}
    </div>
  );
}

function GanhouOscar(props) {
  return props.filmes.map((filme) => {
    if (filme.oscar === true) {
      return <FilmeCard filme={filme} />;
    }
    return <FilmeCard filme={filme} />;
  });
}

export default function App() {
  return <GanhouOscar filmes={filmes} />;
}
