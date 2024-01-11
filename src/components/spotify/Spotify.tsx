import { useEffect, useState } from "react"
import SpotifyCard from "./SpotifyCard"
import { Buffer } from "buffer"

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

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Monthly Top Tracks</span>
            <div className="w-full flex flex-wrap gap-[3.2rem] mt-[4.8rem]">
            {!isLoading &&
                trackData!.map((track:any, index:number) => {
                    return <SpotifyCard key={index} number={index} track={track}/>
                })
            }
            </div>
        </div>
    )
}

export default Spotify;