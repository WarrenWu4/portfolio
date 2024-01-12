import { useEffect, useState } from "react"
import SpotifyCard from "./SpotifyCard"
import { Buffer } from "buffer"
import AnimatedLayout from "../../layouts/AnimatedLayout"
import LoadingPage from "../../pages/LoadingPage"

const Spotify = () => {

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

    if (isLoading) {
        return <LoadingPage/>
    }

    return (
        <>
            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                
                Monthly Top Tracks
                
            </AnimatedLayout>

            <div className="w-full flex flex-col gap-y-8">
            {
                trackData!.map((track:any, index:number) => {
                    return <SpotifyCard key={index} number={index} track={track}/>
                })
            }
            </div>
            
        </>
    )
}

export default Spotify;