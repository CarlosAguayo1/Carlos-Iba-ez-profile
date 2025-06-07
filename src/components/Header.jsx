import React from "react";

const Header = () => (
  <header className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-white pt-5 mt-5">
    <img src="https://fv5-3.files.fm/thumb_show.php?i=vtcvgvt893&view&v=1&PHPSESSID=009c178d1c679a2e3e31f59d7cda0d7d5f820fc4" alt="Foto de perfil" className="rounded-circle mb-3" />
    <h1 className="display-4">Hola, soy Carlos Ibáñez</h1>
    <p className="lead">Bienvenido a mi portfolio profesional.</p>
    <div className="d-flex gap-2 mt-3">
      <a href="https://x.com/CarlosAguayo96" target="_blank" className="btn btn-outline-info"> X </a>
      <a href="https://www.linkedin.com/in/carlos-iba%C3%B1ez/" target="_blank" className="btn btn-outline-primary">LinkedIn</a>
    </div>
  </header>
);

export default Header;