import { Nav, Navbar, NavLink, NavDropdown, Container, Button, Form, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Css/Navigation.css"
import "./Css/fonts.css"

export const NavigationBar = ({}) => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header >
      <Navbar className={`navbar ${isHome ? "home" : ""}`} collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/" isActive={() => location.pathname === "/"} className="justify-content-left text">

            <img src={require('./Images/Logo.png')} alt="Logo" width={"80px"} height={"80px"} />
          </Navbar.Brand>

          <Navbar.Toggle className="text" aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="text" >
              <NavLink className="text1" eventKey="1" as={Link} to="/" exact={true} isActive={() => location.pathname === "/"}>Naslovna</NavLink>
              <NavLink className="text1" eventKey="2" as={Link} to="/Activities" isActive={() => location.pathname.includes("/Activities")}>Aktivnosti</NavLink>
              <NavLink className="text1" eventKey="3" as={Link} to="/AboutUs" isActive={() => location.pathname.includes("/AboutUs")}>O nama</NavLink>
              <NavLink className="button1" eventKey="4" as={Link} to="/LogIn"><button>Prijavi se</button></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  );
}