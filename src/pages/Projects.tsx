import { useEffect } from "react";
import Nav from "../components/Nav";
import IconGen from "../data/IconGen";
import ProjectCard from "../components/ProjectCard";

import proj from "../data/proj.json";

export default function Projects() {

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

    const projCards:any[] = []
    proj.projects.map((project) => {
        projCards.push(
            <ProjectCard
                name={project.name}
                desc={project.desc}
                techStack={IconGen({icons: project.techstack})}
                imgPath={project.imgPath}
            />
        )
    })

    return (
        <div className="page">

            <Nav />

            <div className="title">Projects</div>

            <div className="card-wrapper">
                {projCards}
            </div>

        </div>
    )
}