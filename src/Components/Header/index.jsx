import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Navbar className='navbar-section' bg="light" variant="light">
        <Navbar.Brand href="">User Photos Gallary</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default App;
