import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import {IconGen} from "../App";

export default function AboutPage() {

    const icons:any[] = IconGen({icons:["all"]})
    let icon_cards:any[] = []
    icons.map((icon) => {
        icon_cards.push(<div className="w-[5rem] aspect-square rounded-[0.4rem] flex justify-center items-center text-[3.5rem] shadow-tech dark:shadow-tech-dark dark:text-dark-100">{icon}</div>)
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative">

            <div className="mt-[12.8rem] mb-[3.2rem] text-black font-bold font-default text-[3.6rem] dark:text-dark-100">About</div>

            <div className="max-w-[153.6rem] w-full text-[black] leading-[1.5] dark:text-dark-380 font-medium font-default text-[1.6rem] box-border px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem]">
            Hello! I'm Warren (if you didn't read the home page, LOL). I'm a sophomore pursuing computer science at Texas A&M with a passion for mission-driven software development. I believe that the true power of software lies in its ability to positively impact people's lives, whether it's creating captivating games for endless entertainment or developing educational apps. I simply find immense satisfaction in knowing that my programs bring joy and value to others. While the title of "software engineer" may not carry the same heroic aura as "firefighter" or "police officer," I strongly believe that I can make a meaningful contribution to my community through my coding skills. On a lighter note, I also have a fascination with clouds, blobs, and enjoy spending time watching YouTube. Feel free to connect/contact me if you think I'm pretty chill dude 😊.
            </div>

            <div className="mt-[2.4rem] font-bold font-default text-[2.4rem] flex flex-col items-center px-[1.6rem] max-w-[153.6rem] w-full box-border text-[black] dark:text-dark-100 tablet:px-[6.4rem] desktop:px-[12.8rem]">

                <span>
                    Tech Stack
                </span>

                <div className="text-[3rem] text-[black] dark:text-dark-100 mt-[1.2rem] mb-[3.2rem] mx-[1.8rem] flex">
                    <BsArrowDown/>
                    <BsArrowDown/>
                    <BsArrowDown/>
                </div>

                <div className="grid grid-cols-tech-stack place-content-center gap-[3.2rem] w-full pb-[6.4rem]">
                    {icon_cards}
                </div>

            </div>

        </motion.div>
    )
}