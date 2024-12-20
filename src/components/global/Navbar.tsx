import { useState, useEffect, useMemo } from "react"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import logoLight from "/_logos/logo.svg"
import logoDark from "/_logos/logo_dark.svg"
import themeDark from "/_logos/dark_mode.svg"
import themeLight from "/_logos/light_mode.svg"

export default function Navbar() {

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
        <nav className="w-full p-4 border-4 flex items-center justify-between bg-[#EFE0B9] dark:bg-[#8a7746]">

            <div className="flex items-center gap-x-2 small:gap-x-4 text-xl font-bold">
                <NavLink to={"/"}>
                    <img src={logo} alt="logo" className="w-12 aspect-square"/>
                </NavLink>
            </div>

            <div className="flex items-center gap-x-2 small:gap-x-4 text-lg font-bold">
                <NavLink 
                    className={(path.split("/")[1] === "proj") ? 'is-active':'not-active'} 
                    to="/proj">
                    PROJECTS
                </NavLink>

                <NavLink className={(path.split("/")[1] === "blog") ? 'is-active':'not-active'}  to="/blog" >BLOG</NavLink>
                <NavLink className={(path.split("/")[1] === "misc") ? 'is-active':'not-active'}  to="/misc" >MISC</NavLink>

                <button type="button" onClick={changeTheme}>
                    <img src={themeIcon} alt="theme" className="w-6 aspect-square" />
                </button>
            </div>

        </nav>
    )
}