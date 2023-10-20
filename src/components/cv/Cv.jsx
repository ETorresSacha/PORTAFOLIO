import React, { useEffect } from "react";
import erik from "./erik.pdf";

const Cv = () => {
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  }, []);
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object data={erik} type="application/pdf" width="100%" height="100%">
        <br />
        <a href={erik} id="enlaceDescargarPdf" download={erik}></a>
      </object>
    </div>
  );
};

export default Cv;
