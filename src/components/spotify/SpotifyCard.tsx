import AnimatedLayout from "../../layouts/AnimatedLayout"

const SpotifyCard = (track:any) => {

    return (
    <AnimatedLayout>

        <a href={track.track.uri} target={"_blank"}>

            <div className="w-full rounded-xl shadow-elevate dark:shadow-elevate-dark p-4 cursor-pointer flex items-center hover:scale-105 transition">
            <div className="mr-5 text-[28px]" >{track.number+1}</div>
            <img src={track.track.album.images[2].url} alt="album image" width={40} height={40} className="rounded-lg mr-3"/>
            <div className="flex flex-col justify-center mr-5">
                <div className="mb-1">{track.track.name}</div>
                <div className="text-[12px] text-black/70 dark:text-white/70">{track.track.artists[0].name}</div>
            </div>
            </div>

        </a>
        
    </AnimatedLayout>

)}

export default SpotifyCard;