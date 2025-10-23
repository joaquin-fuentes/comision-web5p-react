import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerAlumnoPorId } from "../services/alumnos.service.js";

export default function AlumnoDetallePage() {
  // Hook para obtener los parámetros de la URL (en este caso el ID del alumno)
  const { id } = useParams();

  // Hook para navegación (para volver atrás)
  const navigate = useNavigate();

  // Estado para almacenar los datos del alumno
  const [alumno, setAlumno] = useState(null);

  // Estado para mostrar si está cargando
  const [cargando, setCargando] = useState(true);

  // useEffect se ejecuta cuando el componente se monta o cuando cambia el ID
  useEffect(() => {
    // Función para cargar los datos del alumno
    const cargarAlumno = () => {
      try {
        // Obtenemos el alumno por su ID usando nuestro servicio
        const alumnoEncontrado = obtenerAlumnoPorId("alumnos", id);

        if (alumnoEncontrado) {
          // Si encontramos el alumno, lo guardamos en el estado
          setAlumno(alumnoEncontrado);
        } else {
          // Si no encontramos el alumno, mostramos un mensaje de error
          console.error("Alumno no encontrado");
        }
      } catch (error) {
        // Si hay algún error, lo mostramos en consola
        console.error("Error al cargar el alumno:", error);
      } finally {
        // Independientemente del resultado, marcamos que ya terminó la carga
        setCargando(false);
      }
    };

    // Ejecutamos la función de carga
    cargarAlumno();
  }, [id]); // Dependencia: se ejecuta cuando cambia el ID

  // Función para volver a la página anterior
  const handleVolver = () => {
    navigate("/admin");
  };

  // Si está cargando, mostramos un mensaje de carga
  if (cargando) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-3">Cargando información del alumno...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si no se encontró el alumno, mostramos un mensaje de error
  if (!alumno) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-danger text-center">
              <h4>Alumno no encontrado</h4>
              <p>El alumno que buscas no existe o ha sido eliminado.</p>
              <button className="btn btn-primary" onClick={handleVolver}>
                Volver al Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si todo está bien, mostramos la información del alumno
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Botón para volver */}
          <div className="mb-4">
            <button className="btn btn-secondary" onClick={handleVolver}>
              ← Volver al Admin
            </button>
          </div>

          {/* Tarjeta con la información del alumno */}
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">
                <i className="fas fa-user me-2"></i>
                Detalle del Alumno
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                {/* Información básica */}
                <div className="col-md-6">
                  <h5 className="text-primary">Información Personal</h5>
                  <hr />

                  <div className="mb-3">
                    <strong>ID:</strong>
                    <p className="text-muted">{alumno.id}</p>
                  </div>

                  <div className="mb-3">
                    <strong>Nombre:</strong>
                    <p className="text-muted">{alumno.nombre}</p>
                  </div>

                  <div className="mb-3">
                    <strong>Pasatiempo:</strong>
                    <p className="text-muted">{alumno.pasatiempo}</p>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="col-md-6">
                  <h5 className="text-primary">Preferencias</h5>
                  <hr />

                  <div className="mb-3">
                    <strong>Marca Favorita:</strong>
                    <p className="text-muted">{alumno.marca}</p>
                  </div>

                  <div className="mb-3">
                    <strong>Película Favorita:</strong>
                    <p className="text-muted">{alumno.pelicula}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
