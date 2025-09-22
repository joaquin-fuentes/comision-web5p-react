// En este componente deben agregar boton para "Eliminar" y otro para "Editar", los 2 botones deben estar en una columna de "Acciones"
// Al hacr click sobre alguno de esos botones se debe ejectutar una funcion que solamente muestre un console.log indicando que se hizo click en ese boton
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
      <td className="">{}</td>
      <td className="">{alumno.nombre}</td>
      <td className="">{alumno.pasatiempo}</td>
      <td className="">{alumno.marca}</td>
      <td className="">{alumno.pelicula}</td>
      <td class="d-flex justify-content-around">
        <button
          type="button"
          onClick={handleClickEditar}
          class="btn btn-outline-secondary"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleClickEliminar}
          class="btn btn-outline-danger"
        >
          Eliminar a {alumno.nombre}
        </button>
      </td>
    </tr>
  );
}
