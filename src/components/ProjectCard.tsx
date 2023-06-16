import { FiArrowRightCircle } from "react-icons/fi";
import { BsGlobe, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProjectCard(props: {id:number, name: string, desc: string, imgPath?:string, techStack?:any, github:string, weblink:string}) {

    const githubComp = (props.github !== "") ? 
    <a target="_blank" href={props.github}>
        <BsGithub className="text-neutral-380 hover:text-[black] dark:text-dark-380 dark:hover:text-dark-100 transition-all duration-[0.2s] hover:scale-[120%]"/>
    </a> 
    :
    ""

    const weblinkComp = (props.weblink !== "") ? 
    <a target="_blank" href={props.weblink}>
        <BsGlobe className="text-neutral-380 hover:text-[black] dark:text-dark-380 dark:hover:text-dark-100 transition-all duration-[0.2s] hover:scale-[120%]" />
    </a>
    :
    ""

    return (
        <div className="min-w-[30rem] aspect-square shadow-card dark:shadow-card-dark rounded-[0.4rem] flex flex-col relative">

            <div className="border-b-[0.2rem] border-solid border-[black] box-border w-full h-[55%] bg-neutral-360 bg-no-repeat bg-top bg-cover rounded-t-[0.4rem] relative group" style={{backgroundImage: `url("/proj_img${props.imgPath}")`}}>
                <div className="absolute top-0 left-0 w-full h-full bg-[black]/[0.8] font-bold font-default text-[white] text-[2.4rem] rounded-[0.2rem] flex justify-center items-center flex-wrap opacity-0 transition-[opacity] duration-[0.2s] ease-in-out group-hover:opacity-100 [&>*]:m-[0.8rem]">
                    {props.techStack}
                </div>
            </div>

            <div className="mt-[1.6rem] mr-[0.8rem] ml-[1.6rem] font-default font-bold text-[black] dark:text-dark-100 text-[2.4rem]">{props.name}</div>
            <div className="max-w-[27.2rem] ml-[1.6rem] h-[4rem] text-neutral-360 font-bold font-default text-[1.2rem] dark:text-dark-360 text-ellipsis overflow-hidden">{props.desc}</div>

            <div className="flex [&>*]:mr-[0.8rem] text-[2rem] absolute bottom-[1.2rem] left-[1.6rem]">
                {githubComp}
                {weblinkComp}
            </div>

            <Link to={"./"+props.id}>
            <div className="text-neutral-380 dark:text-dark-380 absolute flex bottom-[1.2rem] right-[1.6rem] font-default font-bold text-[1.6rem] justify-center items-center cursor-pointer transition-all duration-[0.2s] ease-in-out [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] hover:text-[black] dark:hover:text-dark-100 hover:transform hover:translate-x-[0.4rem]">
                    Learn More <FiArrowRightCircle/>
            </div>
            </Link>

        </div>
    )
}