import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/exp.json";

export default function ExpInfo() {

    const id = useParams() as any;
    const title:string = data.experiences[id.id-1].org;

    const [mdInfo, setMdInfo] = useState("")
    useEffect(() => {
        fetch('/src/data/exp_articles'+data.experiences[id.id-1].links[0]).then(res=>res.text()).then(text=>setMdInfo(text))
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative">
            <div className="mt-[12.8rem] mb-[2rem] text-[black] dark:text-dark-100 font-default font-bold text-[3.6rem]">{title}</div>
            
            <div></div>

            <div className="max-w-[1536px] w-screen flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] [&>h2]:text-[black] [&>h2]:dark:text-dark-100 [&>h2]:font-bold [&>h2]:text-[2.4rem] [&>h2]:my-[2.4rem] [&>h3]:text-neutral-380 [&>h3]:dark:text-dark-360 [&>h3]:text-[1.6rem] [&>h3]:font-semibold font-default">
                <ReactMarkdown children={mdInfo}/>
            </div>
        </motion.div>
    )
}