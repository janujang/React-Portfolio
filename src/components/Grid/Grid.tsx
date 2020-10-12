import React, { useState, Component } from 'react';
import './Grid.scss';
import { Image, Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import $ from 'jquery';
import { render } from '@testing-library/react';

type Props = {};

// const [open, setOpen] = useState(false);
let content;

export default class Grid extends Component {
    componentDidMount() {
        $('.items').on('click', function() {
            $(this).toggleClass('fullScreen');
            $('.items').hide();
            $(this).show();
        });
    }
    render() {
        return (
            <div className="gridContainer">
                <div className="items" id="About">
                    About
                </div>
                <div className="items" id="Experience">
                    Experience
                </div>
                <div className="items" id="Projects">
                    Projects
                </div>
                <div className="items" id="Contact">
                    Contact
                </div>
            </div>
        );
    }
}
