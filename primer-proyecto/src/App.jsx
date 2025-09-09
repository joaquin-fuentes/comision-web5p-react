import Header from "./components/Header";
import Titulo from "./components/Titulo";

export default function App() {
  // lo que va aqui es Javascript
  const tituloDeLaSeccion = "Listado de los mejores alumnos de RollingCode";
  const molestar = false;

  return (
    <>
      <Header></Header>
      <main>
        {/* aqui va a ir un titulo */}
        <Titulo
          titulo={tituloDeLaSeccion}
          subtitulo="Hola soy un subtitulo"
          quiereMolestar={molestar}
        ></Titulo>
        <br />
        {/* <Titulo
          titulo={tituloDeLaSeccion}
          subtitulo="Hola soy el 3er subtitulo"
        ></Titulo>
        <br />
        <Titulo
          titulo={tituloDeLaSeccion}
          subtitulo="Hola soy el 4to subtitulo"
        ></Titulo> */}

        {/* aqui va a ir un contenedor con la tarjeta de todos los alumnos */}
      </main>
      {/* aqui va air un footer */}
    </>
  );
}
