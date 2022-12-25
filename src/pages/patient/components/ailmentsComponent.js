import AILMENTS from "./ailments";
import {Form} from "react-bootstrap";

export default function AilmentsComponent(){
    return(
        <>
        <div className="flex-wrap">
        {
            AILMENTS.map((ailment,idx)=>{
                return(
                    <div key={idx} className="d-flex gap-4">
                      {idx+1}.  <p>{ailment} </p><Form.Check value=""className="d-inline-block"/>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}