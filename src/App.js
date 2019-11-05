import React from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar.component";
import Home from "./components/Home/home.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import About from "./components/about/about.component";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="flexCenter mainWrapper">
      {/* {wrap h1 and nav in header t ag} */}
      <h1
        style={{ paddingTop: "40px", marginBottom: "26px", fontWeight: "200" }}
        className=" animated infinite heartBeat delay-2s "
      >
        Fahad Jabbar
      </h1>
      <Navbar />

      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/about" component={About} exact />

      <footer>
        <a
          href="https://github.com/hereisfahad"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-github grow"
            style={{
              marginBottom: "10px",
              color: "black",
              fontSize: "30px"
            }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mrfahadjabbar/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-linkedin grow"
            style={{
              marginBottom: "10px",
              color: "black",
              fontSize: "30px"
            }}
          ></i>
        </a>
        <a
          href="https://www.twitter.com/hereisfahad"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-twitter grow"
            style={{
              marginBottom: "10px",
              color: "black",
              fontSize: "30px"
            }}
          ></i>
        </a>
        <a
          href="https://www.facebook.com/hereisfahad"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-facebook grow"
            style={{
              marginBottom: "10px",
              color: "black",
              fontSize: "30px"
            }}
          ></i>
        </a>
        <a
          href="https://wa.me/+923009199076?text=Hey%20Fahad%20are%20you%20available%20to%20talk%20."
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-whatsapp grow"
            style={{
              marginBottom: "10px",
              color: "black",
              fontSize: "30px"
            }}
          ></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
