import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {IconGen} from "../App";
import { useState } from "react";
import { BsCaretDown } from "react-icons/bs";

import MainLayout from "../layouts/MainLayout";
import AnimatedLayout from "../layouts/AnimatedLayout";

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
        icon_cards.push(<div className="w-[50px] aspect-square rounded-md flex justify-center items-center text-[35px] shadow-tech dark:shadow-tech-dark dark:text-white">{icon}</div>)
    })

    return (
        <MainLayout>

            <AnimatedLayout className="flex items-center justify-center flex-col leading-tight">
                <span className="font-bold text-[40px] mb-3">Hi, I'm Warren</span>
                <span className="font-medium text-[20px] text-black/80 dark:text-white/80 mb-4 text-center">I like building software that helps people 👍</span>
                <span className="flex items-center gap-x-4 text-[24px]">
                    <a target="_blank" href="https://github.com/WarrenWu4"><FaGithub/></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCiJosbDdPhrP3Rn3hfSBInw"><FaYoutube/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/warren-wu4/"><FaLinkedin/></a>
                </span>
            </AnimatedLayout>

            <AnimatedLayout className="w-full p-6 relative rounded-xl border-4 border-black/60 dark:border-white/60 border-solid">
                <span className="font-bold text-[20px] text-black/60 dark:text-white/60 px-2 bg-white dark:bg-dark-bg absolute left-6 top-[-18px]">ABOUT</span>
                <span className="text-[16px] leading-[1.5]">
                    I'm currently a computer science sophomore at Texas A&M, dedicated to creating mission-driven software that leaves a positive impact on the world. With a love for minimalistic designs and an insatiable curiosity for incorporating cutting-edge technologies into my workflow, I'm always on the lookout for innovative ways to enhance productivity and user experiences. When I'm not immersed in code or exploring new tech, you'll find me unwinding by watching YouTube or jamming out to my Spotify playlist. Side note: I'm also <s>obsessed</s> fascinated with clouds and blobs. I love meeting and getting to know new people, so feel free to connect/contact me if you think I'm pretty chill dude 😊.
                </span>
            </AnimatedLayout>

            <AnimatedLayout className="w-full p-6 rounded-xl shadow-elevate dark:shadow-elevate-dark">
                <span className="font-bold text-[20px] text-black/60 dark:text-white/60 ml-2">TECH STACK</span>
                <span className="flex flex-wrap gap-8 w-full pt-6 pb-1">
                    {icon_cards}
                </span>
            </AnimatedLayout>

            <AnimatedLayout className="w-full p-6 flex flex-col rounded-xl bg-black/80 dark:bg-white dark:text-black/80 text-white">

                <span className="font-bold text-[20px] ml-2">EXPERIENCES</span>

                <div className="h-full w-full flex flex-col items-center gap-4 pt-6 pb-1">
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

            </AnimatedLayout>

        </MainLayout>
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
    <button type="button" onClick={() => setShow((show)?false:true)} className="w-full flex flex-col border-4 border-white/80 border-solid rounded-xl p-3 text-white/80 dark:text-black/80 dark:border-black/80">
        <div className="w-full flex justify-between items-center">
            <span className="text-[20px] font-semibold">{org}</span>
            <BsCaretDown size={24} strokeWidth={0.6} className={(show)?"rotate-180 transition-all duration-500":"transition-all duration-500"} />
        </div>
        <div className={`${(show) ? "grid-rows-exp":"grid-rows-zed"}` + " grid overflow-hidden transition-all duration-[0.4s]"}>
            <div className="min-h-0 flex flex-col text-start">
                <span className="text-[16px] font-medium">{pos}</span>
                <span className="text-white dark:text-black text-[16px] mt-2">{desc}</span>
                <span className="text-[16px] font-medium mt-3">{date}</span>
            </div>
        </div>
    </button>
    )
}