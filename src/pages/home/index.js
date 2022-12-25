import {useState} from "react";
import {Container,Button,Card,Modal,Form,Navbar} from "react-bootstrap";
import { MortarboardFill,PersonBadge } from "react-bootstrap-icons";
import {Link} from "react-router-dom"
import toast from "react-hot-toast"
import axios from "axios";
import TOAST_CONFIG from "../../components/toastConfig";
import {useNavigate} from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Home(){
    const [studentOpen,setStudentOpen] = useState(false);
    const [staffOpen,setStaffOpen] = useState(false);
    const [email,setEmail] = useState("");
    const [matricNumber,setMatricNumber] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();


    const handleStudentSubmit = async ()=>{
        try{
            const {data:response} = await axios.post(`${SERVER_URL}/patient/login`,{
                matricNumber,password
            },{});
            if(!response){
                toast.error("cannot log in",TOAST_CONFIG);
            }
            if(!response.success){
                toast.error(response.message,TOAST_CONFIG);
            }
            localStorage.setItem("hsdp_token",response.data);
            setTimeout(()=>navigate("/patient"),2000);
        }catch(err){
            toast.error(err.message,TOAST_CONFIG);
        }
    }

    const handleStaffSubmit = async ()=>{
        try{
            const {data:response} = await axios.post(`${SERVER_URL}/admin/login`,{
                email,password
            });
            console.log("here");
            if(!response){
                toast.error("cannot log in",TOAST_CONFIG);
            }
            if(!response.success){
                toast.error(response.message,TOAST_CONFIG);
            }
            localStorage.setItem("hsdp_token",response.data);
            setTimeout(()=>navigate("/admin"),2000);
        }catch(err){
            console.log(err)
            toast.error("error occured",TOAST_CONFIG);
        }
    }


    return(
        <>

            <div className="vh-100 vw-100">
            <Navbar bg="success" expand="lg" fixed="top" variant="dark" className="mb-5" style={{borderBottom:"1px solid red"}}>
                <Container>
                <Navbar.Brand className="ms-3 d-flex align-items-center">
                    <Link to="/">
                <img src="/nsukLogo.png" width="60" height="50" alt="portal logo" className="pe-2 d-inline-block align-top rounded"/>
                    </Link>
                    </Navbar.Brand>
                    <div className="d-flex flex-column text-light ms-4 text-center" style={{width:"100%"}}>
                        <span className="fw-bold fs-4">NASARAWA STATE UNIVERSITY KEFFI</span>
                        <span className="fs-6">HEALTH SERVICE DEPARTMENT PORTAL</span>
                    </div>
                </Container>
            </Navbar>
            <Container className="d-flex vh-100 justify-content-center align-items-center" style={{minHeight:'100vh'}}>
               <Card className="shadow-lg" style={{minWidth:"40vw",minHeight:"40vh"}}>
                     <div className="text-center my-3">
                     <img src="/nsukLogo.png" height="100" width="100" alt="nsuk logo" className="text-center"/>
                     </div>
                    <div className="mx-2 d-flex gap-2 mb-3 flex-column">
                        <Button className="btn-lg rounded-0" variant="outline-primary" onClick={()=>setStudentOpen(true)}>Login as a Student <MortarboardFill/></Button>
                        <Button className="btn-lg rounded-0" variant="outline-success" onClick={()=>setStaffOpen(true)}>Login as a Staff <PersonBadge/></Button>
                    </div>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <span className="text-success ms-2 mt-2">forgot password?</span>
                        </Link>
               </Card>
            </Container>
            </div>
            <Modal show={studentOpen} onHide={()=>setStudentOpen(false)} centered className="p-3 rounded-0">
                <Modal.Body>
                    <Card className="rounded-0">
                        <Card.Header className="d-flex flex-column align-items-center">
                            <MortarboardFill style={{height:"5em",width:"5em"}}/>
                        <span className="text-center fw-bold">Login as a student</span>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Control type="text" placeholder="input your matric number" className="mb-2 rounded-0" onChange={(e)=>setMatricNumber(e.target.value)}/>
                                <Form.Control type="password" placeholder="input your password" className="mb-2 rounded-0" onChange={(e)=>setPassword(e.target.value)}/>
                                <div className="text-center">
                                    <Button className="btn-primary btn-lg rounded-0" onClick={handleStudentSubmit}>Login</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>

            <Modal show={staffOpen} onHide={()=>setStaffOpen(false)} centered className="p-3 rounded-0">
                <Modal.Body>
                    <Card className="rounded-0">
                    <Card.Header className="d-flex flex-column align-items-center">
                            <PersonBadge style={{height:"5em",width:"5em"}}/>
                        <span className="text-center fw-bold">Login as a staff</span>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Control type="text" placeholder="input your staff email" className="mb-2 rounded-0" onChange={(e)=>setEmail(e.target.value)}/>
                                <Form.Control type="password" placeholder="input your password" className="mb-2 rounded-0" onChange={(e)=>setPassword(e.target.value)}/>
                                <div className="text-center">
                                    <Button className="btn-success btn-lg rounded-0" onClick={()=>handleStaffSubmit()}>Login</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    )
}