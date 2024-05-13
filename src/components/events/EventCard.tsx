import { twMerge } from "tailwind-merge";
import { Event } from "../../lib/types";

interface EventCardProps {
    event: Event
    className?: string
}

export default function EventCard({event, className}: EventCardProps) {
    return (
        <div className={twMerge("w-full flex flex-col gap-y-2  px-5 pt-4 pb-6", className)}>
            <div className="w-full items-center justify-between text-base font-bold flex gap-x-2">
                <p>{event.title}</p>
                <p>{event.date}</p>
            </div>
            <p className="text-base">{event.description}</p>
        </div>
    )
}