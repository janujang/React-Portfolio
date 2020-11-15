import React from "react";
import "./Profile.scss";
import { Image, Container, Row, Col } from "react-bootstrap";



export const Profile = (props) => (
    <div className="Profile">
    <Image
      src={props.src}
      className="profileImg"
      alt="profileImg"
      roundedCircle
    />
    <h3>{props.name}</h3>
  </div>
); 