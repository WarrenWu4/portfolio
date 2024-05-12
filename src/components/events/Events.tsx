import { Event } from "../../lib/types";
import LoadingPage from "../../pages/LoadingPage"
import { useEffect, useState } from "react" 
import EventCard from "./EventCard";
import ContentLayout from "../../layouts/ContentLayout";

export default function Events() {
    
    const [events, setEvents] = useState<Event[] | null>(null);

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
        <ContentLayout title="What I've Been Up To">
            <div className="w-full flex flex-col brutalist">
                {events.map((event:Event, index:number) => {
                    return (
                        <EventCard 
                            key={index}
                            event={event}
                            className={(index === 0) ? "" : "border-t-4"} 
                        />
                )})}
            </div>
        </ContentLayout>
    )
}
