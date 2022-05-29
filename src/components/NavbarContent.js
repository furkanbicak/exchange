import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import loginIcon from '../../src/assets/login.svg'


const NavbarContent = () => {
    const navigate = useNavigate();


    return (
        <>
        <Navbar bg='primary' variant='dark'>
            <Container>
                <Navbar.Brand href='/home'>
                    <img
                        alt         =   'navbarIcon'
                        src         =   { loginIcon }
                        width       =   '50'
                        height      =   '50'
                        className   =   'd-inline-block align-top'
                    />
                    Fintech
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link className = 'text-white fw-bold ps-3' onClick = { () => navigate('/home') }>Home</Nav.Link>
                    <Nav.Link className = 'text-white fw-bold ps-3' onClick = { () => navigate('/account') }>Account</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarContent