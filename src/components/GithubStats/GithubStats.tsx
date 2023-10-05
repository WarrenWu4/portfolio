import { useEffect, useState } from "react"
import GithubTable from "./GithubTable"
import GithubCard, { GithubCardProps } from "./GithubCard"

const GithubStats = () => {

    const [data, setData] = useState<any[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)
    const [cardData, setCardData] = useState<GithubCardProps>({commits: 0, pullRequests: 0, issues: 0, followers: 0})

    useEffect(() => {

        const getContributionData = async() => {

            const token = import.meta.env.VITE_GITHUB_TOKEN
            const query = `
            query($userName:String!) {
            user(login: $userName){
                contributionsCollection {
                contributionCalendar {
                    totalContributions
                    weeks {
                    contributionDays {
                        contributionCount
                        date
                }}}}
                followers {
                    totalCount
                }
                issues {
                    totalCount
                }
                pullRequests {
                    totalCount
                }
            }}
            `
            const variables = `{"userName": "WarrenWu4"}`
            const body = {query, variables}


            const res = await fetch("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(body)
                })
            const textData = await res.json()
            console.log(textData)
            setCardData({
                commits: textData.data.user.contributionsCollection.contributionCalendar.totalContributions,
                pullRequests: textData.data.user.pullRequests.totalCount,
                issues: textData.data.user.issues.totalCount,
                followers: textData.data.user.followers.totalCount
            })


            // get past month data (4 weeks)
            setData(textData.data.user.contributionsCollection.contributionCalendar.weeks.slice(40))
            setLoaded(true)
        }

        getContributionData()

    }, [])

    return (
        <div className="max-w-[768px] w-full min-h-screen px-[1.6rem] small:px-[3.2rem] med:px-[6.4rem] flex flex-col items-center">
            <span className="font-bold text-[4rem] mt-[4.8rem]">Monthly Contributions</span>
            {loaded ?
                <div className="w-full flex med:flex-row flex-col justify-center mt-[4.8rem] med:gap-x-20 gap-y-20">
                    <GithubTable data={data} />
                    <GithubCard commits={cardData.commits} pullRequests={cardData.pullRequests} issues={cardData.issues} followers={cardData.followers}/>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default GithubStats;