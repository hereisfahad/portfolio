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
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-evenly"
  };
  return (
    <Card className="cardy">
      <div
        variant="top"
        src=""
        style={{ height: "100px", backgroundColor: "white", margin: "5px" }}
      />
      <Card.Body>
        <Card.Title
          style={{
            height: "15px",
            width: "100px",
            backgroundColor: "white",
            margin: "0 auto"
          }}
        ></Card.Title>
        <Card.Subtitle
          style={{
            height: "10px",
            width: "90%",
            backgroundColor: "white",
            marginBottom: "4px",
            margin: "5px auto"
          }}
        ></Card.Subtitle>
        <Card.Text
          style={{
            height: "10px",
            width: "80%",
            backgroundColor: "white",
            margin: "5px auto"
          }}
        ></Card.Text>
        <div style={flex}>
          <div style={iconStyles}></div>
          <div style={iconStyles}></div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SkeltonCard;
