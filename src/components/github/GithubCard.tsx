import AnimatedLayout from "../../layouts/AnimatedLayout";

export interface GithubCardProps {
    commits: number;
    pullRequests: number;
    issues: number;
    followers: number;
}

const GithubCard = ({commits, pullRequests, issues, followers}: GithubCardProps) => {

    return (
        <AnimatedLayout className="p-8 rounded-xl shadow-elevate dark:shadow-elevate-dark h-fit">

            <div className="text-[20px] font-bold mb-5">Overview</div>

            <div className="flex justify-between gap-x-12">

                <div className="flex flex-col gap-y-4 font-medium">
                    <div>Commits:</div>
                    <div>PRs:</div>
                    <div>Issues:</div>
                    <div>Followers:</div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <div>{commits}</div>
                    <div>{pullRequests}</div>
                    <div>{issues}</div>
                    <div>{followers}</div>
                </div>

            </div>

        </AnimatedLayout>
    )
}

export default GithubCard;