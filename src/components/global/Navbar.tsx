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
        <nav className="mt-8 h-[50px] flex justify-between items-center w-full font-bold text-[18px]">

            <div className="flex items-center gap-x-2 small:gap-x-4">
                <NavLink to={"/"}>
                    <img src={logo} alt="logo" className="w-12 aspect-square"/>
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
                <img src={themeIcon} alt="theme" className="w-7 aspect-square" />
            </button>

        </nav>
    )
}