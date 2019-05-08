import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

import "./styles.css";

function App() {
  return (
    <div className="">
      <Navigation />
      <div class="container-fluid">
        <About />
        <hr />
        <Experience />
        <hr />
        <Education />
        <hr />
        <Skills />
        <hr />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
