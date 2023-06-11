import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ExCard(props: {id:number, org:string, role:string, desc:string, imgPath?:string}) {

    const imgContent = (props.imgPath === undefined) ? <div className="w-[5rem] aspect-square rounded-[0.4rem] box-border bg-center bg-no-repeat bg-contain mr-[0.6rem]" style={{background: "var(--neutral-360)"}}></div>
    :
    <img src={"/ex_img"+props.imgPath} alt="ex-img" className="w-[5rem] aspect-square rounded-[0.4rem] box-border bg-center bg-no-repeat bg-contain mr-[0.6rem]"/>

    return (
        <div className="min-w-[30rem] min-h-[20rem] rounded-[0.4rem] shadow-card flex flex-col items-center relative">
            <div className="mt-[1.6rem] mb-[0.8rem] w-[27.6rem] height-[5rem] flex">
                {imgContent}
                <div className="h-full flex flex-col justify-between items-start">
                    <div className="text-[black] text-[2.4rem] font-bold font-default">{props.org}</div>
                    <div className="text-neutral-380 text-[1.6rem] font-bold font-default">{props.role}</div>
                </div>
            </div>
            <div className="text-neutral-360 font-bold font-default text-[1.2rem] w-[27.2rem]">{props.desc}</div>
            <Link to={"experiences/"+props.id}>
            <div className="text-neutral-380 absolute flex bottom-[1.2rem] right-[1.6rem] font-default font-bold text-[1.6rem] justify-center items-center cursor-pointer transition-all duration-[0.2s] ease-in-out [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] hover:text-[black] hover:transform hover:translate-x-[0.4rem]">
                Learn More <FiArrowRightCircle/>
            </div>
            </Link>
        </div>
    )
}