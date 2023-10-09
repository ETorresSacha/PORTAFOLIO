import React from "react";
import "./profile.css";

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
    <div className="conteiner-profile">
      <div className="text-profile">
        <h1> ¡Sobre mí!</h1>
        <h4>
          <p>
            Soy desarrollador web, como Full Stack; mi prioridad es la
            interacción y la buena experiencia del usuario.
          </p>
          <p>
            Tengo un background en Ingeniería Química, lo que me ha enseñado a
            adaptarme al ritmo del trabajo, ser resiliente y la capacidad de
            resolución de problemas. Estas habilidades me han ayudado a mejorar
            como programador.
          </p>
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
    </div>
  );
};

export default Profile;
