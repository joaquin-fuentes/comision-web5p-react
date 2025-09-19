// En este componente deben agregar boton para "Eliminar" y otro para "Editar", los 2 botones deben estar en una columna de "Acciones"
// Al hacr click sobre alguno de esos botones se debe ejectutar una funcion que solamente muestre un console.log indicando que se hizo click en ese boton

export default function FilaAlumno({ alumno }) {
  return (
    <tr>
      <td className="">{alumno.nombre}</td>
      <td className="">{alumno.pasatiempo}</td>
      <td className="">{alumno.marca}</td>
      <td className="">{alumno.pelicula}</td>
      <td>
        <button>Eliminar a {alumno.nombre}</button>
      </td>
    </tr>
  );
}
