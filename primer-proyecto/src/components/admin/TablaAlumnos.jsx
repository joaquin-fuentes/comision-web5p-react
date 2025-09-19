// En este componente deben actualizar rl diseño de la tabla usando clases de bootstrap


import FilaAlumno from "./FilaAlumno";

export default function TablaAlumnos({ alumnos }) {
  console.log(alumnos);
  return (
    <div>
      <table>
        <thead>
          <tr>
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
