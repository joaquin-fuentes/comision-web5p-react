import React, { useState } from "react";
import Swal from "sweetalert2";
import { alumnos } from "../constants/alumnos.js";
import TablaAlumnos from "../components/admin/TablaAlumnos.jsx";

export default function AdminPage() {
  const [nombreBuscado, setNombreBuscado] = useState("");
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
  const alumnosFiltrados = alumnos.filter((alumno) => {
    return alumno.nombre.toLowerCase().includes(nombreBuscado.toLowerCase());
  });

  return (
    <section>
      <h3 className="text-center">Gestion Alumnos</h3>
      <div className="d-flex flex-row justify-content-center">
        <form className="d-flex col-6 m-3" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar alumno"
            value={nombreBuscado}
            onChange={(event) => setNombreBuscado(event.target.value)}
          />
          <button
            className="btn btn-outline-primary"
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
          className="btn btn-outline-success m-3"
        >
          Agregar alumno
        </button>
      </div>
      <TablaAlumnos alumnos={alumnosFiltrados}></TablaAlumnos>
    </section>
  );
}
