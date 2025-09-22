// En este componente deben actualizar rl diseño de la tabla usando clases de bootstrap

import FilaAlumno from "./FilaAlumno";


export default function TablaAlumnos({ alumnos }) {
  console.log(alumnos);
  return (
    <div class="table-responsive justify-content-center m-4">
      <table class="table table-bordered table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Pasatiempo</th>
            <th>Marca</th>
            <th>Película</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, indice) => {
            return <FilaAlumno alumno={alumno} key={indice}></FilaAlumno>;
          })}
        </tbody>
      </table>
    </div>
  );
}
