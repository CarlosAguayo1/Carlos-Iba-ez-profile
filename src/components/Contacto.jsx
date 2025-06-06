import React from "react";

const Contacto = () => {
  return (
    <section id="contacto" className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-white">
      <div className="container">
        <h2 className="mb-4">Contacto</h2>
        <p>Puedes escribirme a: <a href="mailto:tuemail@correo.com">carlosibanezaguayo@gmail.com</a></p>
        <p>Llamarme o enviarme un mensaje de texto a: <a href="tlf">+34 664510836</a></p>
      </div>
    </section>
  );
};

export default Contacto;