import { Icon } from "@iconify/react/dist/iconify.js"
import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <>

        <div className="w-full mt-auto h-1 bg-black dark:bg-white"></div>

        <div className="border-4 p-6 w-full flex flex-col text-base gap-y-12 bg-[#EFE0B9] dark:bg-[#8a7746]">

            <div className="flex flex-col">

                <span className="font-bold flex items-center">

                    See a bug on this page? Send me an email 
                    
                    <a className="ml-2 text-[24px]" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=warrenweiwu04@gmail.com">
                        <Icon icon={"majesticons:mail-line"}/>
                    </a>
                
                </span>
                
                <span>Feedback is always appreciated 😊</span>
            
            </div>

            <div className="flex flex-col">

                <span className="font-bold">
                    Links
                </span>

                <div className="flex gap-x-4 [&>*]:flex [&>*]:items-center [&>*]:gap-x-1">
                    
                    <NavLink to={"/proj"}>
                        Proj <Icon icon={"line-md:external-link"}/>
                    </NavLink>

                    <NavLink to={"/blog"}>
                        Blog <Icon icon={"line-md:external-link"}/>
                    </NavLink>

                    <NavLink to={"/misc"}>
                        Misc <Icon icon={"line-md:external-link"}/>
                    </NavLink>

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