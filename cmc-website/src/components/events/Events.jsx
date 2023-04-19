import React from "react";
import Title from "../shared/Title";
import Knight from "../../../public/W_Knight.png";

export default function Events() {
  return (
    <div
      id="events"
      className="h-[70vh] bg-secondary px-8 sm:px-20 lg:px-[9vw]  pt-16 flex flex-col justify-center md:justify-start "
    >
      <Title title="Events" image={Knight} />
      <p className="text-white text-lg lg:w-10/12 w-full  ">
        Each year, Chess Masters Club organizes many information tech events in
        order to spread knowledge about chess, artificial intelligence and
        cybersecurity. The main skeleton of our events is based on workshops and
        competitions where attendees are meant participate and enjoy the
        practical experience created by our own skilled members.
      </p>
    </div>
  );
}
