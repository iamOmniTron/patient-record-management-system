import {Container,Form,Button} from "react-bootstrap";
import AilmentsComponent from "./components/ailmentsComponent";
import DiseasesComponent from "./components/diseasesComponent";
import {useState} from "react";
import axios from "axios";


const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("hsdp_token");

export default function Complain(){
    const [complain,setComplain] = useState("");
    const [previousAilment,setPreviousAilment] = useState("");
    const [isDrinker,setIsDrinker] = useState(false);
    const [drinkingAmount,setDrinkingAmount] = useState(0);
    const [isSmoker,setIsSmoker] = useState(false);
    const [smokingAmount,setSmokingAmount] = useState(0);
    const [ailments,setAilments] = useState([]);
    const [diseases,setDiseases] = useState([]);
    const handleSubmit = async (e)=>{
        e.preventDefault();

    }

    return(
        <>
            <Container>
            <div className="shadow-md bg-secondary ps-2 py-2 mb-4" style={{height:"7vh",width:"100%"}}>
                    <span className="fs-5 fw-bold text-light">Log a Complain</span>
            </div>
            <div className="shadow-lg p-3">
                <Form style={{width:"100%"}}>
                    <Form.Control className="rounded-0 mb-2" name="complaint" as="textarea" rows={5} placeholder="enter your complain" onChange={(e)=>setComplain(e.target.value)}/>
                    <Form.Control type="text" name="previousAilment" placeholder="enter previous ailment" className="mb-2 rounded-0" onChange={(e)=>setPreviousAilment(e.target.value)}/>
                    <span className="my-2 fw-bold text-center">Have you or your immediate family suffered from or do you suffer from any of the following?</span>
                    <AilmentsComponent/>
                    <div className="d-flex flex-column gap-2 mb-2">
                        <div className="d-flex gap-4">
                            <span>Do you smoke?</span>
                            <Form.Check type="radio" name="smoker"/>
                            <div className="d-flex">
                            <span style={{width:"100%"}}>If yes, How many per day?</span>
                            <Form.Control type="number" skip={1}/>
                            </div>
                        </div>
                        <div className="d-flex gap-4">
                            <span>Do you Take Alcohol?</span>
                            <Form.Check type="radio" name="smoker"/>
                            <div className="d-flex">
                            <span style={{width:"100%"}}>If yes, How many per day?</span>
                            <Form.Control type="number" skip={1}/>
                            </div>
                        </div>
                    </div>
                </Form>
                <div className="mt-3">
                    <span className="my-2 fw-bold text-center">
                        Have you been Immunized against any of the following?
                    </span>
                    <DiseasesComponent/>
                </div>
                <div className="text-center">
                    <Button className="btn-success shadow-lg btn-lg" style={{width:"20vw"}}>
                        SUBMIT
                    </Button>
                </div>
            </div>
            </Container>
        </>
    )
}