/**
 * todo
 * - [ ] add resume link
 * - [ ] add game corner
 * - [ ] tech stack
 * - [ ] museum of memories
 */

import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Misc } from "../lib/types";
import LoadingPage from "./LoadingPage";
import ContentLayout from "../layouts/ContentLayout";

export default function MiscPage() {

    const [miscData, setMiscData] = useState<Misc[] | null>(null);

    useEffect(() => {

        async function getMiscData() {
            const response = await fetch("_data/misc.json")
            const data = await response.json()
            setMiscData(data)
        }

        getMiscData()

    }, [])

    if (miscData === null) {
        return <LoadingPage/>
    }

    return (
        <ContentLayout title="Miscellaneous">

            <div className="w-full flex flex-wrap justify-center huh:justify-start [&>*]:rounded-[1.2rem] gap-10">

                {miscData.map((data:Misc, index:number) => {
                    return <MiscCard key={index} {...data}/>
                })}

            </div>

        </ContentLayout>
    )
}

function MiscCard({link, text, icon, background}: Misc) {
    return (
        <div className="w-fit">
            <NavLink className="w-32 flex flex-col items-center font-medium text-center" to={link}>
                <div className="w-full aspect-square flex justify-center items-center text-40 mb-6 brutalist" style={{background: background}}>
                    <Icon icon={`mdi:${icon}`} width={"2.5rem"} className="text-white"/>
                </div>
                {text}
            </NavLink>
        </div>
    )
}
