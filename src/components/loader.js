import {Spinner} from "react-bootstrap";

export default function Loader(){

    return (
        <>
            <div className="d-flex justify-content-center" style={{width:"100%"}}>
            <Spinner animation="border" variant="success" />
            </div>
        </>
    )
}