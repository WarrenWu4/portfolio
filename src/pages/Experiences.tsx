import ExCard from "../components/ExCard";
import { motion } from "framer-motion";
import { useEffect } from "react";

import exp from "../data/exp.json";

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

    const expCards:any[] = []
    exp.experiences.map((exp) => {
        expCards.push(
            <ExCard
                org={exp.org}
                role={exp.role}
                desc={exp.desc}
                imgPath={exp.imgPath}
            />
        )
    })

    return (
        <motion.div exit={{opacity: 0, transform: "translateX(60vw)"}} transition={{duration:0.4, ease:"easeInOut"}}  className="page">

            <div className="title">Experiences</div>

            <div className="card-wrapper">
                {expCards}
            </div>

        </motion.div>
    )
}