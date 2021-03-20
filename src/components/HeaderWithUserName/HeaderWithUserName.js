import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './HeaderWithUserName.css';
import { UserContext } from '../../App';

const HeaderWithUserName = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container className="header border-bottom">
            <Navbar sticky="true" bg="light" variant="light" className="customNavBar">
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

export default HeaderWithUserName;