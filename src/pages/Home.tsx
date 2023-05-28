import "./Home.css"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navbar from "../components/Navbar";

export default function Home() {

    const secret = () => {
        alert("work in progress :D");
    }

    return (
        <div className="page">

            <div className="container">
                <Navbar/>

                <div className="home-content">

                    <div className="blob">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="secret" onClick={secret}>Click Me</div>
                    </div>


                    <div className="home-group">
                        <div className="home-header">Hi, I'm Warren</div>
                        <div className="home-subheader">I'm a computer science student and I make software that helps people.</div>

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

            </div>

            <div className="easter-egg">Made with 💚 by Warren Wu</div>

        </div>
    )
}