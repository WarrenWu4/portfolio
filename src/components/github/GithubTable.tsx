import { twMerge } from "tailwind-merge"
import { Icon } from "@iconify/react/dist/iconify.js"

interface GithubStatsDataPoint {
    contributionCount: number
    date: string
}

const GithubTable = (data:any) => {

    const colors = {
        light: ['bg-[#dbd9d9]', 'bg-[#9be9a8]', 'bg-[#40c463]', 'bg-[#30a14e]', 'bg-[#216e39]'],
        dark: ['dark:bg-[#4d5451]', 'dark:bg-[#9be9a8]', 'dark:bg-[#40c463]', 'dark:bg-[#30a14e]', 'dark:bg-[#216e39]']
    }
    const defaultRectStyle = "w-6 aspect-square rounded-md border-4"
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // oldest date from data
    const oldMonth = months [new Date(data.data[0].contributionDays[0].date).getMonth() + 1]
    // newest month from data
    const newMonth = months [new Date(data.data[data.data.length-1].contributionDays[0].date).getMonth()]

    return (
        <div className="flex brutalist p-5 pr-8 gap-x-2 justify-center items-center">

            <div className="w-6 h-full py-20 flex flex-col justify-between items-center gap-8">
                <div className="h-fit rotate-[270deg]">{`${oldMonth}`}</div>

                <Icon icon={"ion:arrow-down-outline"} width={"1.5rem"}/>
                
                <div className="h-fit font-bold rotate-[270deg]">{`${newMonth}`}</div>
            </div>

            <table>
                <tbody>
                    <tr className="text-[12px] text-center">
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
        </div>
    )
}

export default GithubTable;