import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "./logo.png";
import "../styles/navbar.css";

const NavHeader = () => {
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="navbar-header">
        <Navbar.Brand className="nav-intro" href="#home">
          <Link activeClass="active" isDynamic smooth spy to="home">
            <img
              style={{ width: "20%", height: "20%" }}
              src={logo}
              alt="ETHAN"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">
              <Link activeClass="active" isDynamic smooth spy to="about">
                ABOUT
              </Link>
            </Nav.Link>
            <Nav.Link href="#projects">
              <Link activeClass="active" isDynamic smooth spy to="projects">
                PROJECTS
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link activeClass="active" isDynamic smooth spy to="contact">
                CONTACT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
