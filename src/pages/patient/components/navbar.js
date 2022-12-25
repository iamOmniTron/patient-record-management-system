import {Nav,Navbar,Container} from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom";
import {PersonFill,ArrowLeftSquare,PencilSquare} from "react-bootstrap-icons";

export default function NavBar(){
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("hsdp_token");
    navigate("/");
  }
    return(
        <>
            <Navbar bg="success" expand="lg" variant="dark" className="mb-5" style={{borderBottom:"1px solid red"}}>
        <Container>
          <Navbar.Brand className="ms-3 d-flex align-items-center">
            <Link to="/">
          <img src="/nsukLogo.png" width="50" height="40" alt="portal logo" className="pe-2 d-inline-block align-top rounded"/>
            </Link>
            <div className="d-flex flex-column">
                <span className="fw-bold fs-4">NASARAWA STATE UNIVERSITY KEFFI</span>
                <span className="fs-6">HEALTH SERVICE DEPARTMENT PORTAL</span>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="toggle-nav" />
            <Navbar.Collapse id="toggle-nav">
          <Nav className="ms-auto text-light">
              <Nav.Link className="d-flex align-items-center me-2 text-light"  style={{textDecoration:"none"}}>
                    <Link to="/patient" className="text-light" style={{textDecoration:"none"}}>
                        <PersonFill/>
                        Profile
                    </Link>
                </Nav.Link>
            <Nav.Link className="text-light d-flex align-items-center me-2"  style={{textDecoration:"none"}}>
            <Link to="complain" className="text-light" style={{textDecoration:"none"}}>
              <PencilSquare/>
                Complain
            </Link>
            </Nav.Link>
            <Nav.Link className="text-light d-flex align-items-center me-2"  style={{textDecoration:"none"}}>
            <div className="text-light" style={{textDecoration:"none"}} onClick={()=>handleLogout()}>
                <ArrowLeftSquare className="pe-1"/>
                Logout
            </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}