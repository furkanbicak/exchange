import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import loginIcon from '../../src/assets/login.svg'

const NavbarContent = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home">
          <img
            alt=""
            src={loginIcon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        Fintech
        </Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/account">Account</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavbarContent