import React from "react";

import Tilt from "react-tilt";
import logo from "../Home/pp.jpg";

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
        <h3 style={{ marginBottom: "1.5rem" }}>
          Hey, I am a javascript developer.
        </h3>
        <p>
          More About me?? Let's see.. My name is Fahad Jabbar, Computer science
          graduate. I am a JavaScript developer, sepecifically front-end
          developer and making my way towards full stack developement slowly and
          steadily. In my free time I read and watch TV.
        </p>
      </div>
    </div>
  );
}

export default Home;
