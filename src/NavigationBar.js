import { Nav, Navbar, NavLink, NavDropdown, Container, Button, Form, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Css/Navigation.css"
import "./Css/fonts.css"
import {isAuthenticated, logOut} from "./UserAuth";
import {Collapse, List, ListItemButton, ListItemText, ListSubheader, Menu, MenuItem} from "@mui/material";
import {useState} from "react";


export const NavigationBar = ({}) => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isLogged = isAuthenticated();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   const goToProfile = () => {
     window.location.pathname = "/Profile";
  };

  return (
      !isLogged ?
    <>
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
              <NavLink className="text1" eventKey="1" as={Link} to="/"  isActive={() => location.pathname === "/"}>Naslovna</NavLink>
              <NavLink className="text1" eventKey="2" as={Link} to="/Activities" isActive={() => location.pathname.includes("/Activities")}>Aktivnosti</NavLink>
              <NavLink className="text1" eventKey="3" as={Link} to="/AboutUs" isActive={() => location.pathname.includes("/AboutUs")}>O nama</NavLink>
              <NavLink className="button1" eventKey="4" as={Link} to="/LogIn"><button>Prijavi se</button></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> :
    <>
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
              <NavLink className="text1" eventKey="1" as={Link} to="/"  isActive={() => location.pathname === "/"}>Naslovna</NavLink>
              <NavLink className="text1" eventKey="2" as={Link} to="/Activities" isActive={() => location.pathname.includes("/Activities")}>Aktivnosti</NavLink>
              <NavLink className="text1" eventKey="3" as={Link} to="/AboutUs" isActive={() => location.pathname.includes("/AboutUs")}>O nama</NavLink>
                <div>
                <Button
                className={"profileButton"}
                onClick={handleClick}
              >
                Profil
              </Button>
              <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
              >
                <MenuItem className="dropdownMenu" as={Link} to="/Profile" isActive={() => location.pathname.includes("/AboutUs")}>Profile</MenuItem>
                <MenuItem onClick={logOut} className="dropdownMenu">Logout</MenuItem>
              </Menu>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>

  );
}
