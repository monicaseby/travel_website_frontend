// Header.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user')); // Get user info

    const navbarStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        padding: '10px 0',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
    };

    const navLinkStyle = {
        color: 'white',
        marginRight: '15px',
        textDecoration: 'none',
    };

    const bookButtonStyle = {
        backgroundColor: '#9370DB',
        borderColor: '#9370DB',
        borderRadius: '25px',
        padding: '8px 20px',
        color: 'white',
        textDecoration: 'none',
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <Navbar style={navbarStyle} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ color: 'white', fontSize: '3rem', fontStyle: "oblique" }}>TravelMate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-5 ps-5 fs-5">
                        <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
                        <Nav.Link href="/trippackage" style={navLinkStyle}>Tour Packages</Nav.Link>
                        <Nav.Link href="/hotel" style={navLinkStyle}>Hotels</Nav.Link>
                        {isAuthenticated && (
                            <>
                                <Nav.Link href="/booking" style={navLinkStyle}>Booking</Nav.Link>
                                {user && user.username === 'admin' ? (
                                    <Nav.Link href="/admin" style={navLinkStyle}>Dashboard</Nav.Link>
                                ) : (
                                    <Nav.Link href="/customize" style={navLinkStyle}>Customize</Nav.Link>
                                )}
                            </>
                        )}
                        <Nav.Link href="/contact" style={navLinkStyle}>Contact us</Nav.Link>

                    </Nav>
                    {isAuthenticated ? (
                        <Button onClick={handleLogout} style={bookButtonStyle}>Logout</Button>
                    ) : (
                        <Link to='/login' className="fs-5" style={bookButtonStyle}>Login</Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;