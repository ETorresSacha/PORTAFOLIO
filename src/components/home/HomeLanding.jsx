import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Cover from "../cover/Cover";

const HomeLanding = () => {
  return (
    <div className="conteiner-text">
      <Cover />
      <h1 className="title-landing">¡Hola! Soy Erik</h1>
      <h3 className="text-landing">Desarrollador web Full Stack</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          color: "white",
        }}
      >
        <GitHubIcon sx={{ width: "30px", height: "30px" }} />
        <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
      </div>
    </div>
  );
};

export default HomeLanding;
