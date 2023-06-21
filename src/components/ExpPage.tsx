import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "../data/exp.json";
import exp from "../data/exp.json";

export function ExpPage() {

    const expCards:any[] = []
    exp.experiences.map((exp) => {
        expCards.push(
            <ExpCard
                key = {exp.id}
                id = {exp.id}
                org={exp.org}
                role={exp.role}
                desc={exp.desc}
                imgPath={exp.imgPath}
            />
        )
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative dark:bg-dark-bg">

            <div className="mt-[12.8rem] mb-[3.2rem] text-[black] font-default font-bold text-[3.6rem] dark:text-dark-100">Experiences</div>

            <div className="grid place-items-center grid-cols-1 gap-[3.2rem] pb-[6.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
                {expCards}
            </div>

        </motion.div>
    )
}



export function ExpInfo() {

    const id = useParams() as any;
    const title:string = data.experiences[id.id-1].org;

    const [mdInfo, setMdInfo] = useState("")
    useEffect(() => {
        fetch('/src/data/exp_articles'+data.experiences[id.id-1].links[0]).then(res=>res.text()).then(text=>setMdInfo(text))
    })

    return (
        <motion.div exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative">
            <div className="mt-[12.8rem] mb-[2rem] text-[black] dark:text-dark-100 font-default font-bold text-[3.6rem]">{title}</div>
            
            <div></div>

            <div className="max-w-[1536px] w-screen flex flex-col px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem] [&>h2]:text-[black] [&>h2]:dark:text-dark-100 [&>h2]:font-bold [&>h2]:text-[2.4rem] [&>h2]:my-[2.4rem] [&>h3]:text-neutral-380 [&>h3]:dark:text-dark-360 [&>h3]:text-[1.6rem] [&>h3]:font-semibold font-default">
                <ReactMarkdown children={mdInfo}/>
            </div>
        </motion.div>
    )
}


export default function ExpCard(props: {id:number, org:string, role:string, desc:string, imgPath?:string}) {

    const imgContent = (props.imgPath === undefined) ? <div className="w-[5rem] aspect-square rounded-[0.4rem] box-border bg-center bg-no-repeat bg-contain mr-[0.6rem]" style={{background: "var(--neutral-360)"}}></div>
    :
    <img src={"/ex_img"+props.imgPath} alt="ex-img" className="w-[5rem] aspect-square rounded-[0.4rem] box-border bg-center bg-no-repeat bg-contain mr-[0.6rem]"/>

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, ease:"easeInOut" }} variants={{visible: { opacity: 1 },hidden: { opacity: 0 }}}  className="min-w-[30rem] min-h-[20rem] rounded-[0.4rem] shadow-card dark:shadow-card-dark flex flex-col items-center relative">
            <div className="mt-[1.6rem] mb-[0.8rem] w-[27.6rem] height-[5rem] flex">
                {imgContent}
                <div className="h-full flex flex-col justify-between items-start">
                    <div className="text-[black] text-[2.4rem] font-bold font-default dark:text-dark-100">{props.org}</div>
                    <div className="text-neutral-380 text-[1.6rem] font-bold font-default dark:text-dark-380 text-ellipsis overflow-hidden line-clamp-4">{props.role}</div>
                </div>
            </div>
            <div className="text-neutral-360 dark:text-dark-360 font-bold font-default text-[1.2rem] w-[27.2rem]">{props.desc}</div>
            <Link to={"./"+props.id}>
            <div className="text-neutral-380 dark:text-dark-380 absolute flex bottom-[1.2rem] right-[1.6rem] font-default font-bold text-[1.6rem] cursor-pointer [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] hover:text-[black] dark:hover:text-dark-100 hover:translate-x-[0.4rem] transition-all duration-[0.4s]">
                    Learn More <FiArrowRightCircle className="translate-y-[0.16rem]" />
            </div>
            </Link>
        </motion.div>
    )
}