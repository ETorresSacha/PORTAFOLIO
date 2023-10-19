import React from "react";
import erik from "./erik.pdf";

const Cv = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={erik}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
};

export default Cv;
