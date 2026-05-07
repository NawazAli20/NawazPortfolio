import Home from "./components/home";
import Profile from "./components/Profile";
import Publications from "./components/publications";
import Teaching from "./components/teaching";
import Grants from "./components/grants";
import Projects from "./components/projects";
import Appointments from "./components/Appointments";
import Awards from "./components/awards";
import Services from "./components/services";
import './assets/navbar.css';

import { BrowserRouter, HashRouter, Routes, Route, Link } from "react-router-dom";


import {NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        
        {/* Left: Name / Brand */}
        {/* <div className="nav-brand">
          <Link to="/">Dr. Nawaz Ali</Link>
        </div> */}

        {/* Right: Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/teaching">Teaching</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/grants">Grants</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/awards">Awards</NavLink>
          <NavLink to="/services">Services</NavLink>
        </nav>

      </div>
    </header>
  );
}

function App(){
  //   const basename = process.env.NODE_ENV === "production" 
  // ? "/NawazPortfolio" 
  // : "/";

{/* <BrowserRouter basename={basename}></BrowserRouter> */}
    return(
        <>
            <HashRouter>
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
                    <Route path="/awards" element={<Awards/>}/>
                    <Route path="/services" element={<Services/>}/>
                </Routes>
            </HashRouter>
        </>
    )

}
export default App;