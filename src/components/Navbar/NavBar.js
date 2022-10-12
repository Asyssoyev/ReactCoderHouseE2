import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {

    return (
        <Navbar bg="blue" expand="lg" sticky="top" className="shadow p-3 mb-5">
            <Container>
                <Navbar.Brand as={Link} to='/' className="text-primary">
                    <p>TimberLand</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/category/niños' className="text-primary">Niños</Nav.Link>
                        <Nav.Link as={Link} to='/category/hombres' className="text-primary">Hombres</Nav.Link>
                        <Nav.Link as={Link} to='/category/mujeres' className="text-primary">Mujeres</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
