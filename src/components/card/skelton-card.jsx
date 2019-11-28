import React from "react";
import "./skelton.css";

import { Card } from "react-bootstrap";

function SkeltonCard() {
  const iconStyles = {
    backgroundColor: "white",
    width: "35px",
    height: "35px",
    borderRadius: "50%"
  };
  const flex = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-evenly"
  };
  const line = {
    height: "10px",
    width: "90%",
    backgroundColor: "white",
    margin: "5px auto",
    marginBottom: "10px"
  };
  const title = {
    height: "25px",
    width: "100px",
    backgroundColor: "white",
    margin: "0 auto",
    marginBottom: "18px"
  };
  return (
    <Card className="cardy">
      <div
        variant="top"
        src=""
        style={{ height: "100px", backgroundColor: "white", margin: "5px" }}
      />
      <Card.Body>
        <Card.Title style={title}></Card.Title>
        <Card.Subtitle style={line}></Card.Subtitle>
        <Card.Subtitle style={line}></Card.Subtitle>
        <Card.Subtitle style={line}></Card.Subtitle>
        <div style={flex}>
          <div style={iconStyles}></div>
          <div style={iconStyles}></div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SkeltonCard;
