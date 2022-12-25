import {Outlet} from "react-router-dom";
import NavBar from "./components/navbar";


export default function Patient(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}