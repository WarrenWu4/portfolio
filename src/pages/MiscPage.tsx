/**
 * todo
 * - [ ] add background images
 * - [ ] add resume link
 * - [ ] add mini game
 * - [ ] add graveyard
 */

import { NavLink } from "react-router-dom";
import { FaGithub, FaSpotify } from "react-icons/fa"
import AnimatedLayout from "../layouts/AnimatedLayout";

export default function MiscPage() {

    const miscData = [
        {
            link: "./music",
            text: "Music I 💚",
            icon: <FaSpotify/>,
            background: "#80966b"
        },
        {
            link: "./github-stats",
            text: "Github Stats",
            icon: <FaGithub/>,
            background: "#333"
        },
    ]

    return (
        <>
            
            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                Miscellaneous
            </AnimatedLayout>

            <div className="w-full flex flex-wrap justify-center huh:justify-start [&>*]:rounded-[1.2rem] gap-10">

                {miscData.map((data, index) => {
                    return <MiscCard key={index} {...data}/>
                })}

            </div>

        </>
    )
}

interface MiscCardProps {
    link: string,
    text: string,
    icon: any
    background: string;
}

function MiscCard({link, text, icon, background}: MiscCardProps) {
    return (
        <AnimatedLayout className="w-fit">
            <NavLink className="w-32 flex flex-col items-center font-medium text-center" to={link}>
                <div className="w-full aspect-square flex justify-center items-center shadow-elevate text-[40px] mb-6 rounded-xl text-white" style={{background: background}}>
                    {icon}
                </div>
                {text}
            </NavLink>
        </AnimatedLayout>
    )
}