import React from "react";

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "transparent",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="container text-center px-5"
        style={{
          background: "rgba(255,255,255,0.85)",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h2 className="mb-4">Contacto</h2>
        <p>
          Puedes escribirme a:{" "}
          <a href="mailto:carlosibanezaguayo@gmail.com">
            carlosibanezaguayo@gmail.com
          </a>
        </p>
        <p>
          Llamarme o enviarme un mensaje de texto a:
          <a href="tel:+34664510836"> +34664510836</a>
        </p>
      </div>
    </section>
  );
};

export default Contacto;