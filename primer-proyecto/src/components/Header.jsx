import React from "react";
import "../header.css";
export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-bar_logo">
          <h1>Logo</h1>
        </div>
        <div className="nav-bar_buscador">
          <input type="text" placeholder="Buscar..." />
        </div>
        <div className="nav-bar_accesos">
          <button>
            <h2>User</h2>{" "}
          </button>
        </div>
      </nav>
    </header>
  );
}
