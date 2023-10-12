import { loadFull } from "tsparticles";
import { optionsParticles } from "./particlesOptions";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Cover = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      className="absolute w-full translate-z-1 border-amber-700"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={optionsParticles}
    />
  );
};

export default Cover;
