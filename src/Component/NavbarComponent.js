import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function NavbarComponent() {
    return (
        <>
            <Navbar variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Timeline</Nav.Link>
                        <Nav.Link href="#features">Works</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#news">Newsletter</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <div>
                        {/* <Button>{DarkModeIcon}</Button> */}
                    </div>

                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent
