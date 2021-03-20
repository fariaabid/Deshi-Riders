import React, { useContext } from 'react';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container className="header">
            <Navbar sticky="true" bg="***" variant="dark" className="customNavbar d-flex">
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} alt="logo" className="logo" />
                    <h1>Deshi Riders</h1>
                </Navbar.Brand>
               
                <Nav className="ml-auto customNav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#">Destination</Nav.Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">{loggedInUser.displayName}</Nav.Link>
                    <Link to={`/login`}>
                        {
                            loggedInUser.email ? <Button className="customButton" onClick={() => setLoggedInUser({})}>Log Out</Button>
                                : <Button className="customButton" >Login</Button>
                        }
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;