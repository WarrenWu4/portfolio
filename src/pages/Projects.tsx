import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";


export default function Projects() {

    return (
        <div className="page">
            <Navbar/>

            <div className="container">
                <div className="title">Projects</div>
                <ProjectCard 
                    name="ENGR 102 Website" 
                    desc="A website built for the ENGR 102 course taken by all incoming engineering freshmen at Texas A&M." 
                    imgPath="/proj_1.png"/>
                <ProjectCard 
                    name="Tally" 
                    desc="A competitive to-do mobile app that featured built-in rewards and a leaderboard system" 
                    imgPath="/proj_2.svg"/>
            </div>

        </div>
    )
}