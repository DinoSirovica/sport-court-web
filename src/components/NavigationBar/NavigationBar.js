import { Nav, Navbar, NavLink, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css"
import "../../css/fonts.css"
import {isAuthenticated, logOut} from "../../util/auth";
import { Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import {getUserProfile} from "../../util/apiRequestHelper";
import {getImageFromBase64} from "../../util/helper";
import Avatar from "@mui/material/Avatar";


export const NavigationBar = ({}) => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isLogged = isAuthenticated();
  const [image,setImage] = useState(null);

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

   const getImage = async () => {
     if (isLogged) {
       const user = await getUserProfile();
       setImage(user.imageData);
     }
   }

   if(isLogged){
     getImage();
     return (<>
       <Navbar className={`navbar ${isHome ? "home" : ""}`} collapseOnSelect expand="sm">
         <Container>
           <Navbar.Brand as={Link} to="/" isActive={() => location.pathname === "/"} className="justify-content-left text">

             <img src={require('../../images/logo.png')} alt="Logo" width={"80px"} height={"80px"} />
           </Navbar.Brand>

           <Navbar.Toggle className="text" aria-controls="responsive-navbar-nav">
             <span className="navbar-toggler-icon"></span>
           </Navbar.Toggle>

           <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
             <Nav className="text" >
               <NavLink className="text1" eventKey="1" as={Link} to="/"  isActive={() => location.pathname === "/"}>Naslovna</NavLink>
               <NavLink className="text1" eventKey="2" as={Link} to="/activities" isActive={() => location.pathname.includes("/activities")}>Aktivnosti</NavLink>
               <NavLink className="text1" eventKey="3" as={Link} to="/about-us" isActive={() => location.pathname.includes("/about-us")}>O nama</NavLink>
               <div>
                 <Button
                     className={"profileButton"}
                     onClick={handleClick}
                 >
                   <Avatar src={getImageFromBase64(image)} aria-label="recipe">
                   </Avatar>
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
                   <MenuItem className="dropdownMenu" as={Link} to="/profile" isActive={() => location.pathname.includes("/profile")}>Moj profil</MenuItem>
                   <MenuItem onClick={logOut} className="dropdownMenu">Odjava</MenuItem>
                 </Menu>
               </div>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     </>
     );
   }
   else{

   }
  return (
    <>
      <Navbar className={`navbar ${isHome ? "home" : ""}`} collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/" isActive={() => location.pathname === "/"} className="justify-content-left text">

            <img src={require('../../images/logo.png')} alt="Logo" width={"80px"} height={"80px"} />
          </Navbar.Brand>

          <Navbar.Toggle className="text" aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="text" >
              <NavLink className="text1" eventKey="1" as={Link} to="/"  isActive={() => location.pathname === "/"}>Naslovna</NavLink>
              <NavLink className="text1" eventKey="2" as={Link} to="/activities" isActive={() => location.pathname.includes("/Activities")}>Aktivnosti</NavLink>
              <NavLink className="text1" eventKey="3" as={Link} to="/about-us" isActive={() => location.pathname.includes("/AboutUs")}>O nama</NavLink>
              <NavLink className="button1" eventKey="4" as={Link} to="/login"><button>Prijavi se</button></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
