import React from "react";
import "./navbar.styles.css";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <div className="">
    <Nav defaultActiveKey="/home" className="navbarStyle">
      <Link style={{ textDecoration: "none" }} className="link " to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none" }} className="link" to="/projects">
        Projects
      </Link>
      <Link style={{ textDecoration: "none" }} className="link " to="/contact">
        Contact
      </Link>
    </Nav>
    // </div>
  );
}

export default Navbar;
