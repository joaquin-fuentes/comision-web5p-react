import React from "react";
import Swal from "sweetalert2";

export default function FilaAlumno({ alumno }) {
  function handleClickEditar() {
    Swal.fire({
      title: "Bien hecho!",
      text: `El ${alumno.nombre} se editó`,
      icon: "success",
    });
  }
  function handleClickEliminar() {
    Swal.fire({
      title: "Bien hecho!",
      text: `El ${alumno.nombre} se eliminó`,
      icon: "success",
    });
  }
  return (
    <tr>
      <td className=""></td>
      <td className="">{alumno.nombre}</td>
      <td className="">{alumno.pasatiempo}</td>
      <td className="">{alumno.marca}</td>
      <td className="">{alumno.pelicula}</td>
      <td className="d-flex justify-content-around">
        <button
          type="button"
          onClick={handleClickEditar}
          className="btn btn-outline-secondary"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleClickEliminar}
          className="btn btn-outline-danger"
        >
          Eliminar a {alumno.nombre}
        </button>
      </td>
    </tr>
  );
}
