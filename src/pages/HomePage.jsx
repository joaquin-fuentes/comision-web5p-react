import Header from "../components/Header";
import Portada from "../components/home/portada/Portada";
import TarjetaAlumno from "../components/home/alumnos/TarjetaAlumno";
import { alumnos } from "../constants/alumnos.js";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  const tituloDeLaSeccion = "Listado de los mejores alumnos de RollingCode";

  return (
    <>
      <main>
        <Portada
          titulo={tituloDeLaSeccion}
          subTitulo="Hola soy un subtitulo"
        ></Portada>
        <br />
        <div className="contenedorTarjetas">
          {alumnos.map((alumno, indice) => {
            return <TarjetaAlumno key={indice} alumno={alumno}></TarjetaAlumno>;
          })}
        </div>
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
