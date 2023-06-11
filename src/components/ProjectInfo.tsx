import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data/proj.json";

export default function ProjectInfo() {

    const id = useParams() as any;
    const title:string = data.projects[id.id-1].name;

    const [mdInfo, setMdInfo] = useState("")
    useEffect(() => {
        fetch('/src/data/test.txt').then(res=>res.text()).then(text=>setMdInfo(text))
    })

    return (
        <div className="w-screen h-screen flex flex-col items-center relative">
            <div className="mt-[12.8rem] mb-[3.2rem] text-[black] font-default font-bold text-[3.6rem]">{title}</div>
            
            <div></div>

            <ReactMarkdown children={mdInfo}/>
        </div>
    )
}