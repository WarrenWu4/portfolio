import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {IconGen} from "../App";
import { motion } from "framer-motion";

const text = `I'm currently a sophomore pursuing computer science at Texas A&M with a passion for mission-driven software development. I believe that the true power of software lies in its ability to positively impact people's lives, whether it's creating captivating games for endless entertainment or developing educational apps. I simply find immense satisfaction in knowing that my programs bring joy and value to others. While the title of "software engineer" may not carry the same heroic aura as "firefighter" or "police officer," I strongly believe that I can make a meaningful contribution to my community through my coding skills. On a lighter note, I also have a fascination with clouds, blobs, and enjoy spending time watching YouTube. Feel free to connect/contact me if you think I'm pretty chill dude 😊.`

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
        <div className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[6.4rem]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="mt-[4.8rem] w-full flex items-center justify-center flex-col leading-tight">
                <span className="font-bold text-[4rem] mb-[1.2rem]">Hi, I'm Warren</span>
                <span className="font-medium text-[2rem] text-black/80 mb-[1.6rem]">I like building software that helps people 👍</span>
                <span className="flex items-center [&>*]:mr-[1.6rem] text-[2.4rem]">
                    <a target="_blank" href="https://github.com/WarrenWu4"><FaGithub/></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCiJosbDdPhrP3Rn3hfSBInw"><FaYoutube/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/warren-wu4/"><FaLinkedin/></a>
                </span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="w-full p-[2.4rem] relative mt-[4.8rem] rounded-[1.2rem] border-4 border-black/60 border-solid">
                <span className="font-bold text-[2rem] text-black/60 px-[0.8rem] bg-white absolute left-[2.4rem] top-[-1.8rem]">ABOUT</span>
                <span className="text-[1.6rem] leading-[1.5]">
                    {text}
                </span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="w-full p-[2.4rem] mt-[4.8rem] rounded-[1.2rem] shadow-elevate">
                <span className="font-bold text-[2rem] text-black/60 ml-[0.8rem]">TECH STACK</span>
                <span className="grid grid-cols-tech-stack place-content-center gap-[3.2rem] w-full pt-[1.2rem] pb-[0.4rem]">
                    {icon_cards}
                </span>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} id="spotlight" className="w-full py-[2.4rem] flex flex-col items-center mt-[4.8rem] rounded-[1.2rem] bg-black relative overflow-hidden text-white">
                <span className="font-bold text-[2rem] mb-[1.2rem]">EXPERIENCE</span>


                <div className="w-full flex flex-col items-center px-[16rem] leading-tight">
                    <span className="text-[2rem] font-semibold">General Motors</span>
                    <span className="text-[1.6rem]">IT Intern</span>
                    <div className="w-full h-[1.6rem] relative my-[0.8rem]">
                        <span className="w-[1.6rem] aspect-square rounded-[50%] bg-white absolute"></span>
                        <span className="w-full h-[0.4rem] bg-white/60 absolute"></span>
                    </div>
                    <span className="text-[1.6rem]">Migrated internal tools and create data analytics and metrics for an internal project. Used HTML, CSS, Power BI, Excel, and other tools within the Microsoft Sharepoint environment.</span>
                </div>

            </motion.div>
        </div>
    )
}