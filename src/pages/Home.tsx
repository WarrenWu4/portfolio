import "./Home.css"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef} from "react";

export default function Home() {

    const [mouseCoords, SetMouseCoords] = useState({x:0, y:0});
    const [dist, SetDist] = useState({x: 0, y:0})

    const blob = useRef<HTMLInputElement>(null);
    
    // *gotta use some physics here ;-; time = distance/speed
    // useEffect(() => {
    //     const mouseHandler = (e:any) => {
    //         SetMouseCoords(
    //             {x: e.clientX, y: e.clientY})
    //     }
            
    //     // if (blob.current !== null) {
    //     //     let blobX = blob.current.getBoundingClientRect().x;
    //     //     let blobY = blob.current.getBoundingClientRect().y;
    //     //     console.log(blobX, blobY);
    //     //     SetDist({x:Math.abs(blobX-mouseCoords.x), y:Math.abs(blobY-mouseCoords.y)})
    //     // }

    //     window.addEventListener('mousemove', mouseHandler);

    //     return (() => {
    //         window.removeEventListener('mousemove', mouseHandler);
    //     })
    // })


    return (
        <div className="page">

            <div className="blob-wrapper">
                <div id="blob" ref={blob} style={{transform: `translate(${mouseCoords.x-75}px, ${mouseCoords.y-75}px)`, transition:`all 10s`}}>
                    Hi! I'm blob. I'll be following you around. Hope you don't mind :D
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>

            <Navbar/>

            <div className="home-content">
                <div className="home-profile">
                    <div id="easter-egg">Made with 💚 by Warren Wu</div>
                </div>
                <div className="home-header">Hi, I'm Warren</div>
                <div className="home-subheader">A computer science student on a mission to improve the world</div>
                <div className="socials">
                    <a href="https://github.com/WarrenWu4" target="_blank">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/warren-wu4/" target="_blank">
                        <FaLinkedin/>
                    </a>
                    <a href="https://github.com/WarrenWu4" target="_blank">
                        <SiGmail/>
                    </a>
                    <a href="https://github.com/WarrenWu4" target="_blank">
                        <FaYoutube/>
                    </a>
                </div>
            </div>

        </div>
    )
}