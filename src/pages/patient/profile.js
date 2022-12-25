import { Container,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import TOAST_CONFIG from "../../components/toastConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader";
import { useEffect,useState } from "react";
import axios from "axios";

const token = localStorage.getItem("hsdp_token");
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Profile(){
    const navigate = useNavigate();
    const [profile,setProfile] = useState({});

    const fetchProfile = async ()=>{
        const {data:response} = await axios.get(`${SERVER_URL}/patient/profile`,{
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
        setProfile(response.data);
    }


    useEffect(()=>{
        fetchProfile()
    },[])

    const navigateToComplain = ()=>navigate("complain");
    return(
        <>
            <Container>
                <div className="shadow-md bg-secondary ps-2 py-2 mb-4" style={{height:"7vh",width:"100%"}}>
                    <span className="fs-5 fw-bold text-light">Profile</span>
                </div>
                <div className="row g-2 shadow-lg px-2 py-3">
                    {
                        Object.keys(profile).length < 1 ? 
                        <Loader/> :
                        <>
                    <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                        {/* <div className="bg-dark text-light text-center" style={{height:"5em", width:"5em"}}>
                            Image
                        </div> */}
                        <div className="text-center" style={{width:"100%"}}>
                        <img src={`${SERVER_URL}/images/${profile.imageUrl}`} className="text-center" style={{height:"5em", width:"5em"}}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex d-md-block align-items-center flex-column">
                        <div className="d-flex gap-1 mb-3">
                            <span>Name :</span>
                            <span>{profile.firstname} {profile.middlename} {profile.lastname}</span>
                        </div>

                        <div className="d-flex gap-1 mb-3">
                            <span>Email :</span>
                            <span>{profile.email}</span>
                        </div>

                        <div className="d-flex gap-1 mb-3">
                            <span>Matric Number :</span>
                            <span>{profile.matricNumber}</span>
                        </div>

                        <div className="d-flex gap-1 mb-3">
                            <span>Faculty :</span>
                            <span>{profile.faculty}</span>
                        </div>

                        <div className="d-flex gap-1 mb-3">
                            <span>Department :</span>
                            <span>{profile.department}</span>
                        </div>

                        <div className="d-flex gap-1 mb-3">
                            <span>Gender :</span>
                            <span>{profile.gender}</span>
                        </div>

                        <div className="d-flex gap-1 mb-3">
                            <span>Blood Group :</span>
                            <span> {profile.bloodGroup}</span>
                        </div>
                        <div className="text-center mt-3">
                            <Button className="rounded-0" variant="outline-success" onClick={navigateToComplain}>
                                Log a Complain
                            </Button>
                        </div>
                    </div>
                        </>
                    }
                </div>
            </Container>
        </>
    )
}