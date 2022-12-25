import {Table,Button} from "react-bootstrap";


export default function ComplainsTable({props}){
    return(
        <>
            <Table bordered hover responsive size="lg">
                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>FULL NAME</td>
                        <td>MATRIC NUMBER</td>
                        <td>DATE</td>
                        <td>ACTIONS</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props && props.map((student,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td  style={{minWidth:"30vw"}}>{student.firstname} {student.middlename} {student.lastname}</td>
                                    <td>
                                        <Button className="rounded-0 btn-success">
                                            view
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}