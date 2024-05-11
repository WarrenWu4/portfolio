/**
 * todo
 * - [ ] add resume link
 * - [ ] add recent events
 * - [ ] add game corner
 * - [ ] tech stack
 * - [ ] museum of memories
 */

import { NavLink } from "react-router-dom";
import AnimatedLayout from "../layouts/AnimatedLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function MiscPage() {

    const miscData = [
        {
            link: "./music",
            text: "Music I 💚",
            icon: "spotify",
            background: "#80966b"
        },
        {
            link: "./github-stats",
            text: "Github Stats",
            icon: "github",
            background: "#333"
        },
        {
            link: "./timeline",
            text: "Recent Events",
            icon: "calendar",
            background: "#a16edb"
        }
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
                    <Icon icon={`mdi:${icon}`} width={"2.5rem"}/>
                </div>
                {text}
            </NavLink>
        </AnimatedLayout>
    )
}
