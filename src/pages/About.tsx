import "./styles/About.css";
import { BsArrowDown } from "react-icons/bs";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiFirebase, SiTailwindcss, SiPandas, SiTensorflow, SiNumpy, SiNextdotjs, SiDotnet, SiElectron, SiFlask, SiExpo, SiMysql, SiTypescript, SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandThreejs } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";

export default function About() {

    return (
        <div className="page">

            <div className="container">
                <div className="title" style={{animation: "3s fadeBot"}}>About</div>

                <div className="about-summary" style={{animation: "3s fadeTop"}}>
                    Hello I'm Warren (if you didn't read the home page LOL). I'm a sophomore studying computer science at Texas A&M with an interest in building impactful software
                    <br/><br/>   
                    In my eyes, software engineering is
                </div>

                <div className="tech-stack">

                    <span style={{animation: "3s fadeRight"}}>
                        Tech Stack
                    </span>

                    <div className="arrow-down" style={{animation: "3s fadeLeft"}}>
                        <BsArrowDown/>
                        <BsArrowDown/>
                        <BsArrowDown/>
                    </div>

                    <div className="tech-stack-container" style={{animation: "3s fadeTop"}}>

                        <div className="tech-stack-row">
                            <div className="tech"><FaHtml5/></div>
                            <div className="tech"><FaCss3Alt/></div>
                            <div className="tech"><SiJavascript/></div>
                            <div className="tech"><SiTypescript/></div>
                        </div>

                        <div className="tech-stack-row">
                            <div className="tech"><SiNextdotjs/></div>
                            <div className="tech"><FaReact/></div>
                            <div className="tech"><FaNodeJs/></div>
                            <div className="tech"><SiTailwindcss/></div>
                        </div>
                        
                        <div className="tech-stack-row">
                            <div className="tech"><TbBrandThreejs/></div>
                            <div className="tech"><SiFlask/></div>
                            <div className="tech"><FaJava/></div>
                            <div className="tech"><SiCplusplus/></div> 
                        </div>

                        <div className="tech-stack-row">
                            <div className="tech"><FaPython/></div>
                            <div className="tech"><SiNumpy/></div>
                            <div className="tech"><SiPandas/></div>
                            <div className="tech"><SiTensorflow/></div>
                        </div>
 
                        <div className="tech-stack-row">
                            <div className="tech"><SiFirebase/></div>
                            <div className="tech"><SiMongodb/></div>
                            <div className="tech"><SiMysql/></div>
                            <div className="tech"><DiSqllite/></div>
                        </div>

                        <div className="tech-stack-row">
                            <div className="tech"><CgFigma/></div>
                            <div className="tech"><SiExpo/></div>
                            <div className="tech"><SiDotnet/></div>
                            <div className="tech"><SiElectron/></div>
                        </div>

                        <div className="tech-stack-row">
                            <div className="tech"><FaDocker/></div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}