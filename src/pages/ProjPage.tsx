import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import AnimatedLayout from "../layouts/AnimatedLayout";
import LoadingPage from "./LoadingPage";

interface ProjData {
    title: string,
    desc: string,
    techstack: string[],
    article: string,
    thumbnail?: string,
    github?: string,
    demo?: string
}

export function ProjPage() {

    const [projData, setProjData] = useState<ProjData[] | null>(null)

    useEffect(() => {

        async function getData() {

            const response = await fetch("_data/proj.json")
            let data = await response.json()

            setProjData(data.reverse())
        }

        getData()

    }, [])

    if (projData === null) {
        return <LoadingPage/>
    }

    return (
        <>

            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                
                Projects
                
            </AnimatedLayout>

            <div className="w-full flex flex-wrap gap-8 justify-center huh:justify-start">
                {
                    projData.map((project: ProjData, index:number) => {
                        return (
                        <ProjCard 
                            key={index} 
                            title={project.title} 
                            desc={project.desc} 
                            techstack={project.techstack} 
                            thumbnail={project.thumbnail} 
                            article={project.article} 
                            github={project.github} 
                            demo={project.demo}
                        />)
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

function ProjCard({title, desc, techstack, article, thumbnail, github, demo}: ProjData) {

    const githubComp = (github !== undefined) ? 
    <a target="_blank" href={github}>
        <Icon icon={"mdi:github"} width={"1.5rem"} className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-[0.2s] hover:scale-[120%]"/>
    </a> 
    :
    ""

    const weblinkComp = (demo !== undefined) ? 
    <a target="_blank" href={demo}>
        <Icon icon={"mdi:web"} width={"1.5rem"} className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-[0.2s] hover:scale-[120%]" />
    </a>
    :
    ""

    return (
        <AnimatedLayout className="w-[300px] aspect-square shadow-elevate dark:shadow-elevate-dark rounded-xl flex flex-col relative overflow-hidden">

            <div 
                className={"border-b-2 border-solid border-black box-border w-full h-[55%] bg-no-repeat bg-top bg-cover relative group"}
                style={{backgroundImage: (thumbnail !== undefined ) ? `url(/_imgs/${thumbnail})` : "url(/_imgs/placeholder.png)"}}
            >

                <div className="absolute top-0 left-0 w-full h-full bg-[black]/[0.8] text-[24px] flex justify-center items-center flex-wrap opacity-0 transition-[opacity] duration-[0.6s] ease-in-out group-hover:opacity-100 gap-2">
                    {
                        techstack.map((icon:string, index:number) => {
                            return <Icon key={index} icon={`simple-icons:${icon}`}/>
                        })
                    }
                </div>

            </div>

            <div className="w-full h-[45%] p-4 pb-3 flex flex-col justify-between">
                    
                <div className="flex flex-col">
                    <div className="font-bold text-[24px]">{title}</div>
                    <div className="text-black/60 dark:text-white/60 font-bold text-[12px] text-ellipsis overflow-hidden line-clamp-2">{desc}</div>
                </div>

                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-x-1 items-center">
                        {githubComp}
                        {weblinkComp}
                    </div>

                    <Link to={"./"+article} className="flex gap-x-1 items-center text-black/70 dark:text-white/70 font-bold hover:text-black dark:hover:text-white hover:translate-x-1 transition-all duration-[0.4s]">
                        Learn More 
                        <Icon 
                            icon={"mdi:arrow-right-thin-circle-outline"}
                            width={"1.5rem"}
                        />
                    </Link>

                </div>

            </div>

        </AnimatedLayout>
    )
}