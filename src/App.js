import React from 'react';
import './App.css';

import { Row, Col } from 'react-bootstrap';

import Navbar from './components/navbar/navbar.component';
import Home from './components/Home/home.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';

import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <div id="heading" ><h1 >Portfolio</h1></div>
      {/* <hr/> */}
      <Row className="d-flex justify-content-evenly">
        <Col lg={{offset:0,span:2}} sm="2" xs={{span:1}}  ><Navbar/></Col>
        <Col  lg={{offset:0,span:10}} sm={{offset:2, span:8}} xs={{offset:3, span:6}}  >            
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/contact" component={Contact} exact />
        </Col> 
      </Row>
    </div>
  );
}

export default App;
