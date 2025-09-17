import Header from "./components/Header";
import Portada from "./components/Portada";
import TarjetaAlumno from "./components/TarjetaAlumno";

export default function App() {
  // lo que va aqui es Javascript
  const tituloDeLaSeccion = "Listado de los mejores alumnos de RollingCode";
  const alumnos = [
    {
      nombre: "Joaquin Fuentes",
      urlImagen: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg`,
      pasatiempo: "Pasear a firulais",
      marca: "Adidas",
      pelicula: "Titanic",
    },
    {
      nombre: "Facundo Diaz",
      urlImagen: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg`,
      pasatiempo: "Tirar los codigos prohibidos",
      marca: "Nike",
      pelicula: "Grinch",
    },
    {
      nombre: "Jose Salvi",
      urlImagen: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg`,
      pasatiempo: "Jugar Futbol 5",
      marca: "Adidas",
      pelicula: "Rápido y Furioso",
    },
    {
      nombre: "Franco Toledo",
      urlImagen: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg`,
      pasatiempo: "Andar en bici alrededor de todo el parque",
      marca: "Nike",
      pelicula: "El señor de los anillos",
    },
  ];

  return (
    <>
      <Header></Header>
      <main>
        <Portada
          titulo={tituloDeLaSeccion}
          subTitulo="Hola soy un subtitulo"
        ></Portada>
        <br />
        {/* aqui va a ir un contenedor con la tarjeta de todos los alumnos */}
        <div className="contenedorTarjetas">
          {alumnos.map((alumno, indice) => {
            return <TarjetaAlumno key={indice} alumno={alumno}></TarjetaAlumno>;
          })}
        </div>
        {/* Devolver una tabla de alumnos */}
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Pasatiempo</th>
                <th>Marca</th>
                <th>Pelicula</th>
              </tr>
            </thead>
            <tbody>
              {/* una fila de un alumno */}
              <tr>
                <td>Joaquin</td>
                <td>Pasear a firulais</td>
                <td>Adidas</td>
                <td>Titanic</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
      </main>
      {/* aqui va air un footer */}
    </>
  );
}
