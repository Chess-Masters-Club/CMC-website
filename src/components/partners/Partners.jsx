import React from "react";
import Queen from "../../../public/W_Queen.png";
import Title from "../shared/Title/Title";

export default function Partners() {
  return (
    <div
      id="partners"
      className="h-[70vh] bg-secondary px-8 sm:px-20 lg:px-[9vw]  pt-16 flex flex-col justify-center md:justify-start "
    >
      <Title title="Partners" image={Queen} />
      <p className="text-white text-lg lg:w-10/12 w-full  ">
        Here are some of our partners who have helped us in our journey. We are
        always looking for new partners to help us achieve greater heights. If
        you are interested in partnering with us, please let us know ✨
      </p>
    </div>
  );
}
