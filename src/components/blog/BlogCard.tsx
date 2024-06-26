import { NavLink } from "react-router-dom";
import { Blog } from "../../lib/types";
import { twMerge } from "tailwind-merge";

interface BlogCardProps {
    blog: Blog;
    className?: string;
}

export default function BlogCard({blog, className}: BlogCardProps) {
    return (
        <div className={twMerge("px-5 py-4 flex flex-col gap-y-2", className)}>
            <div className="w-full flex items-center justify-between font-bold text-base">
                <h4>{blog.title}</h4>
                <h4>{blog["date-created"]}</h4>
            </div>
            <p className="break-word line-clamp-2 overflow-hidden">
                {blog.desc}
            </p>
            <NavLink to={`/blog${blog.article}`} className={"bg-[#FFD39F] dark:bg-[#6a5239] font-bold text-base flex w-fit btn-2 px-6 py-4"}>
                READ MORE
            </NavLink>
        </div>
    )
}