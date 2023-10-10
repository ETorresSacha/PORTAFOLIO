import React from "react";
import "./profile.css";

const Profile = () => {
  const plataformas = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
    <div style={{ gap: "12px" }} className="conteiner">
      <div className="conteiner-title">
        <h1 className="title"> ¡Sobre mí!</h1>
      </div>
      <div className="conteiner-first">
        <div className="text-profile">
          <span
            style={{
              padding: "15px 0 0px 0",
            }}
          >
            <p>
              Soy desarrollador web Full Stack; mi prioridad es la interacción y
              la buena experiencia del usuario.
            </p>
            <p>
              Tengo un background en Ingeniería Química, lo que me ha enseñado a
              adaptarme al ritmo del trabajo, ser resiliente y la capacidad de
              resolución de problemas. Estas habilidades me han ayudado aprender
              y mejorar en este mundo de la tecnología.
            </p>
          </span>
        </div>
      </div>

      <div style={{ margin: "0px 0px 20px  0px" }} className="conteiner-second">
        <div className="skill">
          <h1
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "35px",
            }}
          >
            SKILLS
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
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
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
              gap: "27px",
            }}
          >
            {skills.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                    justifyContent: "space-evenly",
                    border: "solid white",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <h1
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "25px",
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
    </div>
  );
};

export default Profile;
