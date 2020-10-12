import React, { useEffect } from 'react';
import './LandingScreen.scss';
import { Image, Container, Row, Col, Button, Collapse } from 'react-bootstrap';

interface Props {}

export const LandingScreen = (props: Props) => {
    // const [open, setOpen] = useState(false);
    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js';
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);
    return (
        <div className="landingScreenContainer">
            <Row noGutters className="landingScreenRow">
                {/* <h1>Hello, I'm Janujan</h1>
                <h3>Explore my portfolio</h3> */}

                <span className="main-title thin">Hello, I'm Janujan</span>
                <h1 className="main-title">Expore my portfolio</h1>
            </Row>
        </div>
    );
};
