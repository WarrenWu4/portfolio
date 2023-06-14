import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/proj.json";

export default function ProjectInfo() {

    const id = useParams() as any;
    const title:string = data.projects[id.id-1].name;

    const [mdInfo, setMdInfo] = useState("")
    useEffect(() => {
        fetch('/src/data/proj_articles'+data.projects[id.id-1].links[0]).then(res=>res.text()).then(text=>setMdInfo(text))
    })

    return (
        <motion.div exit={{opacity: 0, transform: "translateY(20vw)"}} transition={{duration:0.6, ease:"easeInOut"}}  className="w-screen h-screen flex flex-col items-center relative">
            <div className="mt-[12.8rem] mb-[2rem] text-[black] dark:text-dark-100 font-default font-bold text-[3.6rem]">{title}</div>
            
            <div></div>

            <div className="max-w-[1536px] w-screen flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] [&>h2]:text-[black] [&>h2]:dark:text-dark-100 [&>h2]:font-bold [&>h2]:text-[2.4rem] [&>h2]:my-[2.4rem] [&>h3]:text-neutral-380 [&>h3]:dark:text-dark-360 [&>h3]:text-[1.6rem] [&>h3]:font-semibold font-default">
                <ReactMarkdown children={mdInfo}/>
            </div>
        </motion.div>
    )
}