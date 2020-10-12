import React from "react";
import "./Profile.scss";
import { Image, Container, Row, Col } from "react-bootstrap";

interface Props {
    src: string;
    name: string;
}

export const Profile = (props: Props) => (
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