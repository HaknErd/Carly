import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="" expand="md">
        <Container>
          <Navbar.Brand>Carl</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">What is the internet</Nav.Link>
              <Nav.Link href="#">Impact of AI</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
