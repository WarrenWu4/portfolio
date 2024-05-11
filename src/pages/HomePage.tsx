import { useEffect, useState } from "react";
import { Icon } from "@iconify/react"
import AnimatedLayout from "../layouts/AnimatedLayout";
import LoadingPage from "./LoadingPage";

interface Social {
    icon: string;
    link: string;
}

interface Event{
    title: string,
    description: string,
    date: string,
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
            const response = await fetch("_data/home.json")
            const data = await response.json()
            setHomeData(data)
        }

        getData()

    }, [])

    if (homeData === null) {
        return <LoadingPage/>
    }

    return (
        <>
            <HeroSection socials={homeData.socials}/>
            <AboutSection about={homeData.about} />
            <EventsSection events={[""]}/>
            <ProjectSection/>
            <BlogSection/>
        </>
    )
}

function HeroSection({socials}: {socials: Social[]}) {
    return (
        <div className="flex items-center justify-center flex-col">

            <h1 className="font-bold text-4xl mb-3 animate-fadeRight">
                Hi, I'm Warren
            </h1>

            <h3 className="font-medium text-xl text-black/80 dark:text-white/80 mb-4 text-center animate-fadeLeft">
                I like building software that helps people 👍
            </h3>

            <span className="flex items-center gap-x-4 text-[24px]">
                {socials.map((social: Social, index: number) => {
                    return (
                    <a key={index} href={social.link} target="_blank" className="animate-fadeTop opacity-0 brutalist p-2" style={{animationDelay: `${index*200}ms`}}>
                        <Icon icon={`mdi:${social.icon}`} width="2.2rem"/>
                    </a>
                )})}
            </span>

        </div>
    )
}

function AboutSection({about}: {about: string}) {
    return (
        <div className="w-full p-6 brutalist bg-blue-200 dark:bg-blue-600">
            <h2 className="font-bold text-xl mb-2">
                ABOUT ME
            </h2>
            <p className="text-lg leading-7">
                {about}
            </p>
        </div>
    )
}

function EventsSection({events}: {events: string[]}) {
    return (
        <AnimatedLayout className="w-full p-6 brutalist bg-green-200 dark:bg-green-600">
            <h2 className="font-bold text-xl mb-2">
                RECENT EVENTS
            </h2>
        </AnimatedLayout>
    )
}

function ProjectSection() {
    return (
        <AnimatedLayout className="w-full p-6 brutalist bg-amber-200 dark:bg-amber-600">
            <h2 className="font-bold text-xl mb-2">
                CURRENT PROJECT
            </h2>
        </AnimatedLayout>
    )
}

function BlogSection() {
    return (
        <AnimatedLayout className="w-full p-6 brutalist bg-pink-200 dark:bg-pink-600">
            <h2 className="font-bold text-xl mb-2">
                LATEST BLOG POST
            </h2>
        </AnimatedLayout>
    )
}