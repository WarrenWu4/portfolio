import { motion } from "framer-motion";
import { useEffect } from "react";
import IconGen from "../data/IconGen";
import ProjectCard from "../components/ProjectCard";

import proj from "../data/proj.json";

export default function Projects() {

    // useEffect(() => {
    //     const hiddenCards = document.querySelectorAll('.hidden')

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             // if intersection play animation
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             }
    //         })
    //     })
        
    //     hiddenCards.forEach((el) => observer.observe(el));
    // })

    const projCards:any[] = []
    proj.projects.map((project) => {
        projCards.push(
            <ProjectCard
                key = {project.id}
                id = {project.id}
                name={project.name}
                desc={project.desc}
                techStack={IconGen({icons: project.techstack})}
                imgPath={project.imgPath}
            />
        )
    })

    return (
        <motion.div exit={{opacity: 0, transform: "translateX(-60vw)"}} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative dark:bg-dark-bg">

            <div className="mt-[12.8rem] mb-[3.2rem] text-[black] font-default font-bold text-[3.6rem] dark:text-dark-100">Projects</div>

            <div className="grid place-items-center grid-cols-1 gap-[3.2rem] pb-[6.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
                {projCards}
            </div>

        </motion.div>
    )
}