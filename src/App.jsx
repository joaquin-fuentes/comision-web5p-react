import Header from "./components/Header";
import Portada from "./components/home/portada/Portada";
import TablaAlumnos from "./components/admin/TablaAlumnos";
import TarjetaAlumno from "./components/home/alumnos/TarjetaAlumno";
import Contador from "./components/contador/Contador";
import ListadoEsculturas from "./components/esculturas/ListadoEsculturas";
import Swal from "sweetalert2";

export default function App() {
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
  function handleClickBuscar() {
    Swal.fire({
      title: "Bien hecho!",
      text: `Buscando alumno...`,
      icon: "success",
    });
  }
  function handleClickAgregar() {
    Swal.fire({
      title: "Bien hecho!",
      text: `El alumno se agregó, con exito.`,
      icon: "success",
    });
  }

  return (
    <>
      <Header></Header>
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
        <section>
          <h3 class="text-center">Gestion Alumnos</h3>
          <div class="d-flex flex-row justify-content-center">
            <form class="d-flex col-6 m-3" role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Buscar alumno"
              />
              <button
                class="btn btn-outline-primary"
                onClick={handleClickBuscar}
                type="submit"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=p3miLroKw4iR&format=png&color=000000"
                  alt="Buscar"
                  width="25dvh"
                />
              </button>
            </form>
            <button
              type="button"
              onClick={handleClickAgregar}
              class="btn btn-outline-success m-3"
            >
              Agregar alumno
            </button>
          </div>
          <TablaAlumnos alumnos={alumnos}></TablaAlumnos>
        </section>
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
