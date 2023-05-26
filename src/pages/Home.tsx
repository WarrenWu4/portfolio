import "./Home.css"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-page">

            <div className="home-container">

            <nav>
                <img src="/public/Logo.1.svg" alt="logo"/>
                <img src="/public/Nav Menu.svg" alt="navigation" id="nav-menu"/>
                <div className="nav-links">
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </nav>

            <div className="home-content">
                <img src="/public/Masking Cloud.svg" alt="profile"/>
                <div className="home-hero-1">
                    <div className="home-header">Hi, I'm Warren</div>
                    <div className="home-subheader">I'm a computer science student and I want to change the world</div>
                    <div className="socials">
                        <FaGithub/>
                        <FaLinkedin/>
                        <FaYoutube/>
                        <FaTwitter/>
                    </div>
                </div>
            </div>

            </div>

        </div>
    )
}