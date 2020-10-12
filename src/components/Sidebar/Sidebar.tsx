import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Profile } from '../Profile/Profile';
import './Sidebar.scss';
const imgSrc = 'https://avatars2.githubusercontent.com/u/19365335?s=460&v=4';

type Props = {
    src: string;
    name: string;
};

export const Sidebar: React.FC = () => (
    <div className="Sidebar">
        <Profile src={imgSrc} name="Janujan Gathieswaran"></Profile>

        <div className="linksContainer">
            {/* <div className="links"> */}
            <a href="" className="item about">
                About
            </a>
            <a href="" className="item experience">
                Experience
            </a>
            <a href="" className="item projects">
                Projects
            </a>
            <a href="" className="item contact">
                Contact
            </a>
            {/* </div> */}
        </div>
    </div>
);
