import React, { useState } from "react";

export default function ListadoTareas() {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Envío de formulario");
    // guardar el dato ingresado en el input en una variable
    console.log(tarea);
    // agregar la tarea en el listado de tareas
    setListadoTareas([...listadoTareas, tarea]);
    setTarea("");
  }

  return (
    <>
      <h1>Bienvenido</h1>
      <h3>Ingresa tus tareas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setTarea(event.target.value)}
          value={tarea}
        />
        <button type="submit">Guardar Tarea</button>
      </form>
      <ul>
        {listadoTareas.map((tarea, indice) => {
          return <li key={indice}>{tarea}</li>;
        })}
      </ul>
    </>
  );
}
