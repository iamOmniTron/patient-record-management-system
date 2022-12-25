import { Container } from "react-bootstrap";
import ComplainsTable from "./components/complainsTable";
import toast from "react-hot-toast";
import axios from "axios";
import {useState,useEffect} from "react";
import TOAST_CONFIG from "../../../components/toastConfig";

const token = localStorage.getItem("hsdp_token");
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default function Complains(){
    const [complains,setComplains] = useState([]);

    const fetchComplains = async ()=>{
        const {data:response} = await axios.get(`${SERVER_URL}/complains`,{
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
        setComplains(response.data);
    }

    useEffect(()=>{
        fetchComplains();
    },[])



    return(
        <>
            <div style={{width:"100%",minHeight:"90vh",overflowY:"scroll"}}>
                <Container className="pt-2" style={{backgroundColor:"lightgray",minHeight:"90vh"}}>
                    <div className="ps-2 shadow-lg"  style={{height:"2em",backgroundColor:"green"}}>
                        <h3 className="text-light">Patients Complain</h3>
                    </div>
                    <div className="shadow-lg bg-light mt-2">
                        <ComplainsTable props={complains}/>
                    </div>
                </Container>
            </div>
        </>
    )
}