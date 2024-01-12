import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Octokit } from "octokit";
import { Icon } from "@iconify/react"

import AnimatedLayout from "../layouts/AnimatedLayout";
import LoadingPage from "./LoadingPage";

interface Social {
    icon: string;
    link: string;
}

interface ExpInfoProps {
    org: string;
    pos: string;
    desc: string;  
    date: string; 
}

interface HomePageData {
    socials: Social[];
    about: string;
    techstack: string[];
    exps: ExpInfoProps[]
}

export default function HomePage() {

    const [homeData, setHomeData] = useState<HomePageData | null>(null)

    useEffect(() => {

        async function getData() {

            const octokit = new Octokit({auth: import.meta.env.VITE_GITHUB_TOKEN})

            const data = await octokit.request(`GET /repos/WarrenWu4/blackbox/contents/_data/home.json`, {
                owner: "WarrenWu4",
                repo: "blackbox",
                path: "_data/home.json",
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28"
                }
            })

            setHomeData(JSON.parse(atob(data.data.content)))

        }

        getData()

    }, [])

    if (homeData === null) {
        return <LoadingPage/>
    }

    return (
        <>

            <AnimatedLayout className="flex items-center justify-center flex-col leading-tight">

                <span className="font-bold text-[40px] mb-3">
                    Hi, I'm Warren
                </span>

                <span className="font-medium text-[20px] text-black/80 dark:text-white/80 mb-4 text-center">
                    I like building software that helps people 👍
                </span>

                <span className="flex items-center gap-x-4 text-[24px]">
                    {homeData.socials.map((social: Social, index: number) => {
                        return (<a key={index} href={social.link} target="_blank">
                            <Icon icon={`mdi:${social.icon}`} width="2rem"/>
                        </a>)
                    })}
                </span>

            </AnimatedLayout>

            <AnimatedLayout className="w-full p-6 relative rounded-xl border-4 border-black/60 dark:border-white/60 border-solid">

                <span className="font-bold text-[20px] text-black/60 dark:text-white/60 px-2 bg-white dark:bg-dark-bg absolute left-6 top-[-18px]">ABOUT</span>

                <span className="text-[16px] leading-[1.5]">
                    {homeData.about}
                </span>

            </AnimatedLayout>

            <AnimatedLayout className="w-full p-6 rounded-xl shadow-elevate dark:shadow-elevate-dark">

                <span className="font-bold text-[20px] text-black/60 dark:text-white/60 ml-2">
                    TECH STACK
                </span>

                <span className="flex flex-wrap gap-8 w-full pt-6 pb-1">
                    {homeData.techstack.map((icon:string, index:number) => {
                        return (<div key={index} className="w-[50px] aspect-square rounded-md flex justify-center items-center text-[35px] shadow-tech dark:shadow-tech-dark dark:text-white">
                            <Icon icon={`simple-icons:${icon}`}/>
                        </div>)
                    })}
                </span>

            </AnimatedLayout>

            <AnimatedLayout className="w-full p-6 flex flex-col rounded-xl bg-black/80 dark:bg-white dark:text-black/80 text-white">

                <span className="font-bold text-[20px] ml-2">EXPERIENCES</span>

                <div className="h-full w-full flex flex-col items-center gap-4 pt-6 pb-1">
                    {
                        homeData.exps.map((info:ExpInfoProps, index:number) =>
                            <ExpInfo
                                key={index}
                                org={info.org}
                                pos={info.pos}
                                desc={info.desc}
                                date={info.date}
                            />
                        )
                    }
                </div>

            </AnimatedLayout>

        </>
    )
}

const ExpInfo:React.FC<ExpInfoProps> = ({org, pos, desc, date}) => {

    const [show, setShow] = useState(false);

    return (
    <button type="button" onClick={() => setShow(!show)} className="w-full flex flex-col border-4 border-white/80 border-solid rounded-xl p-3 text-white/80 dark:text-black/80 dark:border-black/80">

        <div className="w-full flex justify-between items-center">

            <span className="text-[20px] font-semibold">{org}</span>

            <Icon 
                icon="bi:caret-down"
                stroke="currentColor"
                strokeWidth={0.6} 
                className={twMerge("w-6 h-6 transition-all duration-500", (show ? "rotate-180" : "rotate-0"))}
            />

        </div>
        <div className={`${(show) ? "grid-rows-exp":"grid-rows-zed"}` + " grid overflow-hidden transition-all duration-[0.4s]"}>

            <div className="min-h-0 flex flex-col text-start">
                <span className="text-[16px] font-medium">{pos}</span>
                <span className="text-white dark:text-black text-[16px] mt-2">{desc}</span>
                <span className="text-[16px] font-medium mt-3">{date}</span>
            </div>

        </div>
    </button>
    )
}