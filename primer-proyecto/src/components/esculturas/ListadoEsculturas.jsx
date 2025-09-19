import { useState } from "react";
import { sculptureList } from "../../db/data";
import Swal from "sweetalert2";

export default function ListadoEsculturas() {
  const [indice, setIndice] = useState(0);

  const { alt, artist, description, url, name } = sculptureList[indice];

  function handleNext() {
    if (indice < sculptureList.length - 1) {
      setIndice(indice + 1);
    } else {
      Swal.fire({
        title: "ERROR",
        text: `No puede pasar de  ${sculptureList.length} elementos`,
        icon: "error",
      });
    }
  }
  function handlePrev() {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      Swal.fire({
        title: "ERROR",
        text: `No puede retroceder`,
        icon: "error",
      });
    }
  }

  return (
    <div style={{ padding: "50px" }}>
      <button
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#fff",
          //   backgroundColor: indice === 0 ? "#6b717aff" : "#0d6efd",
          backgroundColor: "#0d6efd",
          border: "1px solid #0d6efd",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
        }}
        onClick={handlePrev}
        // disabled={indice === 0}
      >
        Anterior
      </button>
      <button
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: 500,
          color: "#fff",
          //   backgroundColor:
          //     indice === sculptureList.length - 1 ? "#737c8bff" : "#0d6efd",
          backgroundColor: "#0d6efd",
          border: "1px solid #0d6efd",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={handleNext}
        // disabled={indice === sculptureList.length - 1}
      >
        Siguiente
      </button>

      <h2>
        {name} <i>{artist}</i>
      </h2>
      <p>
        ({indice + 1} de {sculptureList.length})
      </p>
      <img src={url} alt={alt} />
      <p>{description}</p>
    </div>
  );
}
