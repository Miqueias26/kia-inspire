import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import KiaLogo from "../../../assets/img/Logo.png";
import "./Navbar.css";

const NavOf = () => {
  return (
    <>
      <div className="nav">
        <div className="brand-content">
          <img src={KiaLogo} alt="Kia logo" style={{ width: "180px" }} />
        </div>
        <div className="nav-bar-bootstarp">
          <Navbar expand="lg" className="mb-3">
            <Container fluid>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
              <Navbar.Offcanvas
                id="offcanvasNavbar-expand-sm"
                aria-labelledby="offcanvasNavbarLabel-expand-sm"
                placement="end"
                className="menu-Smart1"
              >
                <Offcanvas.Header closeButton className="menu-Smart2">
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                    <img
                      src={KiaLogo}
                      alt="Kia logo"
                      style={{ width: "130px" }}
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="custom-nav justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">MODELS</Nav.Link>
                    <Nav.Link href="#action2">RESERVATION</Nav.Link>
                    <Nav.Link href="#action3">OFFER</Nav.Link>
                    <Nav.Link href="#action4">TEST DRIVE</Nav.Link>
                    <Nav.Link href="#action4">CAR PLACE</Nav.Link>
                    <Nav.Link href="#action4">KIA CONECT</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};
export default NavOf;
