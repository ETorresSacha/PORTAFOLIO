import React from "react";
import NavBar from "../../../components/navbar/NavBar";
import Header from "../../../components/header/Header";
import Cover from "../../../components/cover/Cover";
import Transitions from "../../../components/transition/Transitions";
import Introduccion from "../../../components/introduccion/Introduccion";
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
