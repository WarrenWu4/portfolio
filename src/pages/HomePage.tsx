import { useEffect, useState } from "react";
import { Icon } from "@iconify/react"
import LoadingPage from "./LoadingPage";
import { NavLink } from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
import EventCard from "../components/events/EventCard";

interface Social {
    icon: string;
    link: string;
}

interface Event{
    title: string,
    description: string,
    date: string,
}

interface Blog {
    title: string;
    article: string;
    "date-created": string;
    thumbnail: string;
    desc: string;
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
    const [eventsData, setEventsData] = useState<Event[] | null>(null)
    const [latestBlogPost, setLatestBlogPost] = useState<Blog | null>(null)

    useEffect(() => {
    
        async function getHomeData() {
            const response = await fetch("_data/home.json")
            const data = await response.json()
            setHomeData(data)
        }
        async function getEventsData() {
            const response = await fetch("_data/events.json")
            const data = await response.json()
            data.sort((a: Event, b: Event) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            setEventsData(data.slice(0, 2))
        }
        async function getLatestBlogPost() {
            const response = await fetch("_blogs/blog_data.json")
            const data = await response.json()
            console.log(data)
            data.sort((a: Blog, b: Blog) => {
                return new Date(b["date-created"]).getTime() - new Date(a["date-created"]).getTime()
            })
            setLatestBlogPost(data[0])
        }

        getHomeData()
        getEventsData()
        getLatestBlogPost()

    }, [])

    if (homeData === null || eventsData === null || latestBlogPost === null) {
        return <LoadingPage/>
    }

    return (
        <div className="flex flex-col gap-y-6">
            <HeroSection socials={homeData.socials}/>
            <AboutSection about={homeData.about} />
            <EventsSection events={eventsData}/>
            <ProjectSection/>
            <BlogSection post={latestBlogPost}/>
        </div>
    )
}

function HeroSection({socials}: {socials: Social[]}) {
    return (
        <div className="w-full flex flex-col gap-y-0">
            <div className="flex items-center justify-center flex-col border-4">

                <div className="w-fit px-12 py-6 border-r-4 border-l-4 flex flex-col items-center">
                    <h1 className="font-bold text-40 mb-3">
                        Hi, I'm Warren
                    </h1>

                    <h3 className="font-medium text-xl text-black/80 dark:text-white/80 text-center">
                        I like building software that helps people 👍
                    </h3>
                </div>

            </div>
            <div className="flex items-center p-6 justify-center gap-x-5 border-4 text-2xl border-t-0">
                {socials.map((social: Social, index: number) => {
                    return (
                    <a key={index} href={social.link} target="_blank" className="p-1 flex items-center justify-center brutalist-sm">
                        <Icon icon={`mdi:${social.icon}`} width="2.2rem"/>
                    </a>
                )})}
            </div>
        </div>
    )
}

function AboutSection({about}: {about: string}) {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#E8C6F0]">
            <h2 className="font-bold text-xl mb-2">
                ABOUT ME
            </h2>
            <p className="text-lg leading-7">
                {about}
            </p>
            <NavLink to={"/about"} className={"w-fit brutalist bg-[#ED9FFF] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
                READ MORE 
                <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
            </NavLink>
        </div>
    )
}

function EventsSection({events}: {events: Event[]}) {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#C6CFF0]">
            <h2 className="font-bold text-xl mb-2">
                RECENT EVENTS
            </h2>
            <div className="brutalist bg-[#91BCFD]">
                {events.map((event: Event, index: number) => {
                    return (
                        <EventCard
                            key={index}
                            event={event}
                            className={(index === 0) ? "" : "border-t-4"}
                        />
                )})}
            </div>
            <NavLink to={"/misc/timeline"} className={"w-fit brutalist bg-[#9FA9FF] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
                VIEW MORE 
                <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
            </NavLink>
        </div>
    )
}

function ProjectSection() {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#D4F0C6]">
            <h2 className="font-bold text-xl mb-2">
                CURRENT PROJECT
            </h2>
            <div className="flex brutalist bg-[#A4E583]">
                <div className="py-4 px-5 flex flex-col gap-y-1">
                    <h4 className="font-bold text-base">Takeoff</h4>
                    <p>A tool that bootstraps packages and streamlines project setup</p>
                </div>
                <div className="py-4 px-5 border-l-4">
                    <img src="/_imgs/placeholder.png" width={320} height={180} className="border-4 rounded-md"/>
                </div>
            </div>
            <NavLink to={"/proj"} className={"w-fit brutalist bg-[#9FFFB4] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
                VIEW MORE 
                <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
            </NavLink>
        </div>
    )
}

function BlogSection({post}: {post: Blog}) {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#F0E7C6]">
            <h2 className="font-bold text-xl mb-2">
                LATEST BLOG POST
            </h2>
            <BlogCard
                blog={post}
                className="brutalist bg-[#F2DE95]"
            />
            <NavLink to={"/blog"} className={"w-fit brutalist bg-[#FFD39F] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
                VIEW MORE 
                <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
            </NavLink>
        </div>
    )
}