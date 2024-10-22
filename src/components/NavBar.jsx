import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                <img
                alt="project/logo"
                src="./src/assets/project-logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"/>Basket-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/category/beauty'>Beauty</Nav.Link>
                        <Nav.Link as={Link} to='/category/groceries'>Groceries</Nav.Link>
                        <Nav.Link as={Link} to='/category/fragrances'>Fragrances</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}
export default NavBar
