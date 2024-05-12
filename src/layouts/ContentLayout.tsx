import { twMerge } from "tailwind-merge";

interface ContentLayoutProps {
    title?: string;
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
}

export default function ContentLayout({title, className, children}: ContentLayoutProps) {
    return (
        <div className={twMerge("border-4 px-6 pt-6 pb-12", className)}>

            <h1 className="text-40 font-bold mb-8">{title}</h1>

            {children}

        </div>
    )
}