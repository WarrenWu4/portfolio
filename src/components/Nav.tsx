import "./styles/nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsHouseDoorFill, BsFillPersonFill, BsFolderFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io"

export default function Nav(props: {currLoc:string}) {

    const [mode, setMode] = useState("light");
    const [menuIcon, setMenuIcon] = useState("/menu.svg");
    const [showTop, setShowTop] = useState("translateY(-110%)");
    const [displayBool, setDisplayBool] = useState("flex");

    const changeMode = () => {
        setMode((mode==="light") ? "dark":"light");
        if (mode === "light") {
            document.documentElement.style.setProperty('--neutral-0', "#222326")
            document.documentElement.style.setProperty('--neutral-500', "#F7F7F7")
            document.documentElement.style.setProperty('--neutral-360', "#C2B9AA")
            document.documentElement.style.setProperty('--neutral-380', "#C2B9AA")
            document.documentElement.style.setProperty('--fade-100', "rgba(0, 0, 0, 1)")
            setMenuIcon((menuIcon === "/menu.svg" || menuIcon === "/menu_dark.svg") ? "/menu_dark.svg":"/close_dark.svg") 
        }
        else {
            document.documentElement.style.setProperty('--neutral-0', "#fff")
            document.documentElement.style.setProperty('--neutral-500', "#000000")
            document.documentElement.style.setProperty('--neutral-360', "#7A7B7D")
            document.documentElement.style.setProperty('--neutral-380', "#4E4F51")
            document.documentElement.style.setProperty('--fade-100', "rgba(0, 0, 0, 0.25)")
            setMenuIcon((menuIcon === "/menu.svg" || menuIcon === "/menu_dark.svg") ? "/menu.svg":"/close.svg") 

        }
    }

    const showSide = () => {
        if (mode === "light") {
            setMenuIcon((menuIcon === "/menu.svg") ? "/close.svg":"/menu.svg");
        }
        else {
            setMenuIcon((menuIcon === "/menu_dark.svg") ? "/close_dark.svg":"/menu_dark.svg");
        }
        setShowTop((showTop === "translateY(-110%)") ? "translateY(0)":"translateY(-110%)");
    }

    useEffect(() => {
        const changeNav = () => {
            if (window.innerWidth >= 768) {
                setMenuIcon((mode==="light")? "/menu.svg":"/menu_dark.svg");
                setShowTop("translateY(-110%)");
                setDisplayBool("none");
            }
            else {
                setDisplayBool("flex");
            }
        }

        window.addEventListener("resize", changeNav)

        return () => {
            window.removeEventListener("resize", changeNav);
        }
    })

    useEffect(() => {
        setShowTop("translateY(-110%)");
    }, [props.currLoc])
    


    return (
        <div className="nav">

            <NavLink to="/">
                <img src={(mode === "light") ? "/logo.svg":"/logo_dark.svg"} alt="logo" className="nav-icon"/>
            </NavLink>

            <div className="nav-topbar" style={{display:displayBool, transform: showTop}}>
                <div className="nav-toplinks">
                    <NavLink to="/home" className="nav-topgroup">
                        <BsHouseDoorFill/>
                        Home
                    </NavLink>
                    <NavLink to="/projects" className="nav-topgroup">
                        <BsFolderFill/>
                        Projects
                    </NavLink>
                    <NavLink to="/experiences" className="nav-topgroup">
                        <IoMdBriefcase/>
                        Experiences
                    </NavLink>
                    <NavLink to="/about" className="nav-topgroup">
                        <BsFillPersonFill/>
                        About
                    </NavLink>
                </div>

                <img src={(mode==="light") ? "./dark_mode.svg" : "./light_mode.svg"} alt="bruh" className="nav-mode-side" onClick={changeMode}/>

            </div>

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