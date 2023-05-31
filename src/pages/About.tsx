import "./styles/About.css";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import IconGen from "../data/IconGen";

export default function About() {

    const icons:any[] = IconGen({icons:["all"]})
    let icon_cards:any[] = []
    icons.map((icon) => {
        icon_cards.push(<div className="tech">{icon}</div>)
    })

    return (
        <motion.div exit={{opacity: 0, transform: "translateX(-60vw)"}} transition={{duration:0.4, ease:"easeInOut"}} className="page">

            <div className="title">About</div>

            <div className="about-summary" style={{animation: "1s fadeTop"}}>
            pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum
            </div>

            <div className="tech-stack">

                <span style={{animation: "1s fadeRight"}}>
                    Tech Stack
                </span>

                <div className="arrow-down" style={{animation: "1s fadeLeft"}}>
                    <BsArrowDown/>
                    <BsArrowDown/>
                    <BsArrowDown/>
                </div>

                <div className="tech-stack-container" style={{animation: "1s fadeTop"}}>
                    {icon_cards}
                </div>

            </div>

        </motion.div>
    )
}