import React from "react";
import NavBar from "../../navbar/NavBar";
import Header from "../../header/Header";
import Cover from "../../../cover/Cover";
import Transitions from "../../transition/Transitions";
import Introduccion from "../../introduccion/Introduccion";
import "./home.css";
const Home = () => {
  return (
    <div className="conteiner-home">
      <Cover />
      <Header />
      <NavBar />
      <Transitions />
      <Introduccion />
    </div>
  );
};

export default Home;
