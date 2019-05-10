import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Awards from "./Awards";
import Interests from "./Interests";

import NavVertical from "./NavVertical";
import useWindowSize from "./useWindowSize";
import WOW from "wow.js";
import "./styles.css";
import "./typography.css";

function App() {
  const size = useWindowSize();

  useEffect(() => {
    new WOW().init();
  });

  return (
    <div className="App">
      {size.width < 768 ? <Navigation /> : <NavVertical />}
      <div class="container-fluid">
        <About width={size.width} />
        <hr />
        <Experience />
        <hr />
        <Education />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Awards />
        <hr />
        <Interests />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
