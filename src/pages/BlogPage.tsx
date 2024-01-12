import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/blog.json";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedLayout from "../layouts/AnimatedLayout";

interface BlogData {
    title: string;
    article: string;
    dateCreated: string;
    desc: string;
}

export default function BlogPage() {

    return (
        <>

            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                Blog Posts
            </AnimatedLayout>

            <div className="w-full flex flex-wrap gap-8">
            {
                data["blogs"].map((metadata, index) => {
                    return <BlogItem key={index} title={metadata["title"]} article={metadata["article"]} dateCreated={metadata["date-created"]} desc={metadata["desc"]} ></BlogItem>
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
                        {data.dateCreated}
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

    const {blog_id} = useParams<string>()
    const [mdInfo, setMdInfo] = useState<string>(``)

    useEffect(() => {

        const getArticle = async() => {
            const response = await fetch(`/blog_articles/${blog_id}/index.md`)
            if (response?.ok) {
                const text = await response.text()
                setMdInfo(text)
            }
            else {
                console.log(`${response?.status} error: article not found`)
                window.location.href = "/error"
            }
        }

        getArticle()

    }, [])


    return (
        <AnimatedLayout>

            <div id="blog">
                <ReactMarkdown children={mdInfo} />
            </div>

        </AnimatedLayout>
    )
}