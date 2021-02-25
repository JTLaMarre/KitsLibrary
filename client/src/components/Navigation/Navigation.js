import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';



function Navigation() {
  return (
    <Navbar bg="light" expand="lg">      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Dvds">Dvds</Nav.Link>          
          <Nav.Link href="/Comics">Comics</Nav.Link>          
          <Nav.Link href="/Manga">Manga</Nav.Link>          
          <Nav.Link href="/Novels">Books</Nav.Link>          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
