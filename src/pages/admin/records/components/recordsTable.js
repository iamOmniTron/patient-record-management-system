import {Table,Button,Modal,Card} from "react-bootstrap";
import { Trash,Journal } from "react-bootstrap-icons";
import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import TOAST_CONFIG from "../../../../components/toastConfig";
import Loader from "../../../../components/loader";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("hsdp_token");


export default function RecordsTable({props,toggleFlag}){
    const [patient,setPatient] = useState({});
    const [open,setOpen] = useState(false);

    const fetchPatient = async (id)=>{
        setOpen(true);
        const {data:response} = await axios.get(`${SERVER_URL}/patient/${id}`,{
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
        setPatient(response.data);
    }

    const handleDelete = async(id)=>{
        const {data:response} = await axios.post(`${SERVER_URL}/patient/delete/${id}`,{},{
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
        toggleFlag();
    }

    return(
        <>
            <Table bordered hover responsive size="lg">
                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>FULL NAME</td>
                        <td>MATRIC NUMBER</td>
                        <td>FACULTY</td>
                        <td>DEPARTMENT</td>
                        <td>BLOOD GROUP</td>
                        <td>ACTIONS</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props && props.map((student,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td  style={{minWidth:"16vw"}}>{student.firstname} {student.middlename} {student.lastname}</td>
                                    <td style={{minWidth:"16vw"}}>{student.matricNumber}</td>
                                    <td style={{minWidth:"16vw"}}>{student.faculty}</td>
                                    <td style={{minWidth:"16vw"}}>{student.department}</td>
                                    <td style={{minWidth:"16vw"}}>{student.bloodGroup}</td>
                                    <td style={{minWidth:"16vw"}} className="d-flex gap-1 px-2">
                                        <Button className="btn-success rounded-0" onClick={()=>fetchPatient(student.id)}>
                                            <Journal/>
                                            view
                                        </Button>
                                        <Button className="btn-danger rounded-0" onClick={()=>handleDelete(student.id)}>
                                            <Trash/>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal className="rounded-0 shadow-lg" show={open} onHide={()=>setOpen(false)}>
                <Modal.Body>
                    <Card className="rounded-0">
                        <Card.Body>
                            {
                                Object.keys(patient).length < 1 ? <Loader/>:
                                <>
                                <div className="d-flex flex-column gap-2">

                                    <div className="text-center">
                                        <img src={`${SERVER_URL}/images/${patient.imageUrl}`} style={{borderRadius:"50%"}}/>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Full Name :</span>
                                        <span className="ms-2"> {patient.firstname} {patient.middlename} {patient.lastname}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Matric Number :</span>
                                        <span className="ms-2"> {patient.matricNumber}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Faculty :</span>
                                        <span className="ms-2">{patient.faculty}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Department :</span>
                                        <span className="ms-2">{patient.department}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Email :</span>
                                        <span className="ms-2">{patient.email}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Phone :</span>
                                        <span className="ms-2">{patient.phone}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Religion :</span>
                                        <span className="ms-2">{patient.religion}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Blood Group :</span>
                                        <span className="ms-2">{patient.bloodGroup}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Nationality :</span>
                                        <span className="ms-2">{patient.nationality}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">State of Origin :</span>
                                        <span className="ms-2">{patient.stateOfOrigin}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Local Government Area :</span>
                                        <span className="ms-2">{patient.lga}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Marital Status :</span>
                                        <span className="ms-2">{patient.maritalStatus}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Occupation :</span>
                                        <span className="ms-2">{patient.occupation}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Next Of Kin :</span>
                                        <span className="ms-2">{patient.nextOfKinFullname}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Relationship :</span>
                                        <span className="ms-2">{patient.relationship}</span>
                                    </div>
                                </div>
                                </>
                            }
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    )
}