import {Container} from "react-bootstrap";
import { Journals,ArrowRightSquare,QuestionCircle,PencilSquare } from "react-bootstrap-icons";
import {Link} from "react-router-dom";
export default function Sidebar(){

    return(
        <>
            <div className="d-none d-md-block" style={{height:"90vh",backgroundColor:"green"}}>
                <Container fluid>
                    {/* <span className="fw-bold mt-3 text-light"> Staff portal</span> */}
                    <div className="text-light d-flex  flex-column align-items-center" style={{width:"100%",paddingTop:"5em"}}>
                        <div className="mb-3 justify-content-start align-items-center d-flex gap-1" style={{ width:"100%"}}>
                        <Link to="" className="text-light " style={{textDecoration:"none"}}>
                            <Journals className="me-2"/>
                        <span className="fw-bold">
                            Records
                        </span>
                        </Link>
                        </div>
                        <div className="mb-3 justify-content-start align-items-center d-flex gap-1" style={{ width:"100%"}}>
                        <Link to="complains" className="text-light" style={{textDecoration:"none"}}>
                            <PencilSquare className="me-2"/>
                        <span className="fw-bold mb-2">
                            Complains
                        </span>
                        </Link>
                        </div>
                        <div className="mb-3 justify-content-start align-items-center d-flex gap-1" style={{width:"100%"}}>
                            <QuestionCircle className="me-2"/>
                        <span className="fw-bold mb-2">
                            Help center
                        </span>
                        </div>
                    </div>
                    {/* <div className="my-auto text-light">
                        <ArrowRightSquare style={{height:"2em",width:"3em"}}/>
                    </div> */}
                </Container>
            </div>
        </>
    )
}