/**
 * todo
 * - [ ] add github stats
 * - [ ] add better loading states for spotify
 * - [ ] add resume link
 * - [ ] add mini game
 */

import { NavLink } from "react-router-dom";
import { RiSpotifyLine } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Buffer } from "buffer"

export default function MiscPage() {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] flex flex-col items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] w-full text-center huh:text-left font-bold text-[4rem]">Miscellaneous</motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="w-full flex flex-wrap justify-center huh:justify-start [&>*]:rounded-[1.2rem] gap-[4rem] mt-[4.8rem]">

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#C4D7B2] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./music">
                    <RiSpotifyLine className="text-black"/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Music I 💚</span>
                </NavLink>

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#C4DFDF] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./minigame">
                    <GrGamepad className="text-black"/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Mini Game</span>
                </NavLink>

            </motion.div>

        </div>
    )
}

export const MyMusic = () => {

    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
    const top_tracks_endpoint = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10"
    const token_endpoint = "https://accounts.spotify.com/api/token"

    const [trackData, setTrackData] = useState<any[]>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const getTopTracks = async() => {
            const body = new URLSearchParams()
            body.append("grant_type", "refresh_token")
            body.append("refresh_token", refresh_token)

            const response = await fetch(token_endpoint, {
                method: "POST",
                headers: {
                    Authorization: `Basic ${basic}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: body,
            })

            const { access_token } = await response.json()
            const data = await fetch(top_tracks_endpoint, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            const { items } = await data.json()
            setTrackData(items)
            setIsLoading(false)
        }

        getTopTracks()

    }, [])

    const SpotifyCard = (track:any) => {

        const variants = {
            visible: {opacity: 1, transform: `translateY(0)`},
            hidden: {opacity:0, transform: `translateY(2rem)`}
        }
        const timer = 1
        
        return (
        <motion.a initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} href={track.track.uri} target={"_blank"} className="w-full">
            <div className="w-full rounded-[1.2rem] shadow-elevate dark:shadow-elevate-dark p-[1.6rem] cursor-pointer flex items-center hover:scale-105 transition">
            <div className="mr-[2rem] text-[2.8rem]" >{track.number+1}</div>
            <img src={track.track.album.images[2].url} alt="album image" width={40} height={40} className="rounded-[0.8rem] mr-[1.2rem]"/>
            <div className="flex flex-col justify-center mr-[2rem]">
                <div className="mb-[0.4rem] text-[1.6rem]">{track.track.name}</div>
                <div className="text-[1.2rem] text-black/70 dark:text-white/70">{track.track.artists[0].name}</div>
            </div>
            </div>
        </motion.a>

        )}

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Monthly Top Tracks</span>
            <div className="w-full flex flex-wrap gap-[3.2rem] mt-[4.8rem]">
            {!isLoading &&
                trackData!.map((track:any, index) => {
                    return <SpotifyCard key={index} number={index} track={track}/>
                })
            }
            </div>
        </div>
    )
}

export const MiniGame = () => {
    return (
        <div className="max-w-[768px] w-full min-h-screen px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Have Fun 😊</span>
            <span className="font-medium text-[1.6rem] mt-[4.8rem">work in progress<br/>will be done soon 💚</span>
        </div>
    )
}