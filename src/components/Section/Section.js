import React, { useState } from "react";
import "./Section.scss";
import { Image, Container, Row, Col, Button, Collapse } from "react-bootstrap";
// import styled from 'styled-components';
import "../../styles/colors.scss";

// interface SectionProps {
//     readonly backgroundColor: string;
// }

export const Section = (props) => {
  // let childArray = [];
  // React.Children.map(props.children, child => childArray.push(child));

  // const [open, setOpen] = useState(false);
  let content;
  switch (props.numCol) {
    // case 1:
    //     content = <div className="content">{props.children}</div>;
    //     break;
    // case 2:
    //     // content = (
    //     //     <Row>
    //     //         <div className="content">
    //     //             <Col>{childArray[1]}</Col>
    //     //             <Col>{childArray[2]}</Col>
    //     //         </div>
    //     //     </Row>
    //     // );
    //     content = <div className="content">{props.children}</div>;
    //     break;
    default:
      content = <div className="content">{props.children}</div>;
  }
  // const Section = styled.div<SectionProps>`
  //     padding: 0;
  //     background: ${props.backgroundColor};
  //     width: 100vw;
  //     transition: 1s;
  //     min-height: 500px;
  // `;
  // content = props.isEditMode ? (
  //   <textarea className="textbox" value={props.children} onChange={props.handleChange}/>
  // ) : (
  //   <div className="content">{props.children}</div>
  // );

  return (
    // <Col sm={12} md={12} lg={6} xl={4}>
    <div
      className="sectionContainer"
      style={{ background: props.backgroundColor }}
    >
      {/* <Section backgroundColor={props.backgroundColor}> */}
      <h3 className="title">{props.title}</h3>
      {content}
      {/* <div className="content">{props.children}</div> */}
      {/* </Section> */}
    </div>
    // </Col>
  );
};
