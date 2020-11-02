import React from "react"
import "./Menu.scss"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Menu = props => {
  return (
    <Navbar bg="dark" className="navbar-app" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1604287723/Proyectos/portafolio/Pink_Outlet_eBay_Logo_zntzhx.svg"
            alt=""
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link>
            <Link to="/">Inicio</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/skills">Skills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/projects">Proyectos</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
