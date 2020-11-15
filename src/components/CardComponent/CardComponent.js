import React, { useState } from "react";
import "./CardComponent.scss";
import {
  Card,
  Image,
  Container,
  Row,
  Col,
  Button,
  Collapse,
} from "react-bootstrap";

export const CardComponent = (props) => {
  // const [open, setOpen] = useState(false);
  const list = props.content.map((listItem) => <li>{listItem}</li>);
  return (
    // <div className="Card">
    //     <h2>{props.title}</h2>
    //     <ul>{list}</ul>
    // </div>
    <Col sm={12} md={6} lg={4} xl={4} className="CardCol">
      <Card className="Card">
        <Card.Img
          variant="top"
          src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <ul>{list}</ul>
          </Card.Text>
          {/* <Button variant="primary">More Info</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};
