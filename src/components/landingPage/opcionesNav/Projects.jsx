import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";

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
  ];
  return (
    <div
      style={{
        border: "solid red",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h1 className="h4-landing">MIS PROYECTOS</h1>
      <div class="card mb-3" style={{ maxWidth: "540px", margin: "15px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../../../../image/clothes.jpg"
              class="img-fluid rounded-start"
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="production"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ONLINE STORE</h5>
              <p class="card-text">
                Esta página es un ecommers, en esta tienda virtual puedes
                encontrar las mejores prendas que estan de moda y a los mejores
                precios.
              </p>
              <div
                class="card-text"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://github.com/ETorresSacha/STORE-ONLINE-FRONT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon
                    style={{
                      color: "black",
                      border: "solid 1px",
                      borderRadius: "50%",
                    }}
                  />
                </a>

                <a href="" target="_blank" rel="noreferrer">
                  <button type="button" class="btn btn-outline-primary">
                    Ver la página
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            background: "grey",
            backdroFilter: "blur(10px)",
          }}
        >
          En desarrollo
        </div>
      </div>

      <div
        style={{
          border: "solid white",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          padding: "15px",
          //margin: "30px",
          //display: "grid",
          //gridTemplateColumns: "repeat(2,minmax(350px,1fr))",
          justifyContent: "space-evenly",
          //placeContent: "center",
        }}
      >
        {proyectos.map((element) => {
          return (
            <div
              key={element.id}
              class="card mb-3"
              style={{ maxWidth: "540px" }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={element.video}
                    class="img-fluid rounded-start"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{element.title}</h5>
                    <p class="card-text">{element.description}</p>
                    <p
                      class="card-text"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <a
                        href={element.links.gitHub}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubIcon
                          style={{
                            color: "black",
                            border: "solid 1px",
                            borderRadius: "50%",
                          }}
                        />
                      </a>

                      <a
                        href={element.links.youtube}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <YouTubeIcon style={{ color: "red" }} />
                      </a>
                      <a
                        href={element.links.depoly}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button type="button" class="btn btn-outline-primary">
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
