import {Outlet} from "react-router-dom";
import NavBar from "./components/nav";
import Sidebar from "./components/sidebar";

export default function Admin(){

    return(
        <>
            <NavBar/>
        <div className="row g-0">
            <div className="col col-2">
            <Sidebar/>
            </div>
            <div className="col col-12 col-md-10 shadow-lg">
            <Outlet/>
            </div>
        </div>
        </>
    )
}