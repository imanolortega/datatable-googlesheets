import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarAv = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar-expand-md fixed-top nav-dark"
      variant="dark">
      <Navbar.Brand href="#home">
        <a className="navbar-brand nav-dark" href="#">
          <img className="logo" src="faya-unse.png" alt="" />
        </a>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Nav className="mr-3">
          <NavDropdown
            className="mr-2"
            title="Carreras"
            id="collasible-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}>
            <NavDropdown.Item href="#agronomia">
              Ing. Agronómica
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#alimentos">
              Ing. en Alimentos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#biotecnologia">
              Lic. en Biotecnología
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#licquimica">
              Lic. en Química
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#profquimica">
              Prof. en Química
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#tua">
              Tec. Univ. en Apicultura
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#consultas">Consultas</Nav.Link>
        </Nav>

        <Nav>
          <div>
            <a
              href="http://faya.unse.edu.ar/"
              className="btn btn-outline-success">
              Sitio Web FAyA
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarAv;
