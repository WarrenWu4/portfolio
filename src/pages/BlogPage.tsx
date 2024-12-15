import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import { Blog } from "../lib/types";
import ContentLayout from "../layouts/ContentLayout";
import BlogCard from "../components/blog/BlogCard";
import rehypeRaw from "rehype-raw";

export default function BlogPage() {

    const [blogData, setBlogData] = useState<Blog[] | null>(null)

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
        <ContentLayout title="Blog" className="bg-[#F0E7C6] dark:bg-[#6f633d]">

            <div className="w-full flex flex-col brutalist bg-[#F2DE95] dark:bg-[#554d2b]">
            {
                blogData.map((blog:Blog, index:number) => {
                    return (
                    <BlogCard 
                        key={index} 
                        blog={blog}
                        className={(index === 0) ? "" : "border-t-4"}
                    />
                )})
            }
            </div>

        </ContentLayout>
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
        <ContentLayout>

            <div id="article">
                {/* @ts-ignore */}
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={mdInfo} />
            </div>

        </ContentLayout>
    )
}