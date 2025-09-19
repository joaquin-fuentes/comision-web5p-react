import { useState } from "react";
import Swal from "sweetalert2";

export default function Contador() {
  //   let array = useState();
  //   let numeroEstado = array[0];
  //   let setNumeroEstado = array[1];

  const [numero, setNumero] = useState(0);

  function aumentar() {
    if (numero >= 10) {
      Swal.fire({
        title: "ERROR",
        text: `No puede tener un stock mayor a 10`,
        icon: "error",
      });
    } else {
      setNumero(numero + 1);
    }
  }

  function decrementar() {
    if (numero <= 0) {
      Swal.fire({
        title: "ERROR",
        text: `No puede tener un stock menor a 0`,
        icon: "error",
      });
    } else {
      setNumero(numero - 1);
    }
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>CONTADOR</h1>
      <div>
        <button onClick={aumentar}>+1</button>
        <span>{numero}</span>
        <button onClick={decrementar}>-1</button>
        <button onClick={() => setNumero(0)}>RESETEAR</button>
      </div>
    </>
  );
}
