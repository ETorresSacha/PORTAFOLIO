import React, { useState, useEffect } from "react";
import erik from "./erik.pdf";

const Cv = () => {
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
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
