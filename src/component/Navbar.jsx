import React, { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contex/AuthContext";

function NavbarSipenting() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user = false, logout } = useContext(AuthContext);

  const getNavLinkStyle = (path) => {
    if (path === location.pathname) {
      return { color: "#54BCA4", fontWeight: "bold" };
    }
    return {};
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    // Redirect to the home page after logout
  };

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="nav shadow-sm">
      <Container>
        <Navbar.Brand href="#logo">
          <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png" alt="" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={NavLink} exact={true.toString()} to="/" className="nav-link active pe-5" style={getNavLinkStyle("/")}>
              Beranda
            </Nav.Link>
            <Nav.Link as={NavLink} exact={true.toString()} to="/konsultasi" className="nav-link pe-5" style={getNavLinkStyle("/konsultasi")}>
              Konsultasi
            </Nav.Link>
            <Nav.Link as={NavLink} exact={true.toString()} to="/cekgizi" className="nav-link pe-5" style={getNavLinkStyle("/cekgizi")}>
              Cek Gizi
            </Nav.Link>
            <Nav.Link as={NavLink} exact={true.toString()} to="/artikel" className="nav-link pe-5" style={getNavLinkStyle("/artikel")}>
              Artikel
            </Nav.Link>
          </Nav>
          {user ? (
            <>
              <Button variant="outline-success me-4" className="btndaftar">
                Daftar
              </Button>
              <Button variant="outline-success" className="btnmasuk">
                Masuk
              </Button>
            </>
          ) : (
            <Button variant="outline-success" onClick={handleLogout} className="btnmasuk">
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSipenting;
