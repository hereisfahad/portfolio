import React from "react";

import { Card } from "react-bootstrap";

function PCard({ imgUrl, name, desc, tools, site, github }) {
  return (
    <Card style={{ width: "18rem" }} border="secondary" className="img">
      <Card.Img variant="top" src={imgUrl} style={{ height: "100px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{tools}</Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
        <div className="d-flex justify-content-center">
          <Card.Link href={site}>
            <i
              class="fas fa-globe"
              style={{
                marginBottom: "10px",
                color: "black",
                fontSize: "30px"
              }}
            ></i>
          </Card.Link>
          <Card.Link href={github}>
            <i
              class="fab fa-github"
              style={{
                marginBottom: "10px",
                color: "black",
                fontSize: "30px"
              }}
            ></i>
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PCard;
