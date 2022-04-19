import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return(
    <Navbar bg="primary mt-4 mb-4 rounded" variant="dark">
    <Container>
    <Navbar.Brand as={NavLink} to="/">Blog.app</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar
