import React from "react";

import Tilt from "react-tilt";
import logo from "../Home/pp.jpg";
import "./home.styles.css";

function Home() {
  return (
    <div className="animated bounceInLeft" style={{ marginTop: "25px" }}>
      <div className="App d-flex justify-content-center mb-3 ml-5 mr-5">
        <Tilt
          className="Tilt "
          options={{ max: 55 }}
          style={{ height: 200, width: 200 }}
        >
          <img
            src={logo}
            alt="Logo"
            width={180}
            heihgt={180}
            style={{ borderRadius: "10px" }}
          />
        </Tilt>
      </div>
      <div className="textDiv">
        <h3 style={{ marginBottom: "1.5rem", fontFamily: "Crafty Girls" }}>
          Hey, I am a software developer.
        </h3>
        <p>
          Specializing in front-end web development with back-end experience.
          Some might call that full-stack. The technologies I enjoyed the most
          are React.js, Node.js, Express.js, MongoDB, and Mongoose. In my free
          time, I read and watch TV.
        </p>
      </div>
    </div>
  );
}

export default Home;
