import React from "react";

const About = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center"
      id="sobre-mi"
      style={{
        background: "transparent", // Asegura que no hay fondo sólido
        position: "relative",
        zIndex: 1, // Asegura que el contenido esté sobre el fondo de partículas
      }}
    >
      <div
        className="container text-center px-5"
        style={{
          background: "rgba(255,255,255,0.85)", // Fondo blanco semitransparente (opcional)
          borderRadius: "16px", // Bordes redondeados (opcional)
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", // Sombra suave (opcional)
        }}
      >
        <h2 className="mb-4">Sobre mí</h2>
        <p>
          Soy Carlos Ibáñez, profesional multidisciplinar con formación en finanzas, marketing y tecnología. Me apasiona combinar visión estratégica con herramientas digitales para aportar soluciones innovadoras y eficientes.
        </p>
        <div className="buttons">
          <a href="/cv%20completo.pdf" download className="btn">
            Descargar CV
          </a>
          <a
            href="https://www.linkedin.com/in/tu-enlace-aqui"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;