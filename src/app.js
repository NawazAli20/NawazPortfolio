import Home from "./components/home";
import Profile from "./components/Profile";
import Publications from "./components/publications";
import Teaching from "./components/teaching";
import Grants from "./components/grants";
import Projects from "./components/projects";
import Appointments from "./components/Appointments";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function NavBar(){
 return(
    <>
        <nav className="nav">
            <div className="elem"><Link to="/">Home</Link></div>
            <div className="elem"><Link to="/profile">Profile</Link></div>
            <div className="elem"><Link to="/appointments">Professional-Appointments</Link></div>
            <div className="elem"><Link to="/teaching">Teaching</Link></div>
            <div className="elem"><Link to="/publications">Publications</Link></div>
            <div className="elem"><Link to="/grants">Grants</Link></div>
            <div className="elem"><Link to="/projects">Projects</Link></div>
        </nav>
    
    </>
 );
}

function App(){
    const basename = process.env.NODE_ENV === "production" 
  ? "/NawazPortfolio" 
  : "/";

{/* <BrowserRouter basename={basename}></BrowserRouter> */}
    return(
        <>
            <BrowserRouter basename={basename}>
                <NavBar/>
                <Home/> {/** default route*/}
                <Routes>
                    {/* <Route path="/" element={<Home/>}/> */}
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/appointments" element={<Appointments/>}/>
                    <Route path="/teaching" element={<Teaching/>}/>
                    <Route path="/publications" element={<Publications/>}/>
                    <Route path="/grants" element={<Grants/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App;