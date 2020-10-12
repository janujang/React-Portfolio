import React, { useState } from 'react';
import './CardComponent.scss';
import { Card, Image, Container, Row, Col, Button, Collapse } from 'react-bootstrap';

type Props = {
    title: string;
    content: Array<string>;
};

export const CardComponent: React.FC<Props> = props => {
    // const [open, setOpen] = useState(false);
    const list = props.content.map(listItem => <li>{listItem}</li>);
    return (
        // <div className="Card">
        //     <h2>{props.title}</h2>
        //     <ul>{list}</ul>
        // </div>
        <Col sm={12} md={12} lg={12} xl={12} className="CardCol">
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
