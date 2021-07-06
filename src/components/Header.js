import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
render(){
    return(
        <Navbar bg="light" variant="light">
        <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Favorite">Favorite</Nav.Link>

        </Nav>
        </Container>
      </Navbar>
    );
}

 }
  export default Header;