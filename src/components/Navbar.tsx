import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const [showSide, SetShowSide] = useState("none");
    
    const handleSide = () => {
        if (showSide === "none") {
            SetShowSide("flex");
        }
        else {
            SetShowSide("none");
        }
    }

    return (
        <nav className="nav">
            <NavLink to="/" >
                <img src="/logo.svg" alt="logo" className="nav-logo"/>
            </NavLink>
            <img src="/menu.svg" alt="menu" className="nav-menu" onClick={handleSide}/>
            <div className="nav-links" style={{display: showSide}}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/experiences">Experiences</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}