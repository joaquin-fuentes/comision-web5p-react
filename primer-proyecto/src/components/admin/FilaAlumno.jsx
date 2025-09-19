import React from "react";

export default function FilaAlumno({ alumno }) {
  return (
    <tr
      style={{
        backgroundColor: "#fff",
        transition: "background 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
    >
      <td style={{ padding: "12px 16px", border: "1px solid #a49d9dff" }}>
        {alumno.nombre}
      </td>
      <td style={{ padding: "12px 16px", border: "1px solid #a49d9dff" }}>
        {alumno.pasatiempo}
      </td>
      <td style={{ padding: "12px 16px", border: "1px solid #a49d9dff" }}>
        {alumno.marca}
      </td>
      <td style={{ padding: "12px 16px", border: "1px solid #a49d9dff" }}>
        {alumno.pelicula}
      </td>
      <td>
        <button>Eliminar a {alumno.nombre}</button>
      </td>
    </tr>
  );
}
