import "./styles/ExCard.css";
import { FiArrowRightCircle } from "react-icons/fi";

export default function ExCard(props: {org:string, role:string, desc:string, imgPath:string}) {
    return (
        <div className="ex-card hidden">
            <div className="ex-container">
                <img src={props.imgPath} alt="ex-img" className="ex-img"/>
                <div className="ex-wrapper">
                    <div className="ex-org">{props.org}</div>
                    <div className="ex-role">{props.role}</div>
                </div>
            </div>
            <div className="ex-desc">{props.desc}</div>
            <div className="learn-more">
                Learn More
                <FiArrowRightCircle/>
            </div>
        </div>
    )
}