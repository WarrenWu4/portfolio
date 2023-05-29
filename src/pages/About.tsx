import "./styles/About.css";
import { BsArrowDown } from "react-icons/bs";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiFirebase, SiTailwindcss, SiPandas, SiTensorflow, SiNumpy, SiNextdotjs, SiDotnet, SiElectron, SiFlask, SiExpo, SiMysql, SiTypescript, SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandThreejs } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";
import Nav from "../components/Nav";

export default function About() {

    return (
        <div className="page">

            <Nav/>

            <div className="title">About</div>

            <div className="about-summary">
            pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum
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
    )
}