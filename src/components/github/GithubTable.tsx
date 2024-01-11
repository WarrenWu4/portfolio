import { twMerge } from "tailwind-merge"
import { FaLongArrowAltDown } from "react-icons/fa"
import { motion } from "framer-motion"

interface GithubStatsDataPoint {
    contributionCount: number
    date: string
}

const GithubTable = (data:any) => {

    const colors = {
        light: ['bg-[#dbd9d9]', 'bg-[#9be9a8]', 'bg-[#40c463]', 'bg-[#30a14e]', 'bg-[#216e39]'],
        dark: ['dark:bg-[#4d5451]', 'dark:bg-[#9be9a8]', 'dark:bg-[#40c463]', 'dark:bg-[#30a14e]', 'dark:bg-[#216e39]']
    }
    const defaultRectStyle = "w-[2.4rem] aspect-square rounded-md"
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // oldest date from data
    const oldMonth = months [new Date(data.data[0].contributionDays[0].date).getMonth() + 1]
    // newest month from data
    const newMonth = months [new Date(data.data[data.data.length-1].contributionDays[0].date).getMonth()+1]

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="flex rounded-[1.2rem] shadow-elevate dark:shadow-elevate-dark p-8 pr-12 gap-x-4 justify-center items-center">

            <div className="w-[2.4rem] h-[40rem] flex flex-col justify-between items-center pb-16 pt-24">
                <div className="h-fit text-[1.6rem] rotate-[270deg]">{`${oldMonth}`}</div>
                <FaLongArrowAltDown size={20}/>
                <div className="h-fit text-[1.6rem] font-bold rotate-[270deg]">{`${newMonth}`}</div>
            </div>

            <table>
                <tbody>
                    <tr className="[&>*]:text-[1.2rem] [&>*]:text-center">
                        <td>S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                {data.data.map((week:any, index:number) => {
                    return (
                        <tr key={index}>
                            {week.contributionDays.map((dat:GithubStatsDataPoint, index:number) => {
                                // determine color
                                let currColor = ""
                                if (dat.contributionCount > 20) {
                                    currColor = `${colors.dark[4]} ${colors.light[4]}`
                                } else if (dat.contributionCount > 10) {
                                    currColor = `${colors.dark[3]} ${colors.light[3]}`
                                } else if (dat.contributionCount > 5) {
                                    currColor = `${colors.dark[2]} ${colors.light[2]}`
                                } else if (dat.contributionCount > 0) {
                                    currColor = `${colors.dark[1]} ${colors.light[1]}`
                                } else {
                                    currColor = `${colors.dark[0]} ${colors.light[0]}`
                                }
                                return (
                                    <td key={index} className="p-1">
                                        <div className={twMerge(defaultRectStyle, currColor)}>
                                        </div>
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </motion.div>
    )
}

export default GithubTable;