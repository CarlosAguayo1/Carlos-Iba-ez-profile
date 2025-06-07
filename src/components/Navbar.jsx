import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "rgba(33,37,41,0.85)", // Semitransparente, igual que bg-dark pero con opacidad
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        zIndex: 2, // Asegura que esté por encima del fondo de partículas
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Carlos Ibáñez</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experiencia">Experiencia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;