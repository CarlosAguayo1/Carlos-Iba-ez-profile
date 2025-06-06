import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Fondo from "./components/Fondo";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Fondo />
       <Navbar />
        <Header />
        <About />
        <Experiencia />
        <Proyectos />
        <Contacto />
      <Footer />
      </>
  );
}

export default App;
