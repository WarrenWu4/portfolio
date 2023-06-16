import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import IconGen from "../data/IconGen";

export default function About() {

    const icons:any[] = IconGen({icons:["all"]})
    let icon_cards:any[] = []
    icons.map((icon) => {
        icon_cards.push(<div className="w-[5rem] aspect-square rounded-[0.4rem] flex justify-center items-center text-[3.5rem] shadow-tech dark:shadow-tech-dark dark:text-dark-100">{icon}</div>)
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative">

            <div className="mt-[12.8rem] mb-[3.2rem] text-black font-bold font-default text-[3.6rem] dark:text-dark-100">About</div>

            <div className="max-w-[153.6rem] w-full text-neutral-380 dark:text-dark-380 font-bold font-default text-[1.6rem] box-border px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem]">
                Hello! I'm Warren (if you didn't read the home page LOL). I'm a sophomore studying computer science at Texas A&M with a mission-driven approach to building software. I've always viewed the biggest asset of software to be its ability to help others, whether through games that provide endless entertainment or an app that teaches web development. Nothing brings me more joy in life than writing a program that people enjoy as even though the title of “software engineer” isn't heroic as “firefighter” or “police officer”, I can still very much contribute to my community. Aside from the serious stuff though, I also like clouds, blobs, and watching YouTube.
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