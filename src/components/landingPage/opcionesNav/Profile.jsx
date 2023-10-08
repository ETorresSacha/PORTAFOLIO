import React from "react";
import "./servicio.css";

const Profile = () => {
  const plataformas = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  ];
  const skills = [
    {
      tecnologia: "Front End",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      ],
    },
    {
      tecnologia: "Back End",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      ],
    },
    {
      tecnologia: "Base de datos",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      ],
    },
  ];
  return (
    <div className="conteiner-servicio">
      <div>
        <h1> ¡Sobre mi!</h1>
        <h4 className="h4-landing">
          Soy desarrollador web, en mi rol como Full Stack trabajé tanto en el
          Back-End como en el Front-End, utilizando una variedad de tecnologías,
          desde JavaScript, Python, ES6, CSS y HTML hasta React, Vite, Redux,
          Redux Toolkit, Node.Js y Express. También tengo experiencia con bases
          de datos como PostgreSQL, Mongoose, SQL Server y MySQL. Estas
          habilidades me permiten abordar proyectos de desarrollo web de manera
          integral y eficiente, desde la creación de la interfaz de usuario
          hasta la gestión de la base de datos.
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>skills</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "100%",
            justifyContent: "center",
            margin: "30px",
          }}
        >
          {plataformas.map((element, index) => {
            return (
              <img
                key={index}
                src={element}
                height="40"
                alt={`logo ${index}`}
              />
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {skills.map((element, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {element.tecnologia}
                </h1>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  {element.logos.map((ele, index) => {
                    return (
                      <img
                        style={{
                          display: "flex",
                        }}
                        key={index}
                        src={ele}
                        height="40"
                        alt={`logo ${index}`}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="conteiner-car-servicio"></div>
    </div>
  );
};

export default Profile;
