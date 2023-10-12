import React from "react";
import "./introduction.css";

const Introduccion = () => {
  return (
    <div className="conteiner-introduccion">
      <div style={{ border: "solid red" }} className="conteiner-perfil">
        <h3 className="title-introduction">¡Hola! Soy Erik</h3>
        <h1 className="subtitle-introduction">Desarrollador Full Stack</h1>
        <h4 className="text-introduction">
          Optimizo el rendimiento y proporciono soluciones personalizados que se
          adaptan a tus necesidades
        </h4>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            color: "white",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Introduccion;
