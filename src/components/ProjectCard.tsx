import "./styles/ProjectCard.css";
import { FiArrowRightCircle } from "react-icons/fi";

export default function ProjectCard(props: {name: string, desc: string, imgPath?:string, techStack?:any}) {

    return (
        <div className="proj-card hidden">
            <div className="proj-img" style={{backgroundImage: `url("/proj_img${props.imgPath}")`}}>
                <div className="proj-overlay">
                    {props.techStack}
                </div>
            </div>
            <div className="proj-name">{props.name}</div>
            <div className="proj-desc">{props.desc}</div>
            <div className="learn-more">Learn More <FiArrowRightCircle/></div>
        </div>
    )
}