import { useState, useEffect, useMemo } from "react"
import { NavLink } from "react-router-dom";
import { BsHouseDoorFill, BsFillPersonFill, BsFolderFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io"
import { useLocation } from "react-router-dom";

import logoLight from "/img/logo.svg"
import logoDark from "/img/logo_dark.svg"
import themeDark from "/img/dark_mode.svg"
import themeLight from "/img/light_mode.svg"

export default function Nav() {

    const [mode, setMode] = useState((localStorage.getItem("theme") === "dark") ? "dark":"light")
    const [logo, setLogo] = useState((localStorage.getItem("theme") === "dark") ? logoDark:logoLight)
    const [themeIcon, setThemeIcon] = useState((mode === "light") ? themeDark:themeLight)

    const changeTheme = () => {
        const newTheme = (mode === "light") ? "dark" : "light"
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme)
        setMode(newTheme)
    }
    useMemo(() => {
        setThemeIcon((mode === "light") ? themeDark:themeLight)
        setLogo((mode === "light") ? logoLight:logoDark)
    }, [mode])
    useEffect(() => {
        document.documentElement.className = mode
    }, [])

    const path:string = useLocation().pathname



    return (
        <nav className="max-w-[768px] mt-[3.2rem] h-[5rem] flex justify-between items-center w-full px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] font-bold text-[1.8rem]">

            <div className="flex items-center [&>*]:mr-[0.8rem] small:[&>*]:mr-[1.6rem]">
                <NavLink to={"/"}>
                    <img src={logo} alt="logo" className="w-[4.8rem] aspect-square"/>
                </NavLink>

                <NavLink 
                className={(path.split("/")[1] === "proj") ? 'is-active':'not-active'} 
                to="/proj">
                        PROJ
                </NavLink>

                <NavLink className={(path.split("/")[1] === "blog") ? 'is-active':'not-active'}  to="/blog" >BLOG</NavLink>
                <NavLink className={(path.split("/")[1] === "misc") ? 'is-active':'not-active'}  to="/misc" >MISC</NavLink>
            </div>

            <button type="button" onClick={changeTheme}>
                <img src={themeIcon} alt="theme" className="w-[2.8rem] aspect-square" />
            </button>

        </nav>
    )
}