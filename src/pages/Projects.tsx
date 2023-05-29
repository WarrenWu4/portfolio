import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

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


    return (
        <div className="page">

            <div className="container">
                <div className="title" style={{animation:"fadeBot 3s"}}>Projects</div>

                <div className="card-wrapper">
                    <ProjectCard 
                        name="Jumbo" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                        wip={true}
                    />
                    <ProjectCard 
                        name="Emerald" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                        wip={true}
                    />
                    <ProjectCard
                        name="ENGR 102 Website" 
                        desc="A website built for the ENGR 102 course taken by all incoming engineering freshmen at Texas A&M." 
                        imgPath="/proj_1.png"
                        wip={true}
                    />
                    <ProjectCard
                        name="Pulse" 
                        desc="A website built for the ENGR 102 course taken by all incoming engineering freshmen at Texas A&M." 
                        wip={true}
                    />
                    <ProjectCard 
                        name="RevTube" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    />
                    <ProjectCard 
                        name="Tally" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                        imgPath="/proj_2.svg"
                    />
                    <ProjectCard 
                        name="Project Icarus" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    />
                    <ProjectCard 
                        name="Fraud Detector" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    />
                    <ProjectCard 
                        name="AI Chatbot" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    />
                    <ProjectCard 
                        name="COVID Visualization" 
                        desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    />
                </div>
            </div>

        </div>
    )
}