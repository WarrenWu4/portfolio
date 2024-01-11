import { motion } from "framer-motion";

export interface GithubCardProps {
    commits: number;
    pullRequests: number;
    issues: number;
    followers: number;
}

const GithubCard = ({commits, pullRequests, issues, followers}: GithubCardProps) => {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity:0, transform: `translateY(2rem)`}
    }
    const timer = 1

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration:timer, ease:"easeInOut"}} variants={variants} className="p-12 rounded-[1.2rem] shadow-elevate dark:shadow-elevate-dark h-fit">

            <div className="text-[2rem] font-bold mb-8">Overview</div>

            <div className="text-[1.6rem] flex justify-between gap-x-16">

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

        </motion.div>
    )
}

export default GithubCard;