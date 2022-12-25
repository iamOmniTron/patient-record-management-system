import Home from "./pages/home/index";
import Patient from "./pages/patient/patient";
import Profile from "./pages/patient/profile";
import Admin from "./pages/admin/admin";
import {Routes,BrowserRouter as Router,Route} from "react-router-dom";
import Complain from "./pages/patient/complain";
import Records from "./pages/admin/records/records";
import Complains from "./pages/admin/complains/complain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/patient" element={<Patient/>}>
          <Route path="" index element={<Profile/>}/>
          <Route path="complain" element={<Complain/>}/>
        </Route>
        <Route path="admin" element={<Admin/>}>
          <Route index element={<Records/>}/>
          <Route path="complains" element={<Complains/>}/>
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
