import { useEffect, useState } from "react";

function DemoComponent() {
  useEffect(() => {
    console.log(":marca_de_verificación_blanca: Montado");
    return () => {
      console.log(":escoba: Desmontado");
    };
  }, []);
  return <div>Soy el componente Demo</div>;
}

export default function EjemplosDesmontaje() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Ocultar" : "Mostrar"} componente
      </button>
      {show && <DemoComponent />}
    </div>
  );
}
