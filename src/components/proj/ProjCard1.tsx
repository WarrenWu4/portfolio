import { NavLink } from "react-router-dom";
import { Proj } from "../../lib/types"
import { Icon } from "@iconify/react";

export default function ProjCard1({title, desc, techstack, article, thumbnail, github, demo}: Proj) {

    const githubComp = (github !== undefined) ? 
    <a target="_blank" href={github}>
        <Icon icon={"mdi:github"} className="brutalist-sm bg-[#9FFFB4] w-8 h-8"/>
    </a> 
    :
    ""

    const weblinkComp = (demo !== undefined) ? 
    <a target="_blank" href={demo}>
        <Icon icon={"mdi:web"} width={"1.5rem"} className="brutalist-sm bg-[#9FFFB4] w-8 h-8"/>
    </a>
    :
    ""

    return (
        <div className="w-[300px] aspect-square brutalist rounded-xl flex flex-col relative overflow-hidden bg-[#A4E583]">

        <img src={(thumbnail !== undefined) ? `/_imgs/${thumbnail}` : `/_imgs/placeholder.png`} className="border-b-4 w-full h-[55%] bg-no-repeat bg-top bg-cover relative group"/>

        <div className="w-full h-[45%] p-4 pb-3 flex flex-col justify-between">
                
            <div className="flex flex-col">
                <div className="font-bold text-2xl">{title}</div>
                <div className="text-black/80 dark:text-white/80 font-medium text-xs text-ellipsis overflow-hidden line-clamp-2">{desc}</div>
            </div>

            <div className="w-full flex justify-between items-center">
                <div className="flex gap-x-2 items-center">
                    {githubComp}
                    {weblinkComp}
                </div>

                <NavLink to={"./"+article} className="brutalist-sm bg-[#9FFFB4] font-bold text-xs flex items-center gap-x-2 px-3 py-2 h-[38px] w-[120px]">
                    Learn More 
                    <Icon 
                        icon={"fa-solid:arrow-right"}
                        width={"0.5rem"}
                    />
                </NavLink>

            </div>

        </div>

        </div>
    )
}