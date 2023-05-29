import "./styles/ProjectCard.css";
import { FiArrowRightCircle } from "react-icons/fi";

export default function ProjectCard(props: {name: string, desc: string, imgPath?:string, wip?:boolean}) {

    const extra = (props.wip) ? <div></div> : <div className="learn-more">Learn More <FiArrowRightCircle/></div>
    const img = (props.imgPath) ? <img src={props.imgPath} alt="proj-img" className="proj-img"/> : <div className="proj-img"/>

    return (
        <div className="proj-card hidden">
            {img}
            <div className="proj-name">{props.name}</div>
            <div className="proj-desc">{props.desc}</div>
            {extra}
        </div>
    )
}