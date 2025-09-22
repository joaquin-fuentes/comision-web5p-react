//  En este componente deben actualizar el diseño para que quede mas agradable, usando clases de bootstrap,
//  bootstrap ya esta instalado asi que solamente deben agregar los nombres de las clases donde corresponda
//  solamente actualizar diseño... La lógica de reenderizado condicional se debe mantener como está

import Swal from "sweetalert2";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const usuarioAdministrador = true;
  let usuarioLogueado = true;

  function handleLogin() {
    usuarioLogueado = true;
    Swal.fire({
      title: "Bien hecho!",
      text: `Login exitoso`,
      icon: "success",
    });
    console.log(usuarioLogueado);
  }

  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrir = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="d-flex m-auto position-sticky top-0">
      <nav className="navbar d-flex">
        <div className="navbar_logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar_menu d-flex">
          <button className="navbar_menu-btn" onClick={abrir}>
            <img
              src="https://stremu.netlify.app/icons/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </button>
        </div>
      </nav>
      <nav className={menuAbierto ? "mostrar" : "ocultar"}>
        <ul className="navbar_menu_links list-unstyled d-flex">
          <li>
            {" "}
            <a href="">Inicio</a>
          </li>
          <li>
            {" "}
            <a href="">Contacto</a>
          </li>

          {/* solo puede ver un usuario administrador */}
          {usuarioAdministrador ? (
            <li>
              {" "}
              <a href="">Admin</a>
            </li>
          ) : (
            <></>
          )}

          <ul className="navbar_menu_btn-container list-unstyled d-flex">
            {usuarioLogueado ? (
              <>
                <li>
                  <button className="navbar_menu_btn-logout" href="">
                    Cerrar sesión
                  </button>
                </li>
                <li>
                  <button className="navbar_menu_btn-user d-flex justify-content-center align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/23.jpg"
                      alt=""
                    />
                    {""}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button className="navbar_menu_btn-login" href="">
                    Login
                  </button>
                </li>
                <li>
                  <button className="navbar_menu_btn-register" href="">
                    Registro
                  </button>
                </li>
              </>
            )}
            <button className="d-none" onClick={handleLogin}>
              Logueo
            </button>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
