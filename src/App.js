import React from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar.component";
import Home from "./components/Home/home.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";

import { Route } from "react-router-dom";

function App() {
  const iconStyles = {
    marginBottom: "10px",
    color: "black",
    fontSize: "30px"
  };
  const h1Styles = {
    paddingTop: "40px",
    marginBottom: "26px",
    fontWeight: "200"
  };

  return (
    <div className="flexCenter mainWrapper" style={{ textAlign: "center" }}>
      <h1 style={h1Styles} className=" animated heartBeat delay-1s ">
        Fahad Jabbar
      </h1>
      <Navbar />
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/contact" component={Contact} exact />
      <footer>
        <a
          href="mailto:mrfahadjabbar@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="far fa-envelope grow" style={iconStyles}></i>
        </a>
        <a
          href="https://github.com/hereisfahad"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github grow" style={iconStyles}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mrfahadjabbar/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin grow" style={iconStyles}></i>
        </a>
        <a
          href="https://www.twitter.com/hereisfahad"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter grow" style={iconStyles}></i>
        </a>
        {/* <a
          href="https://www.facebook.com/hereisfahad"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-facebook grow" style={iconStyles}></i>
        </a>
        <a
          href="https://wa.me/+923009199076?text=Hey%20Fahad%20are%20you%20available%20to%20talk%20."
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-whatsapp grow" style={iconStyles}></i>
        </a> */}
      </footer>
    </div>
  );
}

export default App;
