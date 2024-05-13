import { useEffect, useState } from "react";
import ContentLayout from "../../layouts/ContentLayout";
import { Experience } from "../../lib/types";
import LoadingPage from "../../pages/LoadingPage";
import { twMerge } from "tailwind-merge";

export default function Involvement() {
    
    const [involvements, setInvolvements] = useState<Experience[] | null>(null)

    useEffect(() => {

        async function getInvolvementData() {
            const response = await fetch("_data/home.json")
            const data = await response.json()
            setInvolvements(data.exps)
        }

        getInvolvementData()

    }, [])

    if (involvements === null) {
        return <LoadingPage/>
    }
    
    return (
        <ContentLayout title="Involvement">

            <div className="w-full brutalist">
                {
                    involvements.map((exp: Experience, index: number) => {
                        return (
                            <div key={index} className={twMerge("w-full flex flex-col px-5 pt-4 pb-6", (index === 0) ? "" : "border-t-4")}>
                                <div className="w-full items-center justify-between text-base font-bold flex gap-x-2">
                                    <p>{exp.org}</p>
                                    <p>{exp.date}</p>
                                </div>
                                <p className="font-medium mb-2">{exp.pos}</p>
                                <p className="text-base">{exp.desc}</p>
                            </div>
                    )})
                }
            </div>

        </ContentLayout>
    )
}