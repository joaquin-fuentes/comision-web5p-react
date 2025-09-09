import React from "react";

export default function Ejemplo() {
  // lo que esta aqui es codigo de JS
  const saludo = "comision web5p";
  const productos = [
    "Laptop Gamer",
    "Smartphone 5G",
    "Auriculares Bluetooth",
    "Silla Ergonómica",
    "Monitor 27'' 4K",
    "Teclado Mecánico",
    "Mouse Inalámbrico",
    "Smartwatch Deportivo",
    "Mochila Antirrobo",
    "Cámara Fotográfica",
  ];

  // lo que viene despues del return es JSX
  return (
    <>
      <div className="contenedorSaludo">HOLA: {saludo}</div>
      <h1>Listado de productos</h1>
      <ul>
        {productos.map((producto) => {
          return <li>{producto}</li>;
        })}
      </ul>
    </>
  );
}
