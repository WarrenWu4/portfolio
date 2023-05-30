import "./styles/Home.css"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <motion.div exit={{transform: "translateX(-80vw)"}} transition={{duration:0.4, ease:"easeInOut"}} className="page" style={{justifyContent:"center"}}>

            <div className="home-content">
                <div className="blob">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="home-container">
                    <div className="home-header">
                        Hi, I'm Warren
                    </div>

                    <div className="home-subheader">
                        I'm a computer science student and I make software that helps people.
                    </div>

                    <div className="socials">
                        <a href="https://github.com/WarrenWu4" target="_blank">
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/warren-wu4/" target="_blank">
                            <FaLinkedin/>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=warrenweiwu04@gmail.com" target="_blank">
                            <SiGmail/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCiJosbDdPhrP3Rn3hfSBInw" target="_blank">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>

            </div>

            <div className="easter-egg">
                Made with <NavLink to="/secret">💚</NavLink> by Warren Wu
            </div>

        </motion.div>
    )
}