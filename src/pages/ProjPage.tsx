import { FiArrowRightCircle } from "react-icons/fi";
import { BsGlobe, BsGithub } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";

import {IconGen} from "../App";
import proj from "../data/proj.json";

import AnimatedLayout from "../layouts/AnimatedLayout";

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

    return (
        <>

            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                
                Projects
                
            </AnimatedLayout>

            <div className="w-full flex flex-wrap gap-8 justify-center huh:justify-start">
                {
                    proj.projects.map((project, index) => {
                        return <ProjCard key={index} title={project.title} desc={project.desc} techstack={project.techstack} thumbnail={project.thumbnail} article={project.article} github={project.github} link={project.link}></ProjCard>
                    })
                }
            </div>

        </>
    )
}

export function ProjInfo() {

    const {proj_id} = useParams<string>()
    const [mdInfo, setMdInfo] = useState<string>(``)

    useEffect(() => {

        const getProj = async() => {
            const response = await fetch(`/proj_articles/${proj_id}/${proj_id}.md`)
            if (response?.ok) {
                const text = await response.text()
                setMdInfo(text)
            }
            else {
                console.log(`${response?.status} error: article not found`)
                window.location.href = "/error"
            }
        }
        getProj()

    }, [])

    return (
        <AnimatedLayout>

            <div id="article">
                <ReactMarkdown children={mdInfo} />
            </div>

        </AnimatedLayout>
    )
}

function ProjCard(data: ProjectData) {

    const githubComp = (data.github !== undefined) ? 
    <a target="_blank" href={data.github}>
        <BsGithub className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-[0.2s] hover:scale-[120%]"/>
    </a> 
    :
    ""

    const weblinkComp = (data.link !== undefined) ? 
    <a target="_blank" href={data.link}>
        <BsGlobe className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-[0.2s] hover:scale-[120%]" />
    </a>
    :
    ""

    const techIcons = IconGen({icons:data.techstack})

    return (
        <AnimatedLayout className="w-[300px] aspect-square shadow-elevate dark:shadow-elevate-dark rounded-xl flex flex-col relative overflow-hidden">

            <div className="border-b-2 border-solid border-[black] box-border w-full h-[55%] bg-neutral-360 bg-no-repeat bg-top bg-cover relative group" style={{backgroundImage: `url("${data.thumbnail}")`}}>
                <div className="absolute top-0 left-0 w-full h-full bg-[black]/[0.8] font-bold font-default text-[white] text-[24px] flex justify-center items-center flex-wrap opacity-0 transition-[opacity] duration-[0.6s] ease-in-out group-hover:opacity-100 [&>*]:m-[0.8rem]">
                    {techIcons}
                </div>
            </div>

            <div className="mt-4 mr-2 ml-4 font-bold dark:text-white text-[24px]">{data.title}</div>
            <div className="max-w-[272px] ml-4 h-[40px] text-black/60 dark:text-white/60 font-bold text-[12px] text-ellipsis overflow-hidden line-clamp-2">{data.desc}</div>

            <div className="flex gap-x-2 text-[20px] absolute bottom-3 left-4">
                {githubComp}
                {weblinkComp}
            </div>

            <Link to={"."+data.article}>
            <div className="text-black/70 dark:text-white/70 absolute flex bottom-3 right-4 font-default font-bold text-[16px] cursor-pointer [&>svg]:ml-1 [&>svg]:text-[20px] hover:text-black dark:hover:text-white hover:translate-x-1 transition-all duration-[0.4s]">
                    Learn More <FiArrowRightCircle className="translate-y-[0.16rem]" />
            </div>
            </Link>

        </AnimatedLayout>
    )
}