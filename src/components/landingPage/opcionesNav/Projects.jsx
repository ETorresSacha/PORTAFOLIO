import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../landing.css";

const Projects = () => {
  const proyectos = [
    {
      id: "6521f3b6f41c57ebd5b01794",
      title: "FOOD",
      description:
        "Food es una página web en donde encontrarás las mejores recetas del mundo; también tienes la posibilidad de crear tu propia receta y compartirlo con el mundo.",
      video: "../../../../image/iconos-vision.jpg",
      links: {
        depoly: "https://food-pi.up.railway.app/",
        youtube: "https://www.youtube.com/watch?v=hb1q_y30AaU",
        gitHub: "https://github.com/ETorresSacha/PI-FOOD-FRONT",
      },
    },
    {
      id: "6521f58ff41c57ebd5b01796",
      title: "SKILL HUB",
      description:
        "En esta pagina puedes encontrar a las personas indicadas para que realicen los trabajos eventuales que necesitas en tu hogar, empresa o institución.",
      video: "../../../../image/imagen-nosotros.jpg",
      links: {
        depoly: "https://skillhub-production.netlify.app/",
        youtube: "https://www.youtube.com/watch?v=NhQ30hiDNr0",
        gitHub: "https://github.com/ETorresSacha/skillHub-front",
      },
    },
  ];

  return (
    <div className="conteiner">
      <div className="conteiner-title">
        <h1 className="title">Proyectos</h1>
      </div>

      <div className="conteiner-first">
        <div class="card mb-3" className="conteiner-card">
          <div class="row g-0">
            <div class="col-md-4">
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
              class="col-md-8"
              style={{ padding: "10px", border: "solid transparent" }}
            >
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{
                    color: "white",
                    margin: "2px 0 10px auto",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  ONLINE STORE
                </h5>
                <p class="card-text">
                  Esta página es un ecommers, en esta tienda virtual puedes
                  encontrar las mejores prendas que estan de moda y a los
                  mejores precios.
                </p>
                <div class="card-text" className="icon-link-project">
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
                      class="btn btn-outline-primary"
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
            <div key={element.id} class="card mb-3" className="conteiner-card">
              <div class="row g-0">
                <div class="col-md-4">
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
                  class="col-md-8"
                  style={{ padding: "10px", border: "solid transparent" }}
                >
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        color: "white",
                        margin: "2px 0 10px auto",
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                    >
                      {element.title}
                    </h5>
                    <p class="card-text">{element.description}</p>
                    <p class="card-text" className="icon-link-project">
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
                          class="btn btn-outline-primary"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
    </div>
  );
};

export default Projects;
//!FALTA MEJORAR EN ESTILOS
