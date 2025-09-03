import React from "react";
import Header from "./Header";

export default function App() {
  return (
    // crear un componente header
    <>
      {/* <Header></Header> */}

      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Sobre nosotros</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
