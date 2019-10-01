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
      <h1 className="">Portfolio</h1>
      <hr/>
      <Row className="d-flex justify-c">
        <Col sm="2" xs="4" ><Navbar/></Col>
        <Col sm="10" xs="8" >            
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/contact" component={Contact} exact />
        </Col> 
      </Row>
    </div>
  );
}

export default App;
