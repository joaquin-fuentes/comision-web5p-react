import Swal from "sweetalert2";
import "../header.css";

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
    <header>
      <nav className="nav-bar">
        <div className="nav-bar_logo">
          <h1>Logo</h1>
        </div>
        <div className="nav-bar_accesos">
          <nav>
            <ul className="contenedorItemsEnlaces">
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
              <button onClick={handleLogin} className="btnTarjeta">
                Logueo
              </button>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}
