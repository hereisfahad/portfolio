import React from 'react';
import './contact.styles.css';

import { Row, Col } from 'react-bootstrap';
import {  ReactComponent as Facebook } from './facebook.svg';
import {  ReactComponent as Twitter } from './twitter.svg';
import {  ReactComponent as Whatsapp } from './whatsapp.svg';
import {  ReactComponent as Github } from './github.svg';
import {  ReactComponent as LinkedIn } from './linkedin.svg';


function Contact() {
  return (
    <div className="mt-3">
      {/* <Row> */}

        <Col   sm={{offset:0}} xs={{offset:2,span:10}} > 
          <h2 style={{color:'#9a9a3ec9', paddingTop:'0px' }} >Don't be a stranger</h2>
          <p style={{color:'#3e3e36ed', marginBottom:'70px' }} >Feel free to get in touch with me. I am always open to discussing new projects, createive ideas or opportunity to be a part of you visions.</p>
          <p style={{ borderBottom:'1px solid black' }} >You can reach me on these platforms.</p>
          <a href="https://github.com/hereisfahad" rel="noopener noreferrer" target="_blank">
          <Github style={{width:30, height:30, marginRight:'10px', marginBottom:'10px'}} />
          </a>
          <a href="https://www.linkedin.com/in/mrfahadjabbar/" rel="noopener noreferrer" target="_blank">
          <LinkedIn style={{width:30, height:30, marginRight:'10px', marginBottom:'10px'}} />
          </a>  
          <a href="https://www.twitter.com/hereisfahad" rel="noopener noreferrer" target="_blank">
            <Twitter style={{width:30, height:30, marginRight:'10px', marginBottom:'10px'}} />
          </a> 
          <a href="https://www.facebook.com/hereisfahad" rel="noopener noreferrer" target="_blank">
            <Facebook style={{width:30, height:30, marginRight:'10px', marginBottom:'10px'}} />
          </a> 
          <a href="https://wa.me/+923009199076?text=I%20want%20to%20talk%20to%20you." rel="noopener noreferrer" target="_blank">
            <Whatsapp style={{width:30, height:30, marginRight:'10px', marginBottom:'10px'} }/>
          </a> 
        </Col>
      {/* </Row> */}
    </div>
  );
}

export default Contact;
