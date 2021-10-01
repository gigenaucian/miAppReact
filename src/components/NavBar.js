import CartWidget from "./CartWidget/CartWidget"
import  "./NavBar.css";
import { Link } from 'react-router-dom'
import { Navbar, Container,  Nav , NavDropdown, Image, Col} from "react-bootstrap";


const NavBar = ()=>{
    return (
    <Navbar  expand='xxl' >
            <Container >
            <Navbar.Brand >
            <Col xs={3} md={3}>
            <Link to='/'><Image src='../../logoFelita.jpg' fluid roundedCircle ></Image></Link>
            </Col> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link ><Link to='/'> Home </Link></Nav.Link>
                <Nav.Link ><Link to="/contacto"> Contacto </Link></Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to='/category/COMBO'>Combos</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to ='/category/Macetas'> Macetas </Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to ='/category/Fuentes'> Fuentes </Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to ='/category/Cuencos'> Cuencos </Link></NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <Nav.Link  ><Link to='/cart'><CartWidget /></Link></Nav.Link>
        </Container>
</Navbar>
    )
};
export default NavBar;
