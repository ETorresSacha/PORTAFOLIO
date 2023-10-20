import React, { useState, useEffect } from "react";
import erik from "./erik.pdf";

const Cv = () => {
  // const descargar = () => {
  //   document.getElementById("enlaceDescargarPdf").click();
  //   window.close();
  //   console.log("hola");
  // };

  // const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(orientation: portrait)");

  //   const handleOrientationChange = (event) => {
  //     setIsPortrait(event.matches);
  //   };

  //   mediaQuery.addListener(handleOrientationChange);

  //   return () => {
  //     mediaQuery.removeListener(handleOrientationChange);
  //   };
  // }, []);

  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      // window.close();
      // console.log("hola");
    }
  }, [window.orientation]);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object data={erik} type="application/pdf" width="100%" height="100%">
        <a
          href={erik}
          id="enlaceDescargarPdf"
          download="ErikTorres.pdf"
          onClick={descargar}
        ></a>
      </object>
    </div>
  );
};

export default Cv;
