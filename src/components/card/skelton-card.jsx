import React from "react";
import "./skelton.css";

import { Card } from "react-bootstrap";

function SkeltonCard() {
  return (
    <Card className="cardy loading">
      <div variant="top" src="" className="imgPlace" />
      <Card.Body>
        <Card.Title className="title"></Card.Title>
        <br></br>
        <Card.Subtitle className="line"></Card.Subtitle>
        <br></br>
        <Card.Subtitle className="line"></Card.Subtitle>
        <br></br>
        <Card.Subtitle className="line"></Card.Subtitle>
        <div className="iconParent">
          <div className="iconStyles"></div>
          <div className="iconStyles"></div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SkeltonCard;
