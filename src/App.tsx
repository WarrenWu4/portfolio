import { Routes, Route } from 'react-router-dom';

import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiFirebase, SiTailwindcss, SiPandas, SiTensorflow, SiNumpy, SiNextdotjs, SiDotnet, SiElectron, SiFlask, SiExpo, SiMysql, SiTypescript, SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandThreejs } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";

import HomePage from "./components/HomePage";
import { ProjPage, ProjInfo } from "./components/ProjPage";
import { ExpPage, ExpInfo } from "./components/ExpPage";
import AboutPage from "./components/AboutPage";
import Nav from './components/NavBar';
import Footer from './components/Footer';

import MiscPage, { AdminLogin, MyMusic, MiniGame } from './components/MiscPage';

export default function App() {

  return (

    <div className='w-screen min-h-screen flex flex-col items-center'>

      <Nav/>

      <Routes>

        <Route path="/" element={<HomePage/>}/>

        <Route path='/proj' element={<ProjPage/>}>
          <Route path='/proj/:id' element={<ProjInfo/>}></Route>
        </Route>

        <Route path="/projects" element={<ProjPage/>}/>

        <Route path="/projects/:id" element={<ProjInfo/>}/>

        <Route path="/experiences" element={<ExpPage/>}/>

        <Route path="/experiences/:id" element={<ExpInfo/>}/>
        
        <Route path="/about" element={<AboutPage/>}/>

        <Route path='/misc'>
          <Route path='/misc' element={<MiscPage/>}></Route>
          <Route path='/misc/music' element={<MyMusic/>}></Route>
          <Route path='/misc/minigame' element={<MiniGame/>}></Route>
          <Route path='/misc/admin' element={<AdminLogin/>}></Route>
        </Route>

        <Route path='*' element={<Error/>}/>

      </Routes>

      <Footer/>

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