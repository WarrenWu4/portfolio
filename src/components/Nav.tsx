import "./styles/nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {

    const [mode, setMode] = useState("light");
    const [menuIcon, setMenuIcon] = useState("/menu.svg")

    // Todo: add light/dark mode
    const changeMode = () => {
        setMode((mode==="light") ? "dark":"light");
        console.log("WIP")
    }

    // Todo: add sidebar
    const showSide = () => {
        setMenuIcon((menuIcon === "/menu.svg") ? "/close.svg":"/menu.svg");
        console.log("WIP");
    }


    return (
        <div className="nav">

            <NavLink to="/">
                <img src="/logo.svg" alt="logo" className="nav-icon"/>
            </NavLink>

            <img 
                src={menuIcon}
                alt="menu" 
                className="nav-icon menu"
                onClick={showSide}
            />

            <div className="nav-container">
                <div className="nav-links">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>

                <img 
                    src={(mode === "light") ? "./dark_mode.svg" : "./light_mode.svg"} 
                    alt="bruh" 
                    className="nav-mode"
                    onClick={changeMode}
                />
            </div>


        </div>
    )
}