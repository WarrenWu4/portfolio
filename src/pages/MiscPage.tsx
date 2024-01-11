/**
 * todo
 * - [ ] add better loading states for spotify
 * - [ ] add resume link
 * - [ ] add mini game
 */

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaSpotify } from "react-icons/fa"

export default function MiscPage() {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] flex flex-col items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] w-full text-center huh:text-left font-bold text-[4rem]">Miscellaneous</motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="w-full flex flex-wrap justify-center huh:justify-start [&>*]:rounded-[1.2rem] gap-[4rem] mt-[4.8rem]">

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#80966b] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./music">
                    <FaSpotify className="text-white"/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Music I 💚</span>
                </NavLink>

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#333] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./github-stats">
                    <FaGithub className="text-white" />
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">
                        Github Stats
                    </span>
                </NavLink>

            </motion.div>

        </div>
    )
}