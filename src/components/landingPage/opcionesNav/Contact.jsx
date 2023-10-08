import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  }));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        //background: "linear-gradient(180.2deg,rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
      }}
    >
      <img src="../../../../image/portada.png" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          margin: "5px",
        }}
      >
        <div
          style={{
            background: "white",
            boxShadow: "3px 1px 10px ",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",

            position: "relative",
            top: "-45px",
          }}
        >
          <h1>CONTACTO</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(150px,1fr))",
              gridGap: "10px",
              gridAutoRows: "minmax(80px, auto)",
              margin: "15px",
            }}
          >
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />

            <TextField id="outlined-basic" label="Correo" variant="outlined" />
          </div>

          <TextField
            sx={{ width: "90%", border: "red" }}
            id="outlined-multiline-flexible"
            label="Mensaje"
            multiline
            rows={4}
            column={2}
          />
          <ColorButton
            sx={{ width: "90%", padding: "15px", margin: "15px" }}
            variant="contained"
          >
            Enviar
          </ColorButton>
        </div>
        <WhatsAppIcon style={{ color: "green", position: "absolute" }} />
      </div>
    </div>
  );
};

export default Contact;
