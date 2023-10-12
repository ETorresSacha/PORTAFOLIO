import React from "react";
import NavBar from "../protafolio1/navbar/NavBar";
import Header from "../protafolio1/header/Header";
import Cover from "../cover/Cover";
import Transitions from "../protafolio1/transition/Transitions";
import Introduccion from "../protafolio1/introduccion/Introduccion";
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
