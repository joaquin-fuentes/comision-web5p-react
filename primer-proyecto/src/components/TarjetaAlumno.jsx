import React from "react";
import Swal from "sweetalert2";

const TarjetaAlumno = ({ alumno }) => {
  const { nombre, urlImagen, pasatiempo, marca, pelicula } = alumno;

  function handleClick() {
    Swal.fire({
      title: "Bien hecho!",
      text: `El alumno ${nombre} fue agregado a favoritos`,
      icon: "success",
    });
  }

  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "15px",
        width: "300px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        margin: "20px auto",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "10px" }}>{nombre}</h2>
      <img
        src={urlImagen}
        alt={nombre}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px",
          border: "3px solid #555",
        }}
      />
      <p style={{ margin: "5px 0" }}>
        <strong>Pasatiempo:</strong> {pasatiempo}
      </p>
      <p style={{ margin: "5px 0" }}>
        <strong>Marca favorita:</strong> {marca}
      </p>
      <p style={{ margin: "5px 0" }}>
        <strong>Película favorita:</strong> {pelicula}
      </p>
      <button onClick={handleClick} className="btnTarjeta">
        Agregar a favoritos
      </button>
    </div>
  );
};

export default TarjetaAlumno;
