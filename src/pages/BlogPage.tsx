import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedLayout from "../layouts/AnimatedLayout";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

interface BlogData {
    title: string;
    article: string;
    "date-created": string;
    desc: string;
    thumbnail?: string;
}

export default function BlogPage() {

    const [blogData, setBlogData] = useState<BlogData[] | null>(null)

    useEffect(() => {

        async function getData() {
            const response = await fetch("/_blogs/blog_data.json")
            const data = await response.json()

            setBlogData(data)
        }

        getData()

    }, [])

    if (blogData === null) {
        return <LoadingPage/>
    }


    return (
        <>

            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                Blog Posts
            </AnimatedLayout>

            <div className="w-full flex flex-wrap gap-8">
            {
                blogData.map((blogs:BlogData, index:number) => {
                    return (
                    <BlogItem 
                        key={index} 
                        {...blogs}
                    />)
                })
            }
            </div>

        </>
    )
}

const BlogItem = (data: BlogData) => {
    
    return (
        <AnimatedLayout className="w-full rounded-xl shadow-elevate dark:shadow-elevate-dark p-4 group cursor-pointer">
            <Link to={`.${data.article}`}>
                <div className="font-bold text-[20px] mb-1">{data.title}</div>

                <div className="w-full overflow-hidden text-[16px] break-word line-clamp-4">{data.desc}</div>

                <div className="w-full flex justify-between mt-2">
                    <div className="text-black/70 dark:text-white/70 text-[16px] font-bold">
                        {data["date-created"]}
                    </div>
                    <div className="text-black/70 dark:text-white/70 flex font-bold text-[16px] [&>svg]:ml-1 [&>svg]:text-[20px] group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-[0.4s]">
                        Read More 
                        <Icon 
                            icon={"mdi:arrow-right-thin-circle-outline"}
                            width={"1.5rem"}
                        />
                    </div>
                </div>
            </Link>
        </AnimatedLayout>
    )
}

export const BlogArticle = () => {

    const nav = useNavigate()
    const {blog_id} = useParams<string>()
    const [mdInfo, setMdInfo] = useState<string | undefined>(undefined)

    if (blog_id === undefined) {
        return <ErrorPage/>
    }

    useEffect(() => {

        const getArticle = async() => {

            const response = await fetch(`/_blogs/${blog_id}.md`)
            if (response.ok) {
                const text = await response.text()
                setMdInfo(text)
            } else {
                nav("/error")
            }
        }

        getArticle()

    }, [])

    if (mdInfo === undefined) {
        return <LoadingPage/>
    }


    return (
        <AnimatedLayout>

            <div id="article">
                <ReactMarkdown children={mdInfo} />
            </div>

        </AnimatedLayout>
    )
}