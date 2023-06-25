import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsGlobe, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/proj.json";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect, useState } from "react";

import {IconGen} from "../App";
import proj from "../data/proj.json";

export function ProjPage() {

    const projCards:any[] = []
    proj.projects.map((project) => {
        let github_link = (project.links.length >= 2) ? project.links[1]: "" 
        let web_link = (project.links.length >= 3) ? project.links[2]: "" 
        projCards.push(
            <ProjCard
                key = {project.id}
                id = {project.id}
                name={project.name}
                desc={project.desc}
                techStack={IconGen({icons: project.techstack})}
                imgPath={project.imgPath}
                github={github_link}
                weblink={web_link}
            />
        )
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative dark:bg-dark-bg">

            <div className="mt-[12.8rem] mb-[3.2rem] text-[black] font-default font-bold text-[3.6rem] dark:text-dark-100">Projects</div>

            <div className="grid place-items-center grid-cols-1 gap-[3.2rem] pb-[6.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
                {projCards}
            </div>

        </motion.div>
    )
}

export function ProjInfo() {

    const id = useParams() as any;
    const title:string = data.projects[id.id-1].name;

    const [mdInfo, setMdInfo] = useState(``)
    useEffect(() => {
        fetch('/proj_articles'+data.projects[id.id-1].links[0]).then(res=>res.text()).then(text=>setMdInfo(text));
    })

    const githubComp = (data.projects[id.id-1].links.length >= 2) ? 
    <a target="_blank" href={data.projects[id.id-1].links[1]}>
        <div className="text-[black] dark:text-dark-100 transition-all duration-[0.4s] flex items-center font-default text-[1.6rem] font-semibold [&>*]:ml-[0.8rem] border-[0.3rem] border-solid border-[black] dark:border-dark-380 px-[1.2rem] py-[0.4rem] rounded-[0.8rem] hover:bg-[black] hover:text-[white] dark:hover:bg-dark-100 dark:hover:text-dark-bg">GitHub <BiLinkExternal/></div>
    </a> 
    :
    ""

    const weblinkComp = (data.projects[id.id-1].links.length >= 3) ? 
    <a target="_blank" href={data.projects[id.id-1].links[2]}>
        <div className="text-[black] dark:text-dark-100 transition-all duration-[0.4s] flex items-center font-default text-[1.6rem] font-semibold [&>*]:ml-[0.8rem] border-[0.3rem] border-solid border-[black] dark:border-dark-380 px-[1.2rem] py-[0.4rem] rounded-[0.8rem] hover:bg-[black] hover:text-[white] dark:hover:bg-dark-100 dark:hover:text-dark-bg">Website <BiLinkExternal/></div>
    </a>
    :
    ""

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative">
            <div className="mt-[12.8rem] text-[black] dark:text-dark-100 font-default font-bold text-[3.6rem] mb-[1.6rem]">{title}</div>
            

            <div className="max-w-[1024px] w-screen flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem]" id="article">
                <ReactMarkdown children={mdInfo} />
            </div>

            <div className="max-w-[1024px] w-screen flex px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] py-[4.8rem] [&>*]:mr-[2rem]">
                {githubComp}
                {weblinkComp}
            </div>
        </motion.div>
    )
}

function ProjCard(props: {id:number, name: string, desc: string, imgPath?:string, techStack?:any, github:string, weblink:string}) {

    const githubComp = (props.github !== "") ? 
    <a target="_blank" href={props.github}>
        <BsGithub className="text-neutral-380 hover:text-[black] dark:text-dark-380 dark:hover:text-dark-100 transition-all duration-[0.2s] hover:scale-[120%]"/>
    </a> 
    :
    ""

    const weblinkComp = (props.weblink !== "") ? 
    <a target="_blank" href={props.weblink}>
        <BsGlobe className="text-neutral-380 hover:text-[black] dark:text-dark-380 dark:hover:text-dark-100 transition-all duration-[0.2s] hover:scale-[120%]" />
    </a>
    :
    ""

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, ease:"easeInOut" }} variants={{visible: { opacity: 1 },hidden: { opacity: 0 }}} className="w-[30rem] aspect-square shadow-card dark:shadow-card-dark rounded-[0.4rem] flex flex-col relative">

            <div className="border-b-[0.2rem] border-solid border-[black] box-border w-full h-[55%] bg-neutral-360 bg-no-repeat bg-top bg-cover rounded-t-[0.4rem] relative group" style={{backgroundImage: `url("/proj_img${props.imgPath}")`}}>
                <div className="absolute top-0 left-0 w-full h-full bg-[black]/[0.8] font-bold font-default text-[white] text-[2.4rem] rounded-[0.2rem] flex justify-center items-center flex-wrap opacity-0 transition-[opacity] duration-[0.2s] ease-in-out group-hover:opacity-100 [&>*]:m-[0.8rem]">
                    {props.techStack}
                </div>
            </div>

            <div className="mt-[1.6rem] mr-[0.8rem] ml-[1.6rem] font-default font-bold text-[black] dark:text-dark-100 text-[2.4rem]">{props.name}</div>
            <div className="max-w-[27.2rem] ml-[1.6rem] h-[4rem] text-neutral-360 font-bold font-default text-[1.2rem] dark:text-dark-360 text-ellipsis overflow-hidden line-clamp-2">{props.desc}</div>

            <div className="flex [&>*]:mr-[0.8rem] text-[2rem] absolute bottom-[1.2rem] left-[1.6rem]">
                {githubComp}
                {weblinkComp}
            </div>

            <Link to={"./"+props.id}>
            <div className="text-neutral-380 dark:text-dark-380 absolute flex bottom-[1.2rem] right-[1.6rem] font-default font-bold text-[1.6rem] cursor-pointer [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] hover:text-[black] dark:hover:text-dark-100 hover:translate-x-[0.4rem] transition-all duration-[0.4s]">
                    Learn More <FiArrowRightCircle className="translate-y-[0.16rem]" />
            </div>
            </Link>

        </motion.div>
    )
}