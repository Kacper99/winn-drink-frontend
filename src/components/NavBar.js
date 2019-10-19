import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Winn Drink</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Add Players</Nav.Link>
                    <Nav.Link href="#features">Settings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}