import React, { useState } from 'react';
import './CustomBtn.scss';
// import { Image, Container, Row, Col, Button, Collapse } from 'react-bootstrap';

type Props = {
    // size: string;
};

export const CustomnBtn: React.FC<Props> = props => {
    // const [open, setOpen] = useState(false);

    return <button className="customBtn">{props.children}</button>;
};
