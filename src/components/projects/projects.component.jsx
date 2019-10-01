import React from 'react';
import './projects.styles.css';

// import Tilt from 'react-tilt';
// import logo from './pp.jpg';
import {Container, Row } from 'react-bootstrap';
import PCard from '../card/card.component';
// import dp from '../Home/pp.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faStar, faHome } from '@fortawesome/free-solid-svg-icons';
{/* <Button variant="primary">Go somewhere</Button> */}

function Projects() {
    const projects = [
                    {
                    name: 'E-Clothing',
                    desc: 'E-commerce site for clothing items. which displays and allow user to checkout multiple items.',
                    tools: 'ReactJs, Redux, Firebase, Stripe',
                    imgUrl:'https://i.ibb.co/fxV4ygL/e-clothing.png',
                    site: 'https://live-e-clothing.herokuapp.com/',
                    github: 'https://github.com/hereisfahad/e-clothing'
                    },
                    {
                    name: 'Face Detection',
                    desc: 'Detects faces in image (take input image url) using Clarifi Api.',
                    tools: 'ReactJs, NodeJs, PostgreSQL, Clarifai Api',
                    imgUrl:'https://i.ibb.co/1QK7zYd/smart-brain.png',
                    site: 'https://front-of-smart-brain.herokuapp.com/',
                    github: 'https://github.com/hereisfahad/smart-brain-ZTM/'
                    },
                    {
                    name: 'Budget App',
                    desc: 'A basic site which calculated budget based on incom and expenditures.',
                    tools: 'HTML5, CSS3, JavaScript',
                    imgUrl:'https://i.ibb.co/DzXQxr7/budget.png',
                    site: 'https://hereisfahad.github.io/Budget-App',
                    github: 'https://github.com/hereisfahad/Budget-App'
                    },
                    {
                    name: 'Robo Filter Web-App',
                    desc: 'Basic react app which displays robot cards.',
                    tools: 'ReactJs',
                    imgUrl:'https://i.ibb.co/rkv8tRX/robo.png',
                    site: 'https://hereisfahad.github.io/robofriend-ZTM/',
                    github: 'https://github.com/hereisfahad/robofriend-ZTM'
                    }
             ]
                    
  return (
    <Container>
      <Row className="mt-5 d-flex hcenters" >
        {
            projects.map((item)=> <PCard imgUrl={item.imgUrl} name={item.name} desc={item.desc} tools={item.tools} site={item.site} github={item.github}  />)
        }
      </Row>
    </Container>
    
  );
}

export default Projects;
