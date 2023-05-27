import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {

    useEffect(() => {
        const hiddenCards = document.querySelectorAll('.hidden')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // if intersection play animation
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {    
                    entry.target.classList.remove('show');
                }
            })
        })
        
        hiddenCards.forEach((el) => observer.observe(el));
    })


    return (
        <div className="page">
            <Navbar/>

            <div className="container">
                <div className="title" style={{animation:"fadeBot 3s"}}>Projects</div>
                <ProjectCard
                    name="ENGR 102 Website" 
                    desc="A website built for the ENGR 102 course taken by all incoming engineering freshmen at Texas A&M." 
                    imgPath="/proj_1.png"/>
                <ProjectCard 
                    name="Tally" 
                    desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    imgPath="/proj_2.svg"/>
                <ProjectCard 
                    name="Tally" 
                    desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    imgPath="/proj_2.svg"/>
                <ProjectCard 
                    name="Tally" 
                    desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    imgPath="/proj_2.svg"/>
                <ProjectCard 
                    name="Tally" 
                    desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    imgPath="/proj_2.svg"/>
            </div>

        </div>
    )
}