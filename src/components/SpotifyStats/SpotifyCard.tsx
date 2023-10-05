import { motion } from "framer-motion"

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

export default SpotifyCard;