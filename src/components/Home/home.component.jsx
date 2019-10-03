import React from 'react';
import './home.styles.css';

import Tilt from 'react-tilt';
import logo from './pp.jpg';
import {Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="mt-3">
        <Col sm='8' xs={{span:12, order:2}} >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam reprehenderit maxime ullam omnis sequi voluptatem aliquam explicabo iusto magni dolore sint corporis eaque unde, nesciunt nisi asperiores fugiat? Nulla, placeat!
        </Col>
        <Col sm='4' xs={{span:2, order:1, offset:2}} >
          <div className="App d-flex justify-content-center mb-3 ml-5 mr-5" >
            <Tilt className="Tilt " options={{ max : 55 }}  style={{ height: 200, width: 200 }}>
              <img src={logo} alt="Logo" width={180} heihgt={180} />    
            </Tilt>
         </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
