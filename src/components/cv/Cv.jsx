import React, { useEffect } from "react";
import erik from "./erik.pdf";

const Cv = () => {
  const descargar = () => {
    // const link = document.createElement("a");
    // link.href = resume;
    // link.download = "MagaliPereyra.pdf";
    // link.click();
    document.getElementById("enlaceDescargarPdf").click();
    window.close();
    console.log("hola");
  };
  // useEffect(() => {
  //   if (typeof window.orientation !== "undefined") {
  //     document.getElementById("enlaceDescargarPdf").click();
  //     window.close();
  //     console.log("hola");
  //   }
  // }, [window.orientation]);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <a
        href={erik}
        id="enlaceDescargarPdf"
        download="ErikTorres.pdf"
        onClick={descargar}
      >
        descarga
      </a>
      {/* <a href={erik} download="ErikTorres.pdf" onClick={descargar}>
          <TfiSave />
        </a> */}
      {/* <object data={erik} type="application/pdf" width="100%" height="100%">
        <br />
        
      </object> */}
    </div>
  );
};

export default Cv;
