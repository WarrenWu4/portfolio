import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState((window.innerWidth < 640) ? true:false);
    const [showSide, setShowSide] = useState(false);

    // const ref = useRef(null);
    // const refBtn = useRef(null);

    useEffect(() => {
        // const checkExit = e => {
        //     if (side === "flex" && ref.current && !ref.current.contains(e.target) && refBtn.current && !refBtn.current.contains(e.target) && window.innerWidth < 768) {
        //         setSide("none");
        //     }
        // }
        const checkSize = () => {(window.innerWidth < 640) ? setIsMobile(true):setIsMobile(false);}

        window.addEventListener("resize", checkSize);
        // document.addEventListener("mousedown", checkExit);

        return () => {
            window.removeEventListener("resize", checkSize);
            // document.removeEventListener("mousedown", checkExit);
        }
    })

    const sideView = () => {
        if (!showSide) {
            setShowSide(true);
        } else {
            setShowSide(false);
        }
    }


    return (
        <nav className="nav">

            <NavLink to="/" >
                <img src="/logo.svg" alt="logo" className="nav-logo"/>
            </NavLink>

            <img src={(!showSide) ? "/menu.svg":"/close.svg"} alt="menu" className="nav-menu" style={{display: (isMobile) ? "flex":"none"}} onClick={sideView}/>

            <div className={(!isMobile) ? "nav-links-row":"nav-links-col"} style={{display: (isMobile && !showSide) ? "none":"flex"}}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/experiences">Experiences</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

        </nav>
    )
}