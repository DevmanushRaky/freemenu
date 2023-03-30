import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <>

            <Navbar bg="light" expand="md" sticky='top' className='shadow-sm'>
                <Container>
                    <Navbar.Brand >
                        <Link to="/">
                            <img
                                src="https://www.freshmenu.com/images/fm-header-logo.svg"
                                className="d-inline-block align-top "
                                alt="Your Logo"
                            />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        {/* <Nav className="mr-auto"></Nav> */}
                        <Nav className="ml-auto menu">
                            <Nav.Link className="nav_links" as={Link} to="/search"><SearchIcon />Search</Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/offers">Offers</Nav.Link>
                            <Nav.Link className="nav_links nav_links_helpcenter" as={Link} to="/helpcenter" data-text="Help Center"><HelpOutlineIcon /></Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/cart"><ShoppingCartIcon /></Nav.Link>

                            <NavDropdown className="nav_links" title={<PersonIcon />} id="nav-dropdown" noCaret>
                                {/* when user new */}
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/signup">Signup </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/signin">Signin</NavDropdown.Item>
                                {/* when user signin */}
                                <NavDropdown.Header>YOUR ACCOUNT</NavDropdown.Header>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/profile">Profile Details </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/addressbook">Address Book</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/freshmoney">Fresh Money</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/giftcard">Gift Card</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/paymentmethods">Payment Methods</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/favorites">Favirotes</NavDropdown.Item>
                                <NavDropdown.Header>GENERAL</NavDropdown.Header>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/orderhistory">Order History</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/corporateordering">Corporate Ordering</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/signout">Signout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header