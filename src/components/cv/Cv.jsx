import React, { useEffect } from "react";
import erik from "./erik.pdf";

const Cv = () => {
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  }, [window.orientation]);

  return (
    <div className="absolute w-full h-full">
      <object data={erik} type="application/pdf" className="w-full h-full">
        <a href={erik} id="enlaceDescargarPdf" download="ErikTorres.pdf"></a>
      </object>
    </div>
  );
};

export default Cv;
