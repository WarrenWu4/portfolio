import "./Home.css"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="page">

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