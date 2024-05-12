import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedLayout from "../layouts/AnimatedLayout";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import { Blog } from "../lib/types";
import ContentLayout from "../layouts/ContentLayout";
import BlogCard from "../components/blog/BlogCard";

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
        <ContentLayout title="Blog" className="bg-[#F0E7C6]">

            <div className="w-full flex flex-col brutalist bg-[#F2DE95]">
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
        <AnimatedLayout>

            <div id="article">
                <ReactMarkdown children={mdInfo} />
            </div>

        </AnimatedLayout>
    )
}