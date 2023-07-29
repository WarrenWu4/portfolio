import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {IconGen} from "../App";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsCaretDown } from "react-icons/bs";

const exp = [
    {
        "org": "Aggie Coding Club",
        "pos": "Workshops Officer",
        "desc": "Created engaging and interactive workshops in the form of code-alongs, presentations, and mini-competitions. Workshop content includes: game development with Pygame, debugging 101, intro to APIs, etc.",
        "date": "Aug 2022 - Present"
    },
    {
        "org": "TAMU Datathon",
        "pos": "Developer",
        "desc": "Used EJS, SCSS, & Javascript to build parts of the landing page. Also worked on fullstack tools that were used by participants during the Datathon event.",
        "date": "Jan 2023 - Present"
    },
    {
        "org": "General Motors",
        "pos": "IT Intern",
        "desc": "Migrated internal tools and web pages from Sharepoint On-Premise to Sharepoint Online through the SPFX framework. Leveraged embeded web parts to build custom components for more advanced features. Also used Python and PowerBI to create data analytics and visuals for an internal knowledge management project to better track and update knowledge articles.",
        "date": "May 2023 - Aug 2023"
    }
]

export default function HomePage() {

    const icons:any[] = IconGen({icons:["all"]})
    let icon_cards:any[] = []
    icons.map((icon) => {
        icon_cards.push(<div className="w-[5rem] aspect-square rounded-[0.4rem] flex justify-center items-center text-[3.5rem] shadow-tech dark:shadow-tech-dark dark:text-dark-100">{icon}</div>)
    })

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity: 0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="mt-[4.8rem] w-full flex items-center justify-center flex-col leading-tight">
                <span className="font-bold text-[4rem] mb-[1.2rem]">Hi, I'm Warren</span>
                <span className="font-medium text-[2rem] text-black/80 mb-[1.6rem] text-center">I like building software that helps people 👍</span>
                <span className="flex items-center [&>*]:mr-[1.6rem] text-[2.4rem]">
                    <a target="_blank" href="https://github.com/WarrenWu4"><FaGithub/></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCiJosbDdPhrP3Rn3hfSBInw"><FaYoutube/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/warren-wu4/"><FaLinkedin/></a>
                </span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="w-full p-[2.4rem] relative mt-[4.8rem] rounded-[1.2rem] border-4 border-black/60 border-solid">
                <span className="font-bold text-[2rem] text-black/60 px-[0.8rem] bg-white absolute left-[2.4rem] top-[-1.8rem]">ABOUT</span>
                <span className="text-[1.6rem] leading-[1.5]">
                    I'm currently a computer science sophomore at Texas A&M, dedicated to creating mission-driven software that leaves a positive impact on the world. With a love for minimalistic designs and an insatiable curiosity for incorporating cutting-edge technologies into my workflow, I'm always on the lookout for innovative ways to enhance productivity and user experiences. When I'm not immersed in code or exploring new tech, you'll find me unwinding by watching YouTube or jamming out to my Spotify playlist. Side note: I'm also <s>obsessed</s> fascinated with clouds and blobs. I love meeting and getting to know new people, so feel free to connect/contact me if you think I'm pretty chill dude 😊.
                </span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="w-full p-[2.4rem] mt-[4.8rem] rounded-[1.2rem] shadow-elevate">
                <span className="font-bold text-[2rem] text-black/60 ml-[0.8rem]">TECH STACK</span>
                <span className="flex flex-wrap gap-[3.2rem] w-full pt-[2.4rem] pb-[0.4rem]">
                    {icon_cards}
                </span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="w-full p-[2.4rem] flex flex-col mt-[4.8rem] rounded-[1.2rem] bg-black/80 text-white">

                <span className="font-bold text-[2rem] ml-[0.8rem]">EXPERIENCES</span>

                <div className="h-full w-full flex flex-col items-center gap-[1.6rem] pt-[2.4rem] pb-[0.4rem]">
                    {
                        exp.map((info, index) =>
                            <ExpInfo
                                key={index}
                                org={info["org"]}
                                pos={info["pos"]}
                                desc={info["desc"]}
                                date={info["date"]}
                            />
                        )
                    }
                </div>

            </motion.div>
        </div>
    )
}

interface ExpInfoProps {
    org: string;
    pos: string;
    desc: string;  
    date: string; 
}

const ExpInfo:React.FC<ExpInfoProps> = ({org, pos, desc, date}) => {

    const [show, setShow] = useState(false);

    return (
    <button type="button" onClick={() => setShow((show)?false:true)} className="w-full flex flex-col border-4 border-white/80 border-solid rounded-[1.2rem] p-[1.2rem] text-white/80">
        <div className="w-full flex justify-between items-center">
            <span className="text-[2rem] font-semibold">{org}</span>
            <BsCaretDown size={24} strokeWidth={0.6} className={(show)?"rotate-180 transition-all duration-500":"transition-all duration-500"} />
        </div>
        <div className={`${(show) ? "grid-rows-exp":"grid-rows-zed"}` + " grid overflow-hidden transition-all duration-[0.4s]"}>
            <div className="min-h-[0] flex flex-col text-start">
                <span className="text-[1.6rem] font-medium">{pos}</span>
                <span className="text-white text-[1.6rem] mt-[0.8rem]">{desc}</span>
                <span className="text-[1.6rem] font-medium mt-[1.2rem]">{date}</span>
            </div>
        </div>
    </button>
    )
}