import React from "react";

const Experiencia = () => {
  return (
    <section
      id="experiencia"
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
        <h2 className="mb-4">Experiencia</h2>
        <p>Texto sobre tu experiencia profesional aquí.</p>
      </div>
    </section>
  );
};

export default Experiencia;