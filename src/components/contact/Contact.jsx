import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./contact.css";

const Contact = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[800]),
    backgroundColor: orange[800],
    "&:hover": {
      backgroundColor: orange[500],
    },
  }));
  return (
    <div
      style={{ padding: " 50px 0 50px 0", border: "solid red" }}
      className="conteiner"
    >
      <div className="conteiner-title">
        <h1 style={{ border: "solid green" }} className="title">
          Contacto
        </h1>
      </div>
      <div className="conteiner-first">
        <div style={{ padding: "10px" }} className="conteiner-box">
          <div className="contact">
            <button class="button  email">eriktorressacha@email.com</button>
            <button class="button  phone">Cel:(+51) 964626322</button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <WhatsAppIcon
                style={{
                  width: "60px",
                  height: "60px",
                  color: "white",
                  background: "green",
                  borderRadius: "10px",
                }}
              />
              <LinkedInIcon
                style={{
                  width: "60px",
                  height: "60px",
                  color: "white",
                  background: "blue",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="box">
            <div className="box-inputs">
              <TextField
                sx={{
                  width: "100%",
                  border: "red",
                  borderRadius: " 3px",
                }}
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "100%",
                  border: "red",
                  color: "black",
                  borderRadius: " 3px",
                }}
                id="outlined-basic"
                label="Correo"
                variant="outlined"
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
              />
              <ColorButton
                sx={{
                  width: "100%",
                  padding: "15px",
                  fontfamily: "Arial, Helvetica, sans-serif",
                }}
                variant="contained"
              >
                Enviar
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
