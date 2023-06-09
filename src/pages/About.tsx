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
                Hello! I'm Warren (if you didn't read the home page LOL). I'm a sophomore studying computer science at Texas A&M with a mission-driven approach to building software. I've always viewed the biggest asset of software to be its ability to help others, whether through games that provide endless entertainment or an app that teaches web development. Nothing brings me more joy in life than writing a program that people enjoy as even though the title of “software engineer” isn't heroic as “firefighter” or “police officer”, I can still very much contribute to my community. Aside from the serious stuff though, I also like clouds, blobs, and watching YouTube.
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