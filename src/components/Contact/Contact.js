import React, { useState } from "react";
import "./Contact.scss";
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
    <Col sm={6} md={4} lg={4} xl={4} className="ContactCol">
      <i class="fas fa-phone-square"></i>
      <h2>Phone</h2>
      <p>(647) 854-4287</p>
    </Col>
  );
};
