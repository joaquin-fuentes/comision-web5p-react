import React, { useEffect, useState } from "react";
import "./listadotareas.css";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../../utils/localStorage.js";

export default function ListadoTareas() {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  useEffect(() => {
    const tareasDelLocalStorage = obtenerDelLocalStorage("tareasGuardadas");
    setListadoTareas(tareasDelLocalStorage);
  }, []);

  useEffect(() => {
    guardarEnLocalStorage("tareasGuardadas", listadoTareas);
  }, [listadoTareas]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Envío de formulario");
    // guardar el dato ingresado en el input en una variable
    // agregar la tarea en el listado de tareas
    setListadoTareas([...listadoTareas, tarea]);
    // guardar en localStorage
    setTarea("");
  }
  function handleDelete(tareaAEliminar) {
    console.log("CLICK EN ELIMINAR");
    console.log(tareaAEliminar);
    const confirmar = confirm("Estas seguro que quieres eliminar esta tarea?");
    if (confirmar) {
      const nuevoListadoTareas = listadoTareas.filter((tarea) => {
        return tarea != tareaAEliminar;
      });
      setListadoTareas(nuevoListadoTareas);
    }
  }

  return (
    <>
      <section className="list-task-content">
        <article className="list-task">
          <div className="list-task_cabecera">
            <img
              src="https://stremu.netlify.app/icons/fondo-de-papel-tapiz-artistico-borroso-y-colorido.jpg"
              alt=""
            />
            <h1>Bienvenido</h1>
            <h3>Ingresa tus tareas</h3>
          </div>

          <form className="list-task_form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese una tarea..."
              onChange={(event) => setTarea(event.target.value)}
              value={tarea}
            />
            <button className="form-button" type="submit">
              Guardar Tarea
            </button>
          </form>
          <div className="task-showing-content">
            {listadoTareas.map((tarea, indice) => {
              return (
                <div key={indice} className="task-showing">
                  <div className="task-showing_task">
                    <p>{tarea}</p>
                  </div>
                  <div className="task-showing_buttons">
                    <button onClick={() => handleDelete(tarea)}>❌</button>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
