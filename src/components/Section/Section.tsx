import React, { useState } from 'react';
import './Section.scss';
import { Image, Container, Row, Col, Button, Collapse } from 'react-bootstrap';

type Props = {
    title: string;
    colour: string;
    layout: Number;
};

export const Section: React.FC<Props> = props => {
    // const [open, setOpen] = useState(false);
    let content;
    // switch (props.layout) {
    //     case 1:
    //         content = (
    //             <Col sm="4" md="6" lg="12" className="content">
    //                 {props.children}
    //             </Col>
    //         );
    //         break;
    //     case 2:
    //         content = (
    //             <Col className="content">
    //                 <Row noGutters>
    //                     <Col>{props.children}</Col>
    //                     <Col></Col>
    //                 </Row>
    //             </Col>
    //         );
    //         break;
    //     default:
    //         content = <Col className="content">{props.children}</Col>;
    // }
    return (
        <Col sm={12} md={12} lg={6} xl={4}>
            <div className="sectionContainer">
                <h3 className="title">{props.title}</h3>
                <div className="content">{props.children}</div>
            </div>
        </Col>
    );
};
