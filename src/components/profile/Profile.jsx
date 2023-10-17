import React from "react";
import { fadeIn } from "../../utils/motionTrnsitions";
import { motion } from "framer-motion";
import "../../rutas//portafolio2/landing.css";
import "./profile.css";
import { plataformas, skills } from "./dataProfile";

const Profile = () => {
  return (
    <div style={{ padding: " 50px 0 50px 0" }} className="conteiner">
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div className="conteiner-title">
          <h1 className="title"> ¡Sobre mí!</h1>
        </div>
        <div className="conteiner-first">
          <div className="text-profile">
            <span>
              <p>
                Soy desarrollador Full Stack. Diseño interfaces interactivas,
                personalizadas y novedosas, y construyo bases sólidas en el
                backend.
              </p>

              <p>
                Mi experiencia como ingeniero químico me ha enseñado a adaptarme
                al ritmo de trabajo, a ser resiliente y a tener la capacidad de
                resolver problemas. Estas habilidades me han ayudado a mejorar,
                aprender y desarrollar cada proyecto.
              </p>
            </span>
          </div>
        </div>

        <div
          style={{ margin: "0px 0px 20px  0px" }}
          className="conteiner-second"
        >
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
                flexDirection: "row",
                gap: "20px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "400px",
                  gap: "8px",
                  justifyContent: "center",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                {plataformas.map((element, index) => {
                  return (
                    <img
                      style={{ width: "50px" }}
                      key={index}
                      src={element}
                      alt={`logo ${index}`}
                    />
                  );
                })}
              </div>
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
                      width: "400px",
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
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "8px",
                        justifyContent: "center",
                      }}
                    >
                      {element.logos.map((ele, index) => {
                        return (
                          <img
                            style={{
                              width: "60px",
                            }}
                            key={index}
                            src={ele}
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
      </motion.div>
    </div>
  );
};

export default Profile;
