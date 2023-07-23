import { NavLink } from "react-router-dom";
import { RiSpotifyLine } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { motion } from "framer-motion";

export default function MiscPage() {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[6.4rem] flex flex-col items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="mt-[4.8rem] w-full text-center huh:text-left font-bold text-[4rem]">Miscellaneous</motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="w-full flex flex-wrap justify-center huh:justify-start [&>*]:rounded-[1.2rem] gap-[4rem] mt-[4.8rem]">

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#C4D7B2] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./music">
                    <RiSpotifyLine/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Music I 💚</span>
                </NavLink>

                <NavLink className="w-[12rem] aspect-square shadow-elevate bg-[#C4DFDF] flex justify-center items-center text-[4rem] relative mb-[2.4rem]" to="./minigame">
                    <GrGamepad/>
                    <span className="font-medium w-full text-center text-[1.6rem] absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[150%]">Mini Game</span>
                </NavLink>

            </motion.div>

        </div>
    )
}

export const MyMusic = () => {

    // useEffect(() => {

    //     const getTopTracks = async() => {

    //         const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    //         const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    //         const params = new URLSearchParams(window.location.search);
    //         const code = params.get("code");

    //         if (!code) {
    //             redirectToAuthCodeFlow();
    //         } else {
    //             const accessToken = await getAccessToken(code);
    //             console.log(accessToken)
    //             const profile = await fetchProfile(accessToken);
    //         }
            
    //         async function redirectToAuthCodeFlow() {

    //             // !for security purposes
    //             let text = '';
    //             let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //             for (let i = 0; i < 128; i++) {
    //                 text += possible.charAt(Math.floor(Math.random() * possible.length));
    //             }
    //             const verifier = text;

    //             // generate parameters
    //             const params = new URLSearchParams();
    //             params.append("client_id", clientId);
    //             params.append("response_type", "code");
    //             params.append("redirect_uri", "http://localhost:5173/misc/music");
    //             params.append("state", verifier)

    //             document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    //         }
            
    //         async function getAccessToken(code: string) {

    //             const params = new URLSearchParams();
    //             params.append("grant_type", "authorization_code");
    //             params.append("code", code);
    //             params.append("redirect_uri", "http://localhost:5173/misc/music");
            
    //             const result = await fetch("https://accounts.spotify.com/api/token", {
    //                 method: "POST",
    //                 headers: { 
    //                     "Authorization": `Basic ${btoa(clientId+":"+clientSecret)}`,
    //                     "Content-Type": "application/x-www-form-urlencoded" 
    //                 },
    //                 body: params
    //             });
            
    //             const { access_token } = await result.json();
    //             return access_token;
    //         }
            
    //         async function fetchProfile(token: string): Promise<any> {
    //             const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`, {
    //                 method: "GET",
    //                 headers: {
    //                   Authorization: `Bearer ${token}`,
    //                 }
    //             })
    //             return await res.json();
    //         }
    //     }

    //     getTopTracks()

    // }, [])

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Monthly Top</span>
            <span className="font-medium text-[1.6rem] mt-[4.8rem">work in progress<br/>will be done soon 💚</span>
        </div>
    )
}

export const MiniGame = () => {
    return (
        <div className="max-w-[768px] w-full min-h-screen px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Have Fun 😊</span>
            <span className="font-medium text-[1.6rem] mt-[4.8rem">work in progress<br/>will be done soon 💚</span>
        </div>
    )
}