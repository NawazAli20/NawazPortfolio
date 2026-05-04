import Home from "./components/home";
import Profile from "./components/Profile";
import Publications from "./components/publications";
import Teaching from "./components/teaching";
import Grants from "./components/grants";
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
        </nav>
    
    </>
 );
}

function App(){
    return(
        <>
            <BrowserRouter>
                <NavBar/>
                <Home/> {/** default route*/}
                <Routes>
                    {/* <Route path="/" element={<Home/>}/> */}
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/teaching" element={<Teaching/>}/>
                    <Route path="/publications" element={<Publications/>}/>
                    <Route path="/grants" element={<Grants/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App;