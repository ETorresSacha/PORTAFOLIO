import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../../rutas//portafolio2/landingPage/landing.css";
import { proyectos } from "./dataProjects";
import { fadeIn } from "../../utils/motionTrnsitions";
import { motion } from "framer-motion";

const Projects = () => {
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
          <h1 className="title">Proyectos</h1>
        </div>

        <div className="conteiner-first">
          <div className="conteiner-card card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="../../../../image/clothes.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px 0px 0px 0px",
                  }}
                  alt="production"
                />
              </div>
              <div
                className="col-md-8"
                style={{
                  padding: "10px",
                  border: "solid transparent",
                  color: "white",
                }}
              >
                <div>
                  <h5
                    style={{
                      margin: "2px 0 10px auto",
                      fontSize: "20px",
                      color: "aqua",
                      fontFamily: " Georgia, Times, 'Times New Roman', serif",
                    }}
                  >
                    ONLINE STORE
                  </h5>
                  <p>
                    Ecommerce, una tienda virtual donde puedes encontrar las
                    mejores prendas que estan de moda y a los mejores precios.
                  </p>
                  <div className="icon-link-project">
                    <a
                      href="https://github.com/ETorresSacha/STORE-ONLINE-FRONT"
                      target="_blank"
                      rel="noreferrer"
                      className="icon"
                    >
                      <GitHubIcon
                        style={{
                          color: "black",
                          borderRadius: "50% ",
                          background: "white",
                        }}
                      />
                    </a>

                    <a href="" target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Ver la página
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "35px",
                  background: "red",
                  backdroFilter: "blur(10px)",
                  borderRadius: "0px 0px 10px 10px",
                  textAlign: "center",
                  color: "white",
                  padding: " 6px 0 0 0",
                  fontFamily: "Lucida Sans', 'Lucida Sans Regular",
                }}
              >
                <h4 style={{ margin: "2px" }}>En desarrollo</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="conteiner-second">
          {proyectos.map((element) => {
            return (
              <div key={element.id} className="conteiner-card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={element.video}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px 0px 0px 10px",
                      }}
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-8 text-slate-50"
                    style={{ padding: "10px", border: "solid transparent" }}
                  >
                    <div className="card-body">
                      <h5
                        style={{
                          margin: "2px 0 10px auto",
                          color: "aqua",
                          fontSize: "20px",
                          fontFamily:
                            " Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        {element.title}
                      </h5>
                      <p style={{ color: "white" }}>{element.description}</p>
                      <p className="icon-link-project">
                        <a
                          href={element.links.gitHub}
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <GitHubIcon
                            style={{
                              color: "black",
                              borderRadius: "50% ",
                              background: "white",
                            }}
                          />
                        </a>

                        <a
                          href={element.links.youtube}
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <YouTubeIcon
                            style={{
                              color: "red",
                              width: "auto",
                              background: "white",
                              borderRadius: "50% ",
                              margin: "5px",
                            }}
                          />
                        </a>
                        <a
                          href={element.links.depoly}
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                            }}
                          >
                            Ver la página
                          </button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
