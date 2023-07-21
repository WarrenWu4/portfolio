import { NavLink } from "react-router-dom";
import { RiSpotifyLine } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { motion } from "framer-motion";

export default function MiscPage() {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[6.4rem] flex flex-col items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] w-full text-left font-bold text-[4rem]">Miscellaneous</motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="w-full flex flex-wrap justify-center med:justify-start [&>*]:rounded-[1.2rem] gap-[4rem] mt-[4.8rem]">

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#C4D7B2] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./music">
                    <RiSpotifyLine/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Music I 💚</span>
                </NavLink>

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#C4DFDF] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./minigame">
                    <GrGamepad/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Mini Game</span>
                </NavLink>

            </motion.div>

        </div>
    )
}

export const MyMusic = () => {
    return (
        <div className="max-w-[768px] w-full min-h-screen px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">My Top Tracks</span>
            
        </div>
    )
}

export const MiniGame = () => {
    return (
        <div className="max-w-[768px] w-full min-h-screen px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Have Fun 😊</span>
            
        </div>
    )
}