import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { fadeIn } from "../../utils/motionTrnsitions";
import { motion } from "framer-motion";
import { validateData } from "./validacion";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import "./contact.css";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[800]),
  backgroundColor: orange[800],
  "&:hover": {
    backgroundColor: orange[500],
  },
}));

const Contact = () => {
  const [input, setInput] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validando el formulario
    const result = validateData(input);
    result
      ? toast.error(`${result}`)
      : toast.success("Mensaje enviado correctamente");
  };
  return (
    <div className="conteiner" style={{ padding: " 50px 0 50px 0" }}>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "90%",
        }}
      >
        <div className="conteiner-title">
          <h1 className="title">Contacto</h1>
        </div>
        <div className="conteiner-first">
          <div style={{ padding: "13px" }} className="conteiner-box">
            <div className="contact">
              <button className="button  email">
                <a href="mailto:eriktorressacha@email.com" target="_blank">
                  eriktorressacha@email.com
                </a>
              </button>
              <button className="button  phone">
                <a href="tel:964626322">Cel:(+51) 964626322</a>
              </button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <a href="https://wa.me/51964626322" target="_blank">
                  <WhatsAppIcon
                    style={{
                      width: "60px",
                      height: "60px",
                      color: "white",
                      background: "green",
                      borderRadius: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/erik-torres-sacha-a93498200/"
                  target="_blank"
                >
                  <LinkedInIcon
                    style={{
                      width: "60px",
                      height: "60px",
                      color: "white",
                      background: "blue",
                      borderRadius: "10px",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="box">
              <form onSubmit={handleSubmit} className="box-inputs">
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  name="nombre"
                  value={input.nombre}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    width: "100%",
                    color: "black",
                    borderRadius: " 3px",
                  }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />

                <TextField
                  sx={{
                    width: "100%",
                  }}
                  id="outlined-multiline-flexible"
                  label="Mensaje"
                  multiline
                  rows={4}
                  column={2}
                  name="mensaje"
                  value={input.mensaje}
                  onChange={handleChange}
                />

                <ColorButton
                  sx={{
                    width: "100%",
                    padding: "15px",
                    fontfamily: "Arial, Helvetica, sans-serif",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Enviar
                </ColorButton>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <Toaster richColors closeButton />
    </div>
  );
};

export default Contact;
