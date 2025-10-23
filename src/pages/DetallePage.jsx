import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnAlumnoPorId } from "../services/alumnos.service.js";

export default function DetallePage() {
  const [alumno, setAlumno] = useState({});
  // obtener el id del alumno que estoy buscando
  const { id } = useParams();
  // obtener el listado de alumnos
  useEffect(() => {
    const alumnoEncontrado = obtenerUnAlumnoPorId(id);
    setAlumno(alumnoEncontrado);
  }, []);

  // filtrar y obtener solamente el que yo estoy buscando
  return (
    <div>
      <h1>Nombre de alumno: {alumno?.nombre}</h1>{" "}
      <p>Pasatiempo: {alumno?.pasatiempo}</p>
      <p>Marca: {alumno?.marca}</p>
    </div>
  );
}
