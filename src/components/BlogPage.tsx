import { motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/blog.json";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface BlogData {
    title: string;
    article: string;
    dateCreated: string;
    desc: string;
}

export default function BlogPage() {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    

    return (
        <div className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">

            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] w-full text-center huh:text-left font-bold text-[4rem]">Blog Posts</motion.div>

            <div className="w-full flex flex-wrap gap-[3.2rem] mt-[4.8rem]">
            {
                data["blogs"].map((metadata, index) => {
                    return <BlogItem key={index} title={metadata["title"]} article={metadata["article"]} dateCreated={metadata["date-created"]} desc={metadata["desc"]} ></BlogItem>
                })
            }
            </div>

        </div>
    )
}

const BlogItem = (data: BlogData) => {
    
    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const transition = {
        duration: 1,
        ease: "easeInOut"
    }
    
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={transition} variants={variants} className="w-full rounded-[1.2rem] shadow-elevate dark:shadow-elevate-dark p-[1.6rem] group cursor-pointer">
            <Link to={`.${data.article}`}>
                <div className="font-bold text-[2rem]">{data.title}</div>
                <div className="w-full overflow-hidden text-[1.6rem] break-word line-clamp-4">{data.desc}</div>

                <div className="w-full flex justify-between mt-[0.8rem]">
                    <div className="text-black/70 dark:text-white/70 text-[1.6rem] font-bold">
                        {data.dateCreated}
                    </div>
                    <div className="text-black/70 dark:text-white/70 flex font-bold text-[1.6rem] [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] group-hover:text-black dark:group-hover:text-white group-hover:translate-x-[0.4rem] transition-all duration-[0.4s]">
                        Read More <FiArrowRightCircle className="translate-y-[0.16rem]" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export const BlogArticle = () => {

    const {blog_id} = useParams<string>()
    const [mdInfo, setMdInfo] = useState<string>(``)

    useEffect(() => {
        fetch(`/blog_articles/${blog_id}/index.md`).then(res=>res.text()).then(text=>setMdInfo(text))
    }, [])

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const transition = {
        duration: 1,
        ease: "easeInOut"
    }

    return (
        <motion.div initial="hidden" whileInView={"visible"} viewport={{once: true}} transition={transition} variants={variants} className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">

            <div className="mt-[4.8rem] w-full flex flex-col" id="blog">
                <ReactMarkdown children={mdInfo} />
            </div>

        </motion.div>
    )
}