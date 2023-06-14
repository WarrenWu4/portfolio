import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsHouseDoorFill, BsFillPersonFill, BsFolderFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io"

export default function Nav(props: {currLoc:string}) {

    const [mode, setMode] = useState((localStorage.getItem("theme") === null) ? "light":localStorage.getItem("theme"));
    const [menuIcon, setMenuIcon] = useState("/menu.svg");
    const [showTop, setShowTop] = useState("translateY(-110%)");
    const [displayBool, setDisplayBool] = useState("flex");

    const changeMode = () => {
        setMode((mode==="light") ? "dark":"light");
        if (mode === "light") {
            document.documentElement.className = "dark";
            localStorage.setItem("theme", "dark");
            setMenuIcon((menuIcon === "/menu.svg" || menuIcon === "/menu_dark.svg") ? "/menu_dark.svg":"/close_dark.svg") 
        }
        else {
            document.documentElement.className = "light"
            localStorage.setItem("theme", "light");
            setMenuIcon((menuIcon === "/menu.svg" || menuIcon === "/menu_dark.svg") ? "/menu.svg":"/close.svg") 

        }
    }

    const showSide = () => {
        if (mode === "light") {
            setMenuIcon((menuIcon === "/menu.svg") ? "/close.svg":"/menu.svg");
        }
        else {
            setMenuIcon((menuIcon === "/menu_dark.svg") ? "/close_dark.svg":"/menu_dark.svg");
        }
        setShowTop((showTop === "translateY(-110%)") ? "translateY(0)":"translateY(-110%)");
    }

    useEffect(() => {
        const changeNav = () => {
            if (window.innerWidth >= 768) {
                setMenuIcon((mode==="light")? "/menu.svg":"/menu_dark.svg");
                setShowTop("translateY(-110%)");
                setDisplayBool("none");
            }
            else {
                setDisplayBool("flex");
            }
        }

        window.addEventListener("resize", changeNav)

        return () => {
            window.removeEventListener("resize", changeNav);
        }
    })

    useEffect(() => {
        setShowTop("translateY(-110%)");
        setMenuIcon((mode === "light") ? "/menu.svg":"/menu_dark.svg")
    }, [props.currLoc])
    


    return (
        <div className="max-w-[1536px] w-screen h-[12.8rem] flex items-center justify-between box-border px-[1.6rem] absolute top-0 z-50 tablet:px-[6.4rem] desktop:px-[12.8rem]">

            <NavLink to="/">
                <img src={(mode === "light") ? "/logo.svg":"/logo_dark.svg"} alt="logo" className="w-[5rem] aspect-square cursor-pointer"/>
            </NavLink>

            <div className="flex justify-center items-end w-full rounded-b-[2rem] shadow-card fixed top-0 left-0 transition-all ease-in-out duration-[0.5s] pt-[12.8rem] bg-[#fff] dark:bg-dark-bg dark:shadow-card-dark" style={{display:displayBool, transform: showTop}}>
                <div className="[&>a]:cursor-pointer [&>a]:ml-[1.6rem] [&>a]:font-bold [&>a]:font-default [&>a]:text-[2rem] [&>a]:text-black [&>svg]:text-black grid grid-cols-2 pb-[3.2rem] sm:grid-cols-4 sm:gap-0 gap-[2rem] [&>*]:dark:text-dark-100">
                    <NavLink to="/home" className="flex items-center flex-col w-[12.2rem] h-[5.8rem] [&>svg]:text-[3rem]">
                        <BsHouseDoorFill/>
                        Home
                    </NavLink>
                    <NavLink to="/projects" className="flex items-center flex-col w-[12.2rem] h-[5.8rem] [&>svg]:text-[3rem]">
                        <BsFolderFill/>
                        Projects
                    </NavLink>
                    <NavLink to="/experiences" className="flex items-center flex-col w-[12.2rem] h-[5.8rem] [&>svg]:text-[3rem]">
                        <IoMdBriefcase/>
                        Experiences
                    </NavLink>
                    <NavLink to="/about" className="flex items-center flex-col w-[12.2rem] h-[5.8rem] [&>svg]:text-[3rem]">
                        <BsFillPersonFill/>
                        About
                    </NavLink>
                </div>

                <img src={(mode==="light") ? "/dark_mode.svg" : "/light_mode.svg"} alt="bruh" className="w-[3rem] aspect-square cursor-pointer ml-[3.2rem] fixed top-[3.9rem] left-[1.6rem]" onClick={changeMode}/>

            </div>

            <img 
                src={menuIcon}
                alt="menu" 
                className="w-[5rem] aspect-square cursor-pointer z-50 tablet:hidden"
                onClick={showSide}
                style={{position: (showTop === "translateY(-110%)") ? "relative":"fixed", top: (showTop === "translateY(-110%)") ? "0":"3.9rem", right: (showTop === "translateY(-110%)") ? "0": "1.6rem"}}
            />

            <div className="justify-center items-center relative tablet:flex hidden">
                <div className="[&>*]:cursor-pointer [&>*]:ml-[1.6rem] [&>*]:font-bold [&>*]:font-default [&>*]:text-[2rem] [&>*]:text-black [&>*]:dark:text-dark-100">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>

                <img 
                    src={(mode === "light") ? "/dark_mode.svg" : "/light_mode.svg"} 
                    alt="bruh" 
                    className="w-[3rem] aspect-square cursor-pointer ml-[3.2rem]"
                    onClick={changeMode}
                />
            </div>



        </div>
    )
}