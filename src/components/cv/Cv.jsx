import React, { useEffect } from "react";
import erik from "./erik.pdf";

const Cv = () => {
  const descargar = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MagaliPereyra.pdf";
    link.click();
  };
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  }, [window.orientation]);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object data={erik} type="application/pdf" width="100%" height="100%">
        <br />
        <a href={erik} id="enlaceDescargarPdf" download="ErikTorres.pdf"></a>
      </object>
    </div>
  );
};

export default Cv;
