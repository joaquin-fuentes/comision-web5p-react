import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // esto asegura que el botón quede al final
        alignItems: "center",
        border: "2px solid #ccc",
        borderRadius: "15px",
        width: "280px",
        minHeight: "420px", // altura uniforme
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        margin: "20px auto",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0px 8px 18px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      {/* Contenido superior */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#333", marginBottom: "10px", fontSize: "1.4rem" }}>
          {nombre}
        </h2>
        <img
          src={urlImagen}
          alt={nombre}
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "3px solid #555",
          }}
        />
        <div style={{ textAlign: "left", fontSize: "0.95rem", lineHeight: "1.4" }}>
          <p style={{ margin: "5px 0" }}>
            <strong>Pasatiempo:</strong> {pasatiempo}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Marca favorita:</strong> {marca}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Película favorita:</strong> {pelicula}
          </p>
        </div>
      </div>

      {/* Botón inferior fijo */}
      <div style={{ marginTop: "auto", paddingTop: "10px" }}>
        <Button onClick={handleClick} variant="warning">
          Agregar a favoritos
        </Button>
      </div>
    </div>
  );
};

export default TarjetaAlumno;
