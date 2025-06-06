import React from "react";


const About = () => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-content">
        <h2>Sobre mí</h2>
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