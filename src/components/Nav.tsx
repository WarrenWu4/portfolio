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

    // Todo: add light/dark mode
    const changeMode = () => {
        setMode((mode==="light") ? "dark":"light");
        console.log("WIP")
    }

    const showSide = () => {
        setMenuIcon((menuIcon === "/menu.svg") ? "/close.svg":"/menu.svg");
        setShowTop((showTop === "translateY(-110%)") ? "translateY(0)":"translateY(-110%)");
    }

    useEffect(() => {
        const changeNav = () => {
            if (window.innerWidth >= 768) {
                setMenuIcon("/menu.svg");
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
                <img src="/logo.svg" alt="logo" className="nav-icon"/>
            </NavLink>

            <div className="nav-topbar" style={{display:displayBool, transform: showTop}}>
                <div className="nav-toplinks">
                    <div className="nav-topgroup">
                        <BsHouseDoorFill/>
                        <NavLink to="/home">Home</NavLink>
                    </div>
                    <div className="nav-topgroup">
                        <BsFolderFill/>
                        <NavLink to="/projects">Projects</NavLink>
                    </div>
                    <div className="nav-topgroup">
                        <IoMdBriefcase/>
                        <NavLink to="/experiences">Experiences</NavLink>
                    </div>
                    <div className="nav-topgroup">
                        <BsFillPersonFill/>
                        <NavLink to="/about">About</NavLink>
                    </div>
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