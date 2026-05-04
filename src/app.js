import Home from "./components/home";
import Profile from "./components/Profile.js";
import Publications from "./components/publications.js";
import Teaching from "./components/teaching.js";
import Grants from "./components/grants.js";
import Projects from "./components/projects.js";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function NavBar(){
 return(
    <>
        <nav className="nav">
            <div className="elem"><Link to="/">Home</Link></div>
            <div className="elem"><Link to="/profile">Profile</Link></div>
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