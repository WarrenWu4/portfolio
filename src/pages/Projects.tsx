import { motion } from "framer-motion";
import IconGen from "../data/IconGen";
import ProjectCard from "../components/ProjectCard";

import proj from "../data/proj.json";

export default function Projects() {

    const projCards:any[] = []
    proj.projects.map((project) => {
        let github_link = (project.links.length >= 2) ? project.links[1]: "" 
        let web_link = (project.links.length >= 3) ? project.links[2]: "" 
        projCards.push(
            <ProjectCard
                key = {project.id}
                id = {project.id}
                name={project.name}
                desc={project.desc}
                techStack={IconGen({icons: project.techstack})}
                imgPath={project.imgPath}
                github={github_link}
                weblink={web_link}
            />
        )
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative dark:bg-dark-bg">

            <div className="mt-[12.8rem] mb-[3.2rem] text-[black] font-default font-bold text-[3.6rem] dark:text-dark-100">Projects</div>

            <div className="grid place-items-center grid-cols-1 gap-[3.2rem] pb-[6.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
                {projCards}
            </div>

        </motion.div>
    )
}