// obtener todos los alumnos
export function obtenerAlumnos(key) {
  const datos = localStorage.getItem(key);
  return datos ? JSON.parse(datos) : [];
}
// guardar alumnos

// eliminar alumno

// editar alumno
