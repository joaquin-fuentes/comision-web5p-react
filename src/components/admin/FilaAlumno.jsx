import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { eliminarAlumno } from "../../services/alumnos.service.js";

export default function FilaAlumno({
  alumno,
  setAlumnoEditar,
  setShowEditar,
  fetchAlumnos,
}) {
  // Hook de navegación para cambiar de página
  const navigate = useNavigate();

  function handleClickEditar() {
    setAlumnoEditar(alumno); // asignamos el alumno a editar
    setShowEditar(true); // abrimos el modal
  }

  function handleClickEliminar() {
    const confirmar = confirm("Seguro que desea eliminar al alumno?");
    if (!confirmar) return;
    eliminarAlumno("alumnos", alumno.id);
    Swal.fire({
      title: "¡Alumno eliminado!",
      text: `${alumno.nombre} fue eliminado correctamente`,
      icon: "success",
    });
    fetchAlumnos();
    // Podrías actualizar el estado en AdminPage llamando a obtenerAlumnos de nuevo
  }

  // Función para navegar a la página de detalle del alumno
  function handleClickVerDetalle() {
    // Navegamos a la página de detalle pasando el ID como parámetro
    navigate(`/admin/alumno/${alumno.id}`);
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
          onClick={handleClickVerDetalle}
          className="btn btn-outline-info"
        >
          Ver detalle
        </button>
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
