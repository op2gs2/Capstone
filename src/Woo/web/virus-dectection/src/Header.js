import { Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';

const Header = () => {
    return(
      <>
<Navbar bg="light" expand={false}>
  <Container fluid>
    
    <Navbar.Brand href="#"><img className="Logo" src="logo.png" width="40px" height="40px" />&nbsp;&nbsp;&nbsp; Ameba</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Select Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Details</Nav.Link>
          <Nav.Link href="#action2">Abouts</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
<div style={{backgroundColor: '#424242', 
color: '#FFFFFF', height: '50px', 
textAlign:'center', 
 paddingTop:'12px', marginBottom:'50px'}}>
    <p>Currunt selected menu</p>
</div>
  </>
    )}
export default Header;