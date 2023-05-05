import React from "react";
import Title from "../shared/Title/Title";
import Knight from "../../../public/W_Knight.png";
import { Upcoming,PastEvents } from "./EventsData";
import EventsCard from "./EventsCard";
export default function Events() {
  return (
    <div
      id="events"
      className="h-auto bg-secondary px-8 sm:px-20 lg:px-[9vw]  pt-16 flex flex-col justify-center md:justify-start "
    >
      <Title title="Events" image={Knight} />
      <p className="text-white text-lg lg:w-10/12 w-full  ">
        Each year, Chess Masters Club organizes many information tech events in
        order to spread knowledge about chess, artificial intelligence and
        cybersecurity. The main skeleton of our events is based on workshops and
        competitions where attendees are meant participate and enjoy the
        practical experience created by our own skilled members.
      </p>
      <div>
        <div className='flex items-center flex-col'>
            <h3 className="mb-8 mt-12 text-white text-[25px] md:text-[30px] lg:text-[35px]">
                Upcoming Events
            </h3>
            {
              Upcoming.map((event)=>(
                <EventsCard image={event.image} title={event.title} type={event.type} date={event.date} />
              ))
            }
        </div>
        <div className='flex items-center flex-col'>
            <h3 className="mb-8 mt-12 text-white text-[25px] md:text-[30px] lg:text-[35px]">
                Past Events
            </h3>
            <div className='flex flex-wrap justify-center items-center md:justify-between flex-row w-[100%]'>
            {
              PastEvents.map((event)=>(
                <EventsCard image={event.image} title={event.title} type={event.type} date={event.date} />
              ))
            }
            </div>
        </div>
    </div>
    </div>
  );
}
