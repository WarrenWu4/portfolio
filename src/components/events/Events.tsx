import AnimatedLayout from "../../layouts/AnimatedLayout"
import LoadingPage from "../../pages/LoadingPage"
import { useEffect, useState } from "react" 

interface EventData{
    title: string,
    description: string,
    date: string,
}

export default function Events() {
    
    const [events, setEvents] = useState<EventData[] | null>(null);

    useEffect(() => {

        async function getData() {

            const response = await fetch("/_data/events.json")
            let data = await response.json()

            setEvents(data.reverse())
        }

        getData()

    }, [])

    if (events === null) {
        return <LoadingPage/>
    }

    return (
        <>
            <AnimatedLayout className="w-full text-center huh:text-left font-bold text-[40px]">
                
                What I've Been Up To 
                
            </AnimatedLayout>

            <div className="w-full flex flex-col gap-y-8">
                {events.map((event:EventData, index:number) => {
                    return <EventItem key={index} title={event.title} description={event.description} date={event.date} />
                })}
            </div>
        </>
    )
}

interface EventItemProps {
    title: string;
    description: string;
    date: string;
}

function EventItem({title, description, date}: EventItemProps) {
    return (
        <AnimatedLayout className="w-full flex flex-col gap-y-1">
            <div className="w-full flex gap-x-4 items-center justify-between font-bold text-base hover:border-black hover:dark:border-white border-transparent  border-solid border-b-[3px] cursor-pointer duration-500">
                <p>{title}</p>
                <p>{date}</p>
            </div>
            <p className="text-base">{description}</p>
        </AnimatedLayout>
    )
}
