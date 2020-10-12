import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './hoc/Layout/Layout';
import { Section } from './components/Section/Section';
import { LandingScreen } from './components/LandingScreen/LandingScreen';
import { CustomnBtn } from './components/CustomBtn/CustomBtn';
import { Row, Col } from 'react-bootstrap';
import { CardComponent } from './components/CardComponent/CardComponent';
import Grid from './components/Grid/Grid';
const about: string = `I am a 2nd year computer engineering student at the University of Waterloo pursuing a 
                    hardware and software path. I have experience working on various kinds of projects, 
                    ranging from architectural oriented to software. I have interest in various aspects of 
                    software development as well as hardware design.`;

const softwareList: Array<string> = [
    'Co-developed a pathfinding application for the Microsoft HoloLens',
    'Designed a bistro application for staff members to reserve food',
    'Proficient in various languages and web development',
];

const cardsInfo = [
    {
        title: 'Software',
        list: [
            'Co-developed a pathfinding application for the Microsoft HoloLens',
            'Designed a bistro application for staff members to reserve food',
            'Proficient in various languages and web development',
        ],
    },
    {
        title: 'Hardware',
        list: [
            'Emloyed VHDL based FPGA development in circuits labs',
            'Designed a control and automation system using LabVIEW',
            'Built an embedded system to track customer flow using an OMEGA board',
        ],
    },
    {
        title: 'Design',
        list: [
            'Designed floor plans and a 3-D model for a residential suite on AutoCAD',
            'Designed and built a 3-D model for a modern library using Revit',
            'Designed and engineered a robot for VEX Robotics competitions',
        ],
    },
];
const App: React.FC = () => {
    const cardsElem = cardsInfo.map(item => <CardComponent title={item.title} content={item.list} />);
    return (
        <div className="App">
            <Layout>
                <LandingScreen />
                <Row>
                    <Section title="About" colour="blue" layout={2}>
                        <p>{about}</p>
                        <CustomnBtn>Download Resume</CustomnBtn>
                    </Section>

                    <Section title="Experience" colour="blue" layout={2}>
                        <Row>{cardsElem}</Row>
                    </Section>
                    <Section title="Projects" colour="blue" layout={2}>
                        <p>{about}</p>
                    </Section>
                    <Section title="Contact" colour="blue" layout={1}>
                        <p>{about}</p>
                    </Section>
                </Row>
                {/* <Grid /> */}
            </Layout>
        </div>
    );
};

// Consider using zoom in out page scroll for one of the pages: https://ihatetomatoes.net/demos/zoom-into-image-page-scroll/

export default App;
