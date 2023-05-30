import ExCard from "../components/ExCard";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Experiences() {

    useEffect(() => {
        const hiddenCards = document.querySelectorAll('.hidden')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // if intersection play animation
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            })
        })
        
        hiddenCards.forEach((el) => observer.observe(el));
    })

    return (
        <motion.div exit={{opacity: 0, transform: "translateX(60vw)"}} transition={{duration:0.4, ease:"easeInOut"}}  className="page">

            <div className="title">Experiences</div>

            <div className="card-wrapper">
                <ExCard 
                    org="General Motors"
                    role="IT Intern"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_gm.png"
                />
                <ExCard 
                    org="Aggie Coding Club"
                    role="Workshops Officer"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_1.png"
                />
                <ExCard 
                    org="TAMU Datathon"
                    role="Developer"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_td.webp"
                />
                <ExCard 
                    org="Lanfang LLC"
                    role="Web Developer"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_td.webp"
                />
                <ExCard 
                    org="Vivatech LLC"
                    role="Technician"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_td.webp"
                />
                <ExCard 
                    org="AGWCS"
                    role="Math Instructor"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_td.webp"
                />
            </div>

        </motion.div>
    )
}