import { motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function BlogPage() {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">

            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] text-center font-bold text-[4rem]">Blog Posts</motion.div>


        </div>
    )
}

export const BlogArticle = () => {
    return (
        <div className="max-w-[768px] w-screen min-h-screen flex flex-col items-center relative px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem]">

            <div className="mt-[4.8rem] text-center font-bold text-[4rem]">Title</div>

            <div className="w-full flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem]" id="blog">
                <ReactMarkdown children={`### teswovawoeivnawef`} />
            </div>

        </div>
    )
}