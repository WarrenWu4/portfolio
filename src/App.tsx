import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { BsHouseDoorFill, BsFillPersonFill, BsFolderFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io"

import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiFirebase, SiTailwindcss, SiPandas, SiTensorflow, SiNumpy, SiNextdotjs, SiDotnet, SiElectron, SiFlask, SiExpo, SiMysql, SiTypescript, SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandThreejs } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";

import HomePage from "./components/HomePage";
import { ProjPage, ProjInfo } from "./components/ProjPage";
import { ExpPage, ExpInfo } from "./components/ExpPage";
import AboutPage from "./components/AboutPage";

export default function App() {

  const loc = useLocation();

  // configure theme on initial load
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    // default theme
    if (theme === null) {
      document.documentElement.className = "light";
    }
    else {
      document.documentElement.className = localStorage.getItem("theme")!;
    }
  },[])

  return (

    <div className='w-screen flex flex-col justify-center items-center'>

      <Nav currLoc={loc.pathname}/>

      <AnimatePresence mode="wait">

        <Routes key={loc.pathname} location={loc}>

          <Route path="/" element={<HomePage/>}/>

          <Route path="/projects" element={<ProjPage/>}/>

          <Route path="/projects/:id" element={<ProjInfo/>}/>

          <Route path="/experiences" element={<ExpPage/>}/>

          <Route path="/experiences/:id" element={<ExpInfo/>}/>
          
          <Route path="/about" element={<AboutPage/>}/>

          <Route path='*' element={<Error/>}/>

        </Routes>

      </AnimatePresence>

    </div>
  )
}

function Nav(props: {currLoc:string}) {

    const [mode, setMode] = useState((localStorage.getItem("theme") === null) ? "light":localStorage.getItem("theme"));
    const [menuIcon, setMenuIcon] = useState("/img/menu.svg");
    const [showTop, setShowTop] = useState("translateY(-110%)");
    const [displayBool, setDisplayBool] = useState("flex");

    const changeMode = () => {
        setMode((mode==="light") ? "dark":"light");
        if (mode === "light") {
            document.documentElement.className = "dark";
            localStorage.setItem("theme", "dark");
            setMenuIcon((menuIcon === "/img/menu.svg" || menuIcon === "/img/menu_dark.svg") ? "/img/menu_dark.svg":"/img/close_dark.svg") 
        }
        else {
            document.documentElement.className = "light"
            localStorage.setItem("theme", "light");
            setMenuIcon((menuIcon === "/img/menu.svg" || menuIcon === "/img/menu_dark.svg") ? "/img/menu.svg":"/img/close.svg") 

        }
    }

    const showSide = () => {
        if (mode === "light") {
            setMenuIcon((menuIcon === "/img/menu.svg") ? "/img/close.svg":"/img/menu.svg");
        }
        else {
            setMenuIcon((menuIcon === "/img/menu_dark.svg") ? "/img/close_dark.svg":"/img/menu_dark.svg");
        }
        setShowTop((showTop === "translateY(-110%)") ? "translateY(0)":"translateY(-110%)");
    }

    useEffect(() => {
        const changeNav = () => {
            if (window.innerWidth >= 768) {
                setMenuIcon((mode==="light")? "/img/menu.svg":"/img/menu_dark.svg");
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
        setMenuIcon((mode === "light") ? "/img/menu.svg":"/img/menu_dark.svg")
    }, [props.currLoc])
    


    return (
        <div className="max-w-[1536px] w-screen h-[12.8rem] flex items-center justify-between box-border px-[1.6rem] absolute top-0 z-50 tablet:px-[6.4rem] desktop:px-[12.8rem]">

            <NavLink to="/">
                <img src={(mode === "light") ? "/img/logo.svg":"/img/logo_dark.svg"} alt="logo" className="w-[5rem] aspect-square cursor-pointer"/>
            </NavLink>

            <div className="flex justify-center items-end w-full rounded-b-[2rem] shadow-card fixed top-0 left-0 transition-all ease-in-out duration-[0.5s] pt-[12.8rem] bg-[#fff] dark:bg-dark-bg dark:shadow-card-dark" style={{display:displayBool, transform: showTop}}>
                <div className="[&>a]:cursor-pointer [&>a]:ml-[1.6rem] [&>a]:font-bold [&>a]:font-default [&>a]:text-[2rem] [&>a]:text-black [&>svg]:text-black grid grid-cols-2 pb-[3.2rem] sm:grid-cols-4 sm:gap-0 gap-[2rem] [&>*]:dark:text-dark-100">
                    <NavLink to="/" className="flex items-center flex-col w-[12.2rem] h-[5.8rem] [&>svg]:text-[3rem]">
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

                <img src={(mode==="light") ? "/img/dark_mode.svg" : "/img/light_mode.svg"} alt="bruh" className="w-[3rem] aspect-square cursor-pointer ml-[3.2rem] fixed top-[3.9rem] left-[1.6rem]" onClick={changeMode}/>

            </div>

            <img 
                src={menuIcon}
                alt="menu" 
                className="w-[5rem] aspect-square cursor-pointer z-50 tablet:hidden"
                onClick={showSide}
                style={{position: (showTop === "translateY(-110%)") ? "relative":"fixed", top: (showTop === "translateY(-110%)") ? "0":"3.9rem", left: (showTop === "translateY(-110%)") ? "0": "calc(100vw - 6.6rem)"}}
            />

            <div className="justify-center items-center relative tablet:flex hidden">
                <div className="[&>*]:cursor-pointer [&>*]:ml-[1.6rem] [&>*]:font-bold [&>*]:font-default [&>*]:text-[2rem] [&>*]:text-black [&>*]:dark:text-dark-100">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/experiences">Experiences</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>

                <img 
                    src={(mode === "light") ? "/img/dark_mode.svg" : "/img/light_mode.svg"} 
                    alt="bruh" 
                    className="w-[3rem] aspect-square cursor-pointer ml-[3.2rem]"
                    onClick={changeMode}
                />
            </div>



        </div>
    )
}

function Error() {
  return (
    <>
        <div className="mt-[12.8rem] mb-[3.2rem] text-[black] font-default font-bold text-[3.6rem] dark:text-dark-100">Error 404: Page Not Found</div>
        <div className= "text-neutral-380 font-default font-bold text-[2.4rem] dark:text-dark-380">make sure the url is correct</div>
    </>
  )
}

// maps technologies as a string to actual icons
export function IconGen(props:{icons:string[]|undefined}) {

    if (props.icons === undefined) {
        return [];
    }

    const iconDict:{[name:string]:JSX.Element} = {
        "html": <FaHtml5/>,
        "css": <FaCss3Alt />,
        "javascript": <SiJavascript />,
        "typescript": <SiTypescript/>,
        "nextjs": <SiNextdotjs />,
        "react": <FaReact />,
        "nodejs": <FaNodeJs />,
        "tailwindcss": <SiTailwindcss />,
        "threejs": <TbBrandThreejs />,
        "flask": <SiFlask />,
        "java": <FaJava />,
        "c++": <SiCplusplus />,
        "python": <FaPython/>,
        "numpy": <SiNumpy />,
        "pandas": <SiPandas />,
        "tensorflow": <SiTensorflow />,
        "firebase": <SiFirebase />,
        "mongodb": <SiMongodb />,
        "mysql": <SiMysql />,
        "sqllite": <DiSqllite />,
        "figma": <CgFigma />,
        "expo": <SiExpo />,
        ".net": <SiDotnet />,
        "electronjs": <SiElectron />,
        "docker": <FaDocker />
    }
    
    const iconStack:any[] = []

    // if user request all icons
    if (props.icons[0] === "all") {
        Object.keys(iconDict).map((key) => {
            iconStack.push(iconDict[key]);
        });
        return iconStack;
    }

    props.icons.map((name) => {
        iconStack.push(iconDict[name]);
    })

    return iconStack;
}