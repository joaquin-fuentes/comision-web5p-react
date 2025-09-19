import React from "react";
import FilaAlumno from "./FilaAlumno";

export default function TablaAlumnos({ alumnos }) {
  console.log(alumnos);
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "50px",
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          minWidth: "600px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Nombre
            </th>
            <th
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Pasatiempo
            </th>
            <th
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Marca
            </th>
            <th
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Película
            </th>
            <th
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Acciones
            </th>
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
