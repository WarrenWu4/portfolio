import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/proj.json";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectInfo() {

    const id = useParams() as any;
    const title:string = data.projects[id.id-1].name;

    const [mdInfo, setMdInfo] = useState("")
    useEffect(() => {
        fetch('/src/data/proj_articles'+data.projects[id.id-1].links[0]).then(res=>res.text()).then(text=>setMdInfo(text))
    })

    const githubComp = (data.projects[id.id-1].links.length >= 2) ? 
    <a target="_blank" href={data.projects[id.id-1].links[1]}>
        <div className="text-[black] dark:text-dark-100 transition-all duration-[0.4s] flex items-center font-default text-[1.6rem] font-medium [&>*]:ml-[0.8rem] border-[0.3rem] border-solid border-[black] dark:border-dark-380 px-[1.2rem] py-[0.4rem] rounded-[0.8rem] hover:bg-[black] hover:text-[white] dark:hover:bg-dark-100 dark:hover:text-dark-bg">GitHub <BiLinkExternal/></div>
    </a> 
    :
    ""

    const weblinkComp = (data.projects[id.id-1].links.length >= 3) ? 
    <a target="_blank" href={data.projects[id.id-1].links[2]}>
        <div className="text-[black] dark:text-dark-100 transition-all duration-[0.4s] flex items-center font-default text-[1.6rem] font-medium [&>*]:ml-[0.8rem] border-[0.3rem] border-solid border-[black] dark:border-dark-380 px-[1.2rem] py-[0.4rem] rounded-[0.8rem] hover:bg-[black] hover:text-[white] dark:hover:bg-dark-100 dark:hover:text-dark-bg">Website <BiLinkExternal/></div>
    </a>
    :
    ""

    return (
        <motion.div exit={{opacity: 0, transform: "translateY(20vw)"}} transition={{duration:0.6, ease:"easeInOut"}}  className="w-screen h-screen flex flex-col items-center relative">
            <div className="mt-[12.8rem] mb-[2rem] text-[black] dark:text-dark-100 font-default font-bold text-[3.6rem]">{title}</div>
            

            <div className="max-w-[1536px] w-screen flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] [&>h2]:text-[black] [&>h2]:dark:text-dark-100 [&>h2]:font-bold [&>h2]:text-[2.4rem] [&>h2]:my-[2.4rem] [&>h3]:text-neutral-380 [&>h3]:dark:text-dark-360 [&>h3]:text-[1.6rem] [&>h3]:font-semibold font-default">
                <ReactMarkdown children={mdInfo}/>
            </div>

            <div className="max-w-[1536px] w-screen flex px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] my-[4.8rem] [&>*]:mr-[2rem]">
                {githubComp}
                {weblinkComp}
            </div>
        </motion.div>
    )
}