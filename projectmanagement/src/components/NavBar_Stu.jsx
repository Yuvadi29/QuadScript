import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// const NavBar_Stu1 = () => {
//     return (
//         <>
            
//         </>
//     )
// };

// export default NavBar_Stu1;

import React from 'react'

export default function NavBar_Stu() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Project Adda</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    </div>
  )
}
