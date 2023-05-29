import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiFirebase, SiTailwindcss, SiPandas, SiTensorflow, SiNumpy, SiNextdotjs, SiDotnet, SiElectron, SiFlask, SiExpo, SiMysql, SiTypescript, SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandThreejs } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";

// maps technologies as a string to actual icons
export default function IconGen(props:{icons:string[]|undefined}) {

    if (props.icons === undefined) {
        return "";
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
    props.icons.map((name) => {
        iconStack.push(iconDict[name])
    })

    return iconStack;
}