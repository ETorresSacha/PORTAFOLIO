import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import "./contact.css";

const Contact = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  }));
  return (
    <div className="conteiner">
      <div className="conteiner-title">
        <h1 className="title"> Contacto</h1>
      </div>
      <div className="conteiner-first">
        <div className="box">
          <div className="box-inputs">
            <div className="icon-input">
              <PersonIcon
                sx={{
                  color: "black",
                  borderRadius: "50%",
                  background: "white",
                  margin: "10px",
                }}
              />
              <TextField
                sx={{
                  width: "100%",
                  border: "red",
                  margin: "10px",
                  color: "white",
                  borderRadius: " 3px",
                }}
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
              />
            </div>
            <div className="icon-input">
              <EmailIcon
                sx={{
                  color: "black",
                  borderRadius: "50%",
                  background: "white",
                  margin: "10px",
                }}
              />
              <TextField
                sx={{
                  width: "100%",
                  border: "red",
                  margin: "10px",
                  color: "white",
                  borderRadius: " 3px",
                }}
                id="outlined-basic"
                label="Correo"
                variant="outlined"
              />
            </div>
            <TextField
              sx={{ width: "100%", border: "red" }}
              id="outlined-multiline-flexible"
              label="Mensaje"
              multiline
              rows={4}
              column={2}
            />
          </div>

          <ColorButton
            sx={{ width: "90%", padding: "15px", margin: "15px" }}
            variant="contained"
          >
            Enviar
          </ColorButton>
        </div>
      </div>
      <div className="conteiner-second"></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          margin: "5px",
        }}
      >
        <WhatsAppIcon style={{ color: "green", position: "absolute" }} />
      </div>
      <button class="button  email">me@email.com</button>
      <button class="button  phone">tel: 1234 567 890</button>
    </div>
  );
};

export default Contact;
