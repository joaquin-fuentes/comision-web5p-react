//  En este componente deben actualizar el diseño para que quede mas agradable, usando clases de bootstrap,
//  bootstrap ya esta instalado asi que solamente deben agregar los nombres de las clases donde corresponda
//  solamente actualizar diseño... La lógica de reenderizado condicional se debe mantener como está

import Swal from "sweetalert2";

export default function Header() {
  const usuarioAdministrador = false;
  let usuarioLogueado = false;

  function handleLogin() {
    usuarioLogueado = true;
    Swal.fire({
      title: "Bien hecho!",
      text: `Login exitoso`,
      icon: "success",
    });
    console.log(usuarioLogueado);
  }

  return (
    <header className="">
      <nav className="">
        <div className="">
          <h1>Logo</h1>
        </div>
        <div className="">
          <nav>
            <ul className="">
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
              {usuarioLogueado ? (
                <>
                  <li>
                    <a href="">Cerrar sesión</a>
                  </li>
                  <button>
                    <h2>User</h2>{" "}
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li>
                    <a href="">Registro</a>
                  </li>
                </>
              )}
              <button onClick={handleLogin} className="">
                Logueo
              </button>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}
