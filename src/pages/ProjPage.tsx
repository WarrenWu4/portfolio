import { useNavigate, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";

import AnimatedLayout from "../layouts/AnimatedLayout";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import { Proj } from "../lib/types";
import ContentLayout from "../layouts/ContentLayout";
import ProjCard1 from "../components/proj/ProjCard1";

export function ProjPage() {

    const [projData, setProjData] = useState<Proj[] | null>(null)

    useEffect(() => {

        async function getData() {

            const response = await fetch("_data/proj.json")
            let data = await response.json()

            setProjData(data.reverse())
        }

        getData()

    }, [])

    if (projData === null) {
        return <LoadingPage/>
    }

    return (
        <ContentLayout title="Projects" className="bg-[#D4F0C6] dark:bg-[#363e32]">

            <div className="w-full flex flex-wrap gap-8">
                {
                    projData.map((project: Proj, index:number) => {
                        return (
                        <ProjCard1 
                            key={index} 
                            {...project}
                        />)
                    })
                }
            </div>

        </ContentLayout>
    )
}

export function ProjInfo() {

    const nav = useNavigate()
    const {proj_id} = useParams<string>()
    const [mdInfo, setMdInfo] = useState<string>(``)

    if (proj_id === undefined) {
        return <ErrorPage/>
    }

    useEffect(() => {

        const getProj = async() => {

            try {
                const [owner, repo, branch] = proj_id.split("_")
                const response = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`)
                if (response.ok) {
                    const text = await response.text()
                    setMdInfo(text)
                } else {
                    nav("/error")
                }
            } catch (err) {
                console.error(err)
                nav("/error")
            }

        }

        getProj()

    }, [])

    return (
        <ContentLayout>

            <div id="article">
                <ReactMarkdown children={mdInfo} />
            </div>

        </ContentLayout>
    )
}