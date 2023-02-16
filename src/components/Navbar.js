import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "./logo.png";
import "../styles/navbar.css";

const NavHeader = () => {
  return (
    <div className="navbar-header">
      <div className="logo-container">
        <Navbar.Brand className="nav-intro" href="#home">
          <Link className="logo-wrapper" isDynamic smooth spy to="home">
            <img className="logo" src={logo} alt="ETHAN" />
          </Link>
        </Navbar.Brand>
      </div>
      <div className="section-container">
        <Nav className="ml-auto">
          <Nav.Link href="#about">
            <Link activeClass="active" className="section-title" isDynamic smooth spy to="about">
              ABOUT
            </Link>
          </Nav.Link>
          <Nav.Link href="#projects">
            <Link activeClass="active" className="section-title" isDynamic smooth spy to="projects">
              PROJECTS
            </Link>
          </Nav.Link>
          <Nav.Link href="#contact">
            <Link activeClass="active" className="section-title" isDynamic smooth spy to="contact">
              CONTACT
            </Link>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default NavHeader;
