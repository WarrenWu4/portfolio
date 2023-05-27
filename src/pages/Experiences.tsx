import ExCard from "../components/ExCard";
import Navbar from "../components/Navbar";
import "./Experiences.css";

export default function Experiences() {
    return (
        <div className="page">
            <Navbar/>

            <div className="container">
                <div className="title">Experiences</div>
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
                    imgPath="/ex_1.png"
                />
                <ExCard 
                    org="General Motors"
                    role="IT Intern"
                    desc="Prepared weekly workshops on a variety of topics including debugging, Pygame, and ..."
                    imgPath="/ex_1.png"
                />
            </div>

        </div>
    )
}