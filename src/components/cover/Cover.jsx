import { loadFull } from "tsparticles";
import { optionsParticles } from "./particlesOptions";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Introduccion from "../protafolio1/introduccion/Introduccion";

const Cover = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div style={{ border: "solid red" }}>
      <Particles
        className="absolute w-full translate-z-1 border-amber-700"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
      {/* <Introduccion /> */}
    </div>
  );
};

export default Cover;
