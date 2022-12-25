import {Navbar,Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <>
    <Navbar bg="light" expand="lg" variant="dark" style={{borderBottom:"1px solid gray",height:"10vh"}}>
        <Container fluid>
          <Navbar.Brand className="ms-3 d-flex align-items-center">
            <Link to="/">
          <img src="/nsukLogo.png" width="50" height="40" alt="portal logo" className="pe-2 d-inline-block align-top rounded"/>
            </Link>
            {/* <div className="d-flex flex-column">
                <span className="fw-bold fs-4">NASARAWA STATE UNIVERSITY KEFFI</span>
                <span className="fs-6">HEALTH SERVICE DEPARTMENT PORTAL</span>
            </div> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="toggle-nav" />
        </Container>
      </Navbar>
        </>
    )
}