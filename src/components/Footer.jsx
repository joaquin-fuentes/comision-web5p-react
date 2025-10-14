import Swal from "sweetalert2";
import "./footer.css";

export default function Footer() {
  function hundleRedes(nombreRed) {
    Swal.fire({
      title: "Bien hecho!",
      text: `Cliqueaste en ${nombreRed}`,
      icon: "success",
      confirmButtonColor: "#dc3545",
    });
  }

  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* LOGO */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <img
              src="https://imgs.search.brave.com/J1Pm_mAZs_FpXtGEbIc81iHCNGMPSHSJXm13LU1clfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzExLzIvcHJvdGVj/LWluZm9ybWF0aWNh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTExMzAz/OC5wbmc"
              alt="Logo"
              className="footer-logo"
            />
          </div>

          {/* LINKS */}
          <div className="col-12 col-md-3 text-center">
            <h5 className="footer-title">Navegación</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Categorías</a></li>
              <li><a href="#">Medios de pago</a></li>
              <li><a href="#">Galería</a></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="col-12 col-md-3 text-center">
            <h5 className="footer-title">Contáctanos</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="tel:+5438132545621">+54 9 381 325-45621</a></li>
              <li><a href="mailto:usuario123@gmail.com">usuario123@gmail.com</a></li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div className="col-12 col-md-3 text-center">
            <h5 className="footer-title">Síguenos</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" onClick={() => hundleRedes("Facebook")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a href="#" onClick={() => hundleRedes("Instagram")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a href="#" onClick={() => hundleRedes("X")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                  alt="X"
                  className="social-icon"
                />
              </a>
              <a href="#" onClick={() => hundleRedes("Youtube")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                  alt="Youtube"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-2 border-secondary" />
        <p className="text-center text-white small mb-0">
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
