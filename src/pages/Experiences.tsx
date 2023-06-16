import ExCard from "../components/ExCard";
import { motion } from "framer-motion";

import exp from "../data/exp.json";

export default function Experiences() {

    const expCards:any[] = []
    exp.experiences.map((exp) => {
        expCards.push(
            <ExCard
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