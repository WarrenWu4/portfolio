import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";

interface SpotifyCardProps {
    track: any
    number: number
    className?: string
}

const SpotifyCard = ({track, className, number}: SpotifyCardProps) => {
    return (
        <div className={twMerge("w-full px-2 py-4 flex items-center justify-between gap-x-4", className)}>
            <div className="w-full flex items-center gap-x-4">
                <div className="w-12 font-bold text-40 text-center" >{number}</div>
                <img src={track.album.images[2].url} alt="album image" width={48} height={48} className="border-4 rounded-md"/>
                <div className="flex flex-col justify-center">
                    <div className="font-bold text-lg">{track.name}</div>
                    <div className="font-medium text-sm text-black/70 dark:text-white/70">{track.artists[0].name}</div>
                </div>
            </div>
            <a href={track.uri} target={"_blank"} className="w-12 flex items-center justify-center brutalist-sm p-1 mr-4">
                <Icon icon={"mdi:headphones"} width={"2rem"}/>
            </a>
        </div>
)}

export default SpotifyCard;