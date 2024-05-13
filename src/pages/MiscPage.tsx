/**
 * todo
 * - [ ] add game corner
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
        <ContentLayout title="Misc">

            <div className="w-full flex flex-wrap gap-8">

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
                <div className="w-full aspect-square flex justify-center items-center text-40 mb-6 btn-1" style={{background: background}}>
                    <Icon icon={`mdi:${icon}`} width={"2.5rem"} className="text-white"/>
                </div>
                {text}
            </NavLink>
        </div>
    )
}
