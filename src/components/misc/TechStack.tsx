import { useEffect, useState } from "react";
import ContentLayout from "../../layouts/ContentLayout";
import LoadingPage from "../../pages/LoadingPage";
import { Icon } from "@iconify/react";

export default function TechStack() {

    const [techStack, setTechStack] = useState<string[] | null>(null)

    useEffect(() => {

        async function getTechStackData() {
            const response = await fetch("_data/home.json") 
            const data = await response.json()
            setTechStack(data.techstack)
        }

        getTechStackData()

    }, [])

    if (techStack === null) {
        return <LoadingPage/>
    }

    return (
        <ContentLayout title="Tech Stack">
            
            <div className="flex flex-wrap gap-4">
                {techStack.map((icon:string, index:number) => {
                    return (
                        <div key={index} className="p-2 brutalist-sm">
                            <Icon icon={`simple-icons:${icon}`} width={"2rem"} />
                        </div>  
                )})}
            </div>

        </ContentLayout>
    )
}