import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => {

  return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
            <Container>
                    <Navbar.Brand href="#home">Julian Mohr</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {['Home', 'Blog', 'Projects'].map((text, index) => (
                                <Nav.Link href={text} key={index} >{text}</Nav.Link>
                            ))}
                        <NavDropdown title="Settings" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dark/light mode</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Easy Read option</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
  )
}

export default Navigation