import Header from "./components/Header";
import Portada from "./components/home/portada/Portada";
import Footer from "./components/footer";
import TablaAlumnos from "./components/admin/TablaAlumnos";
import TarjetaAlumno from "./components/home/alumnos/TarjetaAlumno";
import Contador from "./components/contador/Contador";
import ListadoEsculturas from "./components/esculturas/ListadoEsculturas";

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
    {
      nombre: "Sofia",
      urlImagen: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg`,
      pasatiempo: "Programar",
      marca: "Adidas",
      pelicula: "El señor de los anillos",
    },
  ];

  return (
    <>
      <Header></Header>
      <main>
        {/* <ListadoEsculturas></ListadoEsculturas> */}
        {/* <Contador></Contador> */}
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
        {/* aqui en esta seccion deben agregar titulo del a seccion, boton para agregar nuevo alumno y un input de búsqueda,
        y decien despues de eso en la linea siguiente se llama al componente TablaAlumnos */}
        <section>
          <TablaAlumnos alumnos={alumnos}></TablaAlumnos>
        </section>
        <br />
        <br />
        <br />
      </main>
      <Footer></Footer>
    </>
  );
}
