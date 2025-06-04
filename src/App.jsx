import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />

      <header className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light">
        <h1 className="display-4">Hola, soy Carlos Ibáñez</h1>
        <p className="lead">Bienvenido a mi portfolio profesional.</p>
      </header>

 <div style={{ height: "100vh" }}></div>

      <section id="sobre-mi" className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-white">
  <div className="container px-5">
    <h2 className="mb-4">Sobre mí</h2>
    <p className="lead">
      Soy un profesional con formación en <strong>finanzas</strong>, <strong>marketing</strong> y <strong>tecnología</strong>.
      Me apasiona combinar visión estratégica y herramientas digitales para aportar soluciones innovadoras
      y eficientes. Me adapto fácilmente a entornos multiculturales y afronto los retos con enfoque analítico y humano.
    </p>
  </div>
</section>
    </>
  );
}

export default App;
