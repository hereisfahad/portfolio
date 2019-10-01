import React from 'react';
import './navbar.styles.css';

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="mt-5">
        <Nav defaultActiveKey="/home" className=" flex-column" >
          <Link style={{textDecoration:'none'}} className="link d-flex align-items-center justify-content-center" to='/'> Home</Link>
          <Link style={{textDecoration:'none'}}  className="link d-flex align-items-center justify-content-center" to='/projects' >Projects</Link>
          <Link style={{textDecoration:'none'}}  className="link d-flex align-items-center justify-content-center" to='/contact' >Contact</Link>
        </Nav>
    </div>
    
  )}

export default Navbar;
