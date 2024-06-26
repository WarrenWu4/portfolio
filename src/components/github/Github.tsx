import { useEffect, useState } from "react"
import GithubTable from "./GithubTable"
import GithubCard, { GithubCardProps } from "./GithubCard"
import LoadingPage from "../../pages/LoadingPage"
import ContentLayout from "../../layouts/ContentLayout"

const Github = () => {

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

    if (!loaded) {
        return <LoadingPage/>
    }

    return (
        <ContentLayout title="Monthly Contributions">

            {
                <div className="w-full flex md:flex-row flex-col justify-center gap-12">
                    <GithubTable data={data} />
                    <GithubCard commits={cardData.commits} pullRequests={cardData.pullRequests} issues={cardData.issues} followers={cardData.followers}/>
                </div>
            }
        </ContentLayout>
    )
}

export default Github;