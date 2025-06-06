import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Fondo = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.5 },
          links: { enable: true, color: "#000", opacity: 0.2 },
        },
        background: { color: "#f8f9fa" },
      }}
    />
  );
};

export default Fondo;