import { Container,Button,Modal,Card,Form } from "react-bootstrap";
import RecordsTable from "./components/recordsTable";
import {PersonAdd,People} from "react-bootstrap-icons";
import TOAST_CONFIG from "../../../components/toastConfig";
import { useState,useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("hsdp_token")


export default function Records(){
        const [open,setOpen] = useState(false);
        const [patients,setPatients] = useState([]);
        const [flag,setFlag] = useState(false);

        const toggleFlag = ()=>setFlag(!flag);

        const fetchRecords = async()=>{
            const {data:response} = await axios.get(`${SERVER_URL}/patients`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });
            if(!response){
                toast.error("something went wrong",TOAST_CONFIG);
            }
            if(!response.success || response.error){
                toast.error(response.message,TOAST_CONFIG);
            }
            console.log(response.data);
            setPatients(response.data);
        }



        const handleSubmit = async(e)=>{
            e.preventDefault();
            const data = new FormData(e.target);
            try{
                const {data:response} = await axios.post(`${SERVER_URL}/patient/new`,data,{
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                });
                if(!response){
                    toast.error("something went wrong",TOAST_CONFIG);
                }
                if(!response.success |response.error){
                    toast.error(response.message,TOAST_CONFIG);
                }
                toast.success(response.message,TOAST_CONFIG);
                setOpen(false);
                toggleFlag();
            }catch(err){
                toast.err(err,TOAST_CONFIG);
                setOpen(false);
            }
        }

        useEffect(()=>{
            fetchRecords();
        },[flag])

    return(
        <>
            <div style={{width:"100%",minHeight:"90vh",overflowY:"scroll"}}>
                <Container className="pt-2" style={{backgroundColor:"lightgray",minHeight:"90vh"}}>
                    <div className="ps-2 shadow-lg d-flex justify-content-between"  style={{height:"3em",backgroundColor:"green"}}>
                        <h3 className="text-light">Patients Records</h3>
                        <div className="py-2 me-2">
                        <Button className="shadow-lg btn-warning text-light rounded-0 btn-sm" onClick={()=>setOpen(true)}>
                            <PersonAdd/>
                            Add New Record
                        </Button>
                        </div>
                    </div>
                    <div className="shadow-lg bg-light mt-2">
                        <RecordsTable props={patients} toggleFlag={toggleFlag}/>
                    </div>
                </Container>
            </div>
            <Modal show={open} onHide={()=>setOpen(false)}>
                <Modal.Body>
                <Card>
                    <Card.Body>
                        <p className="fw-bold text-center">Add new patient record <PersonAdd style={{height:"30px",width:"30px"}}/> </p>
                        <Form onSubmit={handleSubmit}>
                              {/* <span className="fw-bold " style={{fontSize:"12px",color:"gray"}}>names</span>  */}
                              <Form.Control type="text" name="firstname" placeholder="enter firstname" className="mb-2"/>
                              <Form.Control type="text" name="middlename" placeholder="enter middlename" className="mb-2"/>
                              <Form.Control type="text" name="lastname" placeholder="enter lastname" className="mb-2"/>
                              <Form.Control  type="email" name="email" placeholder="enter email" className="mb-2"/>
                              <Form.Control type="text" name="password" placeholder="enter password" className="mb-2"/>
                              <Form.Control type="file" placeholder="select image" className="mb-2" name="picture"/>
                              <Form.Control type="tel" name="phone" placeholder="enter phone number" className="mb-2"/>
                              <Form.Control type="text" placeholder="enter matric number" name="matricNumber" className="mb-2"/>
                              <Form.Select name="gender" className="mb-2">
                                <option>--select gender--</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                              </Form.Select>
                              <Form.Select name="bloodGroup">
                                <option>--select blood group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O=">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                              </Form.Select>
                              <Form.Control type="faculty" name="faculty" placeholder="enter faculty" className="mb-2"/>
                              <Form.Control type="department" name="department" placeholder="enter department" className="mb-2"/>
                              <Form.Select name="religion" className="mb-2">
                                <option>--select religion--</option>
                                <option value="islam">Islam</option>
                                <option value="christianity">Christianity</option>
                                </Form.Select>
                                <Form.Control type="text" name="nationality" placeholder="enter nationality" className="mb-2"/>
                                <Form.Control type="text" name="stateOfOrigin" placeholder="enter state of origin" className="mb-2"/>
                                <Form.Control type="text" name="lga" placeholder="enter local government area" className="mb-2"/>
                                <Form.Control type="text" name="residentialAddress" placeholder="enter residential address" className="mb-2"/>
                                <Form.Select name="maritalStatus">
                                    <option>-- select status</option>
                                    <option value="married">Married</option>
                                    <option value="single">Single</option>
                                </Form.Select>
                                <Form.Control type="text" name="occupation" placeholder="enter occupation" className="mb-2"/>
                                <p className="fw-bold text-center">Next of Kin Data <People style={{height:"25px",width:"25px"}}/></p>
                                <Form.Control type="text" name="nextOfKinFullname" placeholder="enter next of kin full name" className="mb-2"/>
                                <Form.Control type="text" name="nextOfKinAddress" placeholder="enter next of kin address" className="mb-2"/>
                                <Form.Control type="email" name="nextOfKinEmail" placeholder="enter next of kin email" className="mb-2"/>
                                <Form.Control type="tel" name="nextOfKinPhone" placeholder="enter next of kin phone number" className="mb-2"/>
                                <Form.Select name="relationship" placeholder="select relationship with next of kin" className="mb-3">
                                    <option>--select relationship</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="son">Son</option>
                                    <option value="daughter">Daughter</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="uncle">Uncle</option>
                                    <option value="aunty">Aunty</option>
                                    <option value="husband">Husband</option>
                                    <option value="wife">Wife</option>
                                </Form.Select>
                                <div className="text-center">
                                    <Button className="shadow-lg btn-lg btn-success rounded-0" type="submit">
                                        Submit
                                    </Button>
                                </div>
                        </Form> 
                    </Card.Body>
                </Card>
                </Modal.Body>
            </Modal>
        </>
    )
}