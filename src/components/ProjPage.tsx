import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsGlobe, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect, useState } from "react";

import {IconGen} from "../App";
import proj from "../data/proj.json";

interface ProjectData {
    title: string,
    desc: string,
    techstack: string[],
    thumbnail: string,
    article: string,
    github: string|undefined,
    link: string|undefined
}

export function ProjPage() {

    const [projCards, setProjCards] = useState<Array<JSX.Element>>([])

    useEffect(() => {

        proj.projects.map((project, index) => {
            setProjCards([...projCards, <ProjCard key={index} title={project.title} desc={project.desc} techstack={project.techstack} thumbnail={project.thumbnail} article={project.article} github={project.github} link={project.link} />])
        })

    }, [])


    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">

            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] text-center font-bold text-[4rem]">Projects</motion.div>

            <div className="w-full flex flex-wrap gap-[3.2rem] mt-[4.8rem]">
                {projCards}
            </div>

        </div>
    )
}

export function ProjInfo() {

    return (
        <>
        </>
    )

    // const id = useParams() as any;
    // const title:string = data.projects[id.id-1].name;

    // const [mdInfo, setMdInfo] = useState(``)
    // useEffect(() => {
    //     fetch('/proj_articles'+data.projects[id.id-1].links[0]).then(res=>res.text()).then(text=>setMdInfo(text));
    // })

    // const githubComp = (data.projects[id.id-1].links.length >= 2) ? 
    // <a target="_blank" href={data.projects[id.id-1].links[1]}>
    //     <div className="text-[black] dark:text-dark-100 transition-all duration-[0.4s] flex items-center font-default text-[1.6rem] font-semibold [&>*]:ml-[0.8rem] border-[0.3rem] border-solid border-[black] dark:border-dark-380 px-[1.2rem] py-[0.4rem] rounded-[0.8rem] hover:bg-[black] hover:text-[white] dark:hover:bg-dark-100 dark:hover:text-dark-bg">GitHub <BiLinkExternal/></div>
    // </a> 
    // :
    // ""

    // const weblinkComp = (data.projects[id.id-1].links.length >= 3) ? 
    // <a target="_blank" href={data.projects[id.id-1].links[2]}>
    //     <div className="text-[black] dark:text-dark-100 transition-all duration-[0.4s] flex items-center font-default text-[1.6rem] font-semibold [&>*]:ml-[0.8rem] border-[0.3rem] border-solid border-[black] dark:border-dark-380 px-[1.2rem] py-[0.4rem] rounded-[0.8rem] hover:bg-[black] hover:text-[white] dark:hover:bg-dark-100 dark:hover:text-dark-bg">Website <BiLinkExternal/></div>
    // </a>
    // :
    // ""

    // return (
    //     <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen flex flex-col items-center relative max-w-[768px] px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">
    //         <div className="mt-[4.8rem] text-[black] dark:text-dark-100 font-default font-bold text-[3.6rem] mb-[1.6rem]">{title}</div>
            

    //         <div className="w-full flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem]" id="article">
    //             <ReactMarkdown children={mdInfo} />
    //         </div>

    //         <div className="w-full flex px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] py-[4.8rem] [&>*]:mr-[2rem]">
    //             {githubComp}
    //             {weblinkComp}
    //         </div>
    //     </motion.div>
    // )
}

function ProjCard(data: ProjectData) {

    const githubComp = (data.github !== undefined) ? 
    <a target="_blank" href={data.github}>
        <BsGithub className="text-neutral-380 hover:text-[black] dark:text-dark-380 dark:hover:text-dark-100 transition-all duration-[0.2s] hover:scale-[120%]"/>
    </a> 
    :
    ""

    const weblinkComp = (data.link !== undefined) ? 
    <a target="_blank" href={data.link}>
        <BsGlobe className="text-neutral-380 hover:text-[black] dark:text-dark-380 dark:hover:text-dark-100 transition-all duration-[0.2s] hover:scale-[120%]" />
    </a>
    :
    ""
    
    const techIcons = IconGen({icons:data.techstack})

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: timer, ease:"easeInOut" }} variants={variants} className="w-[30rem] aspect-square shadow-elevate rounded-[1.2rem] flex flex-col relative overflow-hidden">

            <div className="border-b-[0.2rem] border-solid border-[black] box-border w-full h-[55%] bg-neutral-360 bg-no-repeat bg-top bg-cover relative group" style={{backgroundImage: `url("/proj_img${data.thumbnail}")`}}>
                <div className="absolute top-0 left-0 w-full h-full bg-[black]/[0.8] font-bold font-default text-[white] text-[2.4rem] rounded-[0.2rem] flex justify-center items-center flex-wrap opacity-0 transition-[opacity] duration-[0.2s] ease-in-out group-hover:opacity-100 [&>*]:m-[0.8rem]">
                    {techIcons}
                </div>
            </div>

            <div className="mt-[1.6rem] mr-[0.8rem] ml-[1.6rem] font-default font-bold text-[black] dark:text-dark-100 text-[2.4rem]">{data.title}</div>
            <div className="max-w-[27.2rem] ml-[1.6rem] h-[4rem] text-neutral-360 font-bold font-default text-[1.2rem] dark:text-dark-360 text-ellipsis overflow-hidden line-clamp-2">{data.desc}</div>

            <div className="flex [&>*]:mr-[0.8rem] text-[2rem] absolute bottom-[1.2rem] left-[1.6rem]">
                {githubComp}
                {weblinkComp}
            </div>

            <Link to={"./"+1}>
            <div className="text-neutral-380 dark:text-dark-380 absolute flex bottom-[1.2rem] right-[1.6rem] font-default font-bold text-[1.6rem] cursor-pointer [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] hover:text-[black] dark:hover:text-dark-100 hover:translate-x-[0.4rem] transition-all duration-[0.4s]">
                    Learn More <FiArrowRightCircle className="translate-y-[0.16rem]" />
            </div>
            </Link>

        </motion.div>
    )
}