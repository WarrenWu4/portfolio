import { NavLink } from "react-router-dom"
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
    return (
        <>
        <div className="w-[12rem] h-[0.4rem] mt-[8rem] bg-black/60 rounded-[1.6rem]"></div>
        <div className="max-w-[768px] px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] w-full mt-[8rem] flex flex-col text-[1.6rem] mb-[12.8rem]">
            <div className="flex flex-col">
                <span className="font-bold flex items-center">See a bug on this page? Send me an email <a className="ml-[0.8rem] text-[2.4rem]" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=warrenweiwu04@gmail.com"><HiOutlineMail/></a></span>
                <span>Feedback is always appreciated 😊</span>
            </div>
            <div className="flex flex-col mt-[4.8rem]">
                <span className="font-bold">Links</span>
                <div className="flex [&>*]:mr-[1.6rem] [&>*]:flex [&>*]:items-center">
                    <NavLink to={"/proj"}>Proj <FiExternalLink className="ml-[0.4rem]"/></NavLink>
                    <NavLink to={"/blog"}>Blog <FiExternalLink className="ml-[0.4rem]"/></NavLink>
                    <NavLink to={"/misc"}>Misc <FiExternalLink className="ml-[0.4rem]"/></NavLink>
                </div>
            </div>
            <div className="w-full flex justify-between font-bold mt-[4.8rem]">
                <span className="mr-[1.6rem]">Made with 💚 by Warren Wu</span>
                <span>Peace Out ✌️.</span>
            </div>
        </div>
        </>
    )
}