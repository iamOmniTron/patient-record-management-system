import DISEASES from "./diseases";
import {Form} from "react-bootstrap";

export default function DiseasesComponent(){

    return(
        <>
            {
                DISEASES.map((disease,idx)=>{
                    return(
                        <div key={idx} className="d-flex gap-4">
                        {idx+1}.  <p>{disease} </p><Form.Check className="d-inline-block"/>
                      </div>
                    )
                })
            }
        </>
    )
}