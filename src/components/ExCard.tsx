import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ExCard(props: {id:number, org:string, role:string, desc:string, imgPath?:string}) {

    const imgContent = (props.imgPath === undefined) ? <div className="w-[5rem] aspect-square rounded-[0.4rem] box-border bg-center bg-no-repeat bg-contain mr-[0.6rem]" style={{background: "var(--neutral-360)"}}></div>
    :
    <img src={"/ex_img"+props.imgPath} alt="ex-img" className="w-[5rem] aspect-square rounded-[0.4rem] box-border bg-center bg-no-repeat bg-contain mr-[0.6rem]"/>

    return (
        <div className="min-w-[30rem] min-h-[20rem] rounded-[0.4rem] shadow-card dark:shadow-card-dark flex flex-col items-center relative">
            <div className="mt-[1.6rem] mb-[0.8rem] w-[27.6rem] height-[5rem] flex">
                {imgContent}
                <div className="h-full flex flex-col justify-between items-start">
                    <div className="text-[black] text-[2.4rem] font-bold font-default dark:text-dark-100">{props.org}</div>
                    <div className="text-neutral-380 text-[1.6rem] font-bold font-default dark:text-dark-380">{props.role}</div>
                </div>
            </div>
            <div className="text-neutral-360 dark:text-dark-360 font-bold font-default text-[1.2rem] w-[27.2rem]">{props.desc}</div>
            <Link to={"./"+props.id}>
            <div className="text-neutral-380 dark:text-dark-380 absolute flex bottom-[1.2rem] right-[1.6rem] font-default font-bold text-[1.6rem] cursor-pointer [&>svg]:ml-[0.4rem] [&>svg]:text-[2rem] hover:text-[black] dark:hover:text-dark-100 hover:translate-x-[0.4rem] transition-all duration-[0.4s]">
                    Learn More <FiArrowRightCircle className="translate-y-[0.16rem]" />
            </div>
            </Link>
        </div>
    )
}