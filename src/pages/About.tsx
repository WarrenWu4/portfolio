import Navbar from "../components/Navbar";
import "./About.css";
import { BsArrowDown } from "react-icons/bs";
import { FaPython, FaJava, FaReact } from "react-icons/fa";
import { SiJavascript, SiCplusplus } from "react-icons/si";

export default function About() {

    return (
        <div className="page">
            <Navbar/>

            <div className="container">
                <div className="title">About</div>

                <div className="about-summary">
                    Hello I'm Warren (if you didn't read the home page LOL). I'm a sophomore studying computer science at Texas A&M with an interest in building impactful software
                    <br/><br/>   
                    In my eyes, software engineering is
                </div>

                <div className="tech-stack">

                    Tech Stack

                    <div className="arrow-down">
                        <BsArrowDown/>
                        <BsArrowDown/>
                        <BsArrowDown/>
                    </div>

                    <div className="tech-stack-container">

                        <div className="tech-stack-row">
                            <div className="tech"><FaPython/></div>
                            <div className="tech"><SiJavascript/></div>
                            <div className="tech"><FaJava/></div>
                            <div className="tech"><SiCplusplus/></div>
                        </div>
                        
                        <div className="tech-stack-row">
                            <div className="tech"><FaReact/></div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}