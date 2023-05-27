import "./ProjectCard.css";
import { FiArrowRightCircle } from "react-icons/fi";

export default function ProjectCard(props: {name: string, desc: string, imgPath:string}) {
    return (
        <div className="proj-card">
            <img src={props.imgPath} alt="proj-img" className="proj-img"/>
            <div className="proj-name">{props.name}</div>
            <div className="proj-desc">{props.desc}</div>
            <div className="learn-more">
                Learn More
                <FiArrowRightCircle/>
            </div>
        </div>
    )
}