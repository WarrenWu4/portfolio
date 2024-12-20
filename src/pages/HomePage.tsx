import { useEffect, useState } from "react";
import { Icon } from "@iconify/react"
import LoadingPage from "./LoadingPage";
import { NavLink } from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
import EventCard from "../components/events/EventCard";
import { Social, Event, Blog } from "../lib/types";

interface HomeProps {
    socials: Social[]
    about: string
}

export default function HomePage() {

    const [homeData, setHomeData] = useState<HomeProps | null>(null)
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
            setEventsData(data.slice(0, 3))
        }
        async function getLatestBlogPost() {
            const response = await fetch("_blogs/blog_data.json")
            const data = await response.json()
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
            <BlogSection post={latestBlogPost}/>
        </div>
    )
}

function HeroSection({socials}: {socials: Social[]}) {
    return (
        <div className="w-full flex flex-col gap-y-0 leading-tight">
            <div className="flex items-center justify-center flex-col border-4">

                <div className="w-fit px-12 py-6 sm:border-r-4 sm:border-l-4 flex flex-col items-center text-center">
                    <h1 className="font-bold text-40 mb-3">
                        Hi, I'm 
                        <span className="underline underline-offset-4 decoration-dashed decoration-4 ml-2">Warren</span>
                    </h1>

                    <h3 className="font-medium text-xl text-black/80 dark:text-white/80 text-center">
                        I'm building software that helps people 👍
                    </h3>
                </div>

            </div>
            <div className="flex items-center p-6 justify-center gap-x-5 border-4 text-2xl border-t-0">
                {socials.map((social: Social, index: number) => {
                    return (
                    <a key={index} href={social.link} target="_blank" className="p-1 flex items-center justify-center btn-1-sm">
                        <Icon icon={`mdi:${social.icon}`} width="2.2rem"/>
                    </a>
                )})}
            </div>
        </div>
    )
}

function AboutSection({about}: {about: string}) {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#E8C6F0] dark:bg-[#5d4463]">
            <h2 className="font-bold text-xl">
                ABOUT ME
            </h2>
            <p className="text-lg leading-7 [&>a]:font-bold">
                {about}
                <br/><br/>
                Currently organizing hackathons {" "}
                <a className="hover:underline underline-offset-4 decoration-4" target="_blank" href="https://www.instagram.com/tamudatathon/">@TAMU Datathon</a>, creating workshops {" "}
                <a className="hover:underline underline-offset-4 decoration-4" target="_blank" href="https://www.aggiecodingclub.com/">@Aggie Coding Club</a>, and designing for {" "}
                <a className="hover:underline underline-offset-4 decoration-4" target="_blank" href="https://switchless.co/">@Switchless</a>. Previously {" "}
                <a className="hover:underline underline-offset-4 decoration-4" target="_blank" href="https://www.gm.com/">@General Motors</a>
            </p>
        </div>
    )
}

function EventsSection({events}: {events: Event[]}) {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#C6CFF0] dark:bg-[#3a3f52]">
            <h2 className="font-bold text-xl">
                RECENT EVENTS
            </h2>
            <div className="brutalist bg-[#91BCFD] dark:bg-[#253040]">
                {events.map((event: Event, index: number) => {
                    return (
                        <EventCard
                            key={index}
                            event={event}
                            className={(index === 0) ? "" : "border-t-4"}
                        />
                )})}
            </div>
            <NavLink to={"/misc/timeline"} className={"btn-1 w-fit bg-[#9FA9FF] dark:bg-[#1e2246] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
                VIEW MORE 
                <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
            </NavLink>
        </div>
    )
}

// function ProjectSection() {
//     return (
//         <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#D4F0C6] dark:bg-[#363e32]">
//             <h2 className="font-bold text-xl">
//                 CURRENT PROJECT
//             </h2>
//             <div className="flex brutalist bg-[#A4E583] dark:bg-[#384e2e]">
//                 <div className="py-4 px-5 flex flex-col gap-y-1 h-full">
//                     <h4 className="font-bold text-base">Takeoff</h4>
//                     <p>A tool that bootstraps packages and streamlines project setup</p>
//                     <a href="https://github.com/WarrenWu4/md-to-html-compiler" target="_blank" className="mt-auto w-fit">
//                         <Icon icon={"mdi:github"} className="btn-1-sm bg-[#9FFFB4] dark:bg-[#2d6739] w-10 h-10 p-1"/>
//                     </a>
//                 </div>
//                 <div className="py-4 px-5 border-l-4 flex items-center justify-center">
//                     <img src="/_imgs/placeholder.png" width={320} height={180} className="border-4 rounded-md"/>
//                 </div>
//             </div>
//             <NavLink to={"/proj"} className={"w-fit btn-1 bg-[#9FFFB4] dark:bg-[#2d6739] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
//                 VIEW MORE 
//                 <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
//             </NavLink>
//         </div>
//     )
// }

function BlogSection({post}: {post: Blog}) {
    return (
        <div className="w-full p-6 flex flex-col gap-y-4 border-4 bg-[#F0E7C6] dark:bg-[#6f633d]">
            <h2 className="font-bold text-xl">
                LATEST BLOG POST
            </h2>
            <BlogCard
                blog={post}
                className="brutalist bg-[#F2DE95] dark:bg-[#554d2b]"
            />
            <NavLink to={"/blog"} className={"w-fit btn-1 bg-[#FFD39F] dark:bg-[#6a5239] font-bold text-base flex items-center gap-x-2 px-6 py-4"}>
                VIEW MORE 
                <Icon icon={"fa-solid:arrow-right"} width={"1rem"}/>
            </NavLink>
        </div>
    )
}
