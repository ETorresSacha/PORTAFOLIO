import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import "./nav.css";

const Nav = ({ logo, optionNavigate, search, perfilUsuario }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        display: "flex",
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* LOGO */}
        {logo}

        {/* OPCIONES PARA NAVEGAR */}
        {optionNavigate}

        {/* SEARCH */}
        {search}

        {/* LOGIN DEL USUARIO */}

        {/* PERFIL DEL USUARIO */}
        {perfilUsuario}
      </div>
    </AppBar>
  );
};

export default Nav;
