import React, { Component } from 'react';
import './Layout.scss';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Container, Row, Col, Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Layout extends Component {
    render() {
        return (
            <Container fluid className="layoutContainer">
                <Navbar bg="dark" variant="dark" expand="lg" className="nav">
                    <Navbar.Brand href="#home">Janujan G</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row noGutters>
                    {/* <Col lg="2" style={{position: "fixed"}}>
                        <Sidebar />
                    </Col> */}

                    <main>{this.props.children}</main>
                </Row>
            </Container>
        );
    }
}

export default Layout;
