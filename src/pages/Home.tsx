import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <motion.div exit={{transform: "translateX(-80vw)"}} transition={{duration:0.4, ease:"easeInOut"}} className="w-screen h-screen flex flex-col items-center relative bg-white">

            <div className="max-w-[153.6rem] w-full h-screen box-border flex flex-col desktop:flex-row items-center justify-center text-center px-[1.6rem] tablet:px-[6.4rem] desktop:px-[12.8rem]">

                <div className="blob tablet:w-[18rem] desktop:w-[25rem] desktop:order-2">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="desktop:w-[50.7rem] flex flex-col desktop:items-start desktop:text-left desktop:mr-[3.2rem] mt-[3.2rem] text-center items-center">
                    <div className="font-default font-bold text-[3.6rem] text-black mt-[4.2rem] tablet:text-[4.5rem] desktop:text-[6rem]">
                        Hi, I'm Warren
                    </div>

                    <div className="max-w-[47.2rem] mb-[2rem] text-neutral-380 font-bold font-default text-[1.6rem] tablet:text-[1.8rem] desktop:text-[2rem] leading-[2.4rem]">
                        I'm a computer science student and I make software that help people.
                    </div>

                    <div className="flex [&>*]:font-default [&>*]:font-bold [&>*]:text-[2.5rem] text-black [&>*]:mx-[0.8rem] tablet:[&>*]:text-[3rem]">
                        <a href="https://github.com/WarrenWu4" target="_blank">
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/warren-wu4/" target="_blank">
                            <FaLinkedin/>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=warrenweiwu04@gmail.com" target="_blank">
                            <SiGmail/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCiJosbDdPhrP3Rn3hfSBInw" target="_blank">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>

            </div>

            <div className="absolute left-[1.6rem] bottom-[1.6rem] text-[1.2rem] font-default text-neutral-380 font-bold">
                Made with 💚 by Warren Wu
            </div>

        </motion.div>
    )
}