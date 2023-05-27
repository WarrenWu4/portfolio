import ExCard from "../components/ExCard";
import Navbar from "../components/Navbar";
import "./Experiences.css";
import "./Projects.css";
import { useEffect } from "react";

export default function Experiences() {

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
                <div className="title" style={{animation:"fadeBot 3s"}}>Experiences</div>
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
                    org="General Motors"
                    role="IT Intern"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_gm.png"
                />
            </div>

        </div>
    )
}