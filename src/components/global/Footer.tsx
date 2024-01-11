import { NavLink } from "react-router-dom"
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
    return (
        <>
        <div className="mt-16 mb-8 w-32 h-1 bg-black/60 dark:bg-white/60 rounded-2xl"></div>

        <div className="w-full flex flex-col text-[16px] mb-32 gap-y-12">
            <div className="flex flex-col">
                <span className="font-bold flex items-center">See a bug on this page? Send me an email <a className="ml-2 text-[24px]" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=warrenweiwu04@gmail.com"><HiOutlineMail/></a></span>
                <span>Feedback is always appreciated 😊</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold">Links</span>
                <div className="flex gap-x-4 [&>*]:flex [&>*]:items-center">
                    <NavLink to={"/proj"}>Proj <FiExternalLink className="ml-[0.4rem]"/></NavLink>
                    <NavLink to={"/blog"}>Blog <FiExternalLink className="ml-[0.4rem]"/></NavLink>
                    <NavLink to={"/misc"}>Misc <FiExternalLink className="ml-[0.4rem]"/></NavLink>
                </div>
            </div>
            <div className="w-full flex gap-x-4 justify-between font-bold">
                <span>Made with 💚 by Warren Wu</span>
                <span>Peace Out ✌️.</span>
            </div>
        </div>
        </>
    )
}