import React from "react";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Contador React",
      descripcion: "Aplicación de contador automático con botón de incremento, usando React y Lucide.",
      enlace: "https://github.com/4GeeksAcademy/contadorr"
    },
    {
      titulo: "Generador de Cartas",
      descripcion: "Proyecto de cartas aleatorias hecho en JavaScript, CSS, HTML utilizando Bootstrap de framework y sacando iconos de fontawesome.",
      enlace: "https://github.com/4GeeksAcademy/cartass"
    },
    {
      titulo: "Generador de Excusas",
      descripcion: "Proyecto de generador de excusas hecho en JavaScript puro.",
      enlace: "https://github.com/4GeeksAcademy/generadordeexcusas1"
    },
    {
      titulo: "Tarjeta de perfil",
      descripcion: "Proyecto de Tarjeta de perfil hecho en JavaScript, HTML y CSS.",
      enlace: "https://github.com/4GeeksAcademy/profile-card12"
    }
  ];

  return (
    <section id="proyectos" className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-white">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{proyecto.titulo}</h5>
                  <p className="card-text">{proyecto.descripcion}</p>
                  <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
