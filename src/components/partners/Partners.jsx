import React from "react";
import Queen from "../../../public/W_Queen.png";
import Title from "../shared/Title/Title";
import { partners } from "../../data";
import Card from "./../shared/Card/index";

export default function Partners() {
  return (
    <div
      id="partners"
      className=" bg-secondary px-8 sm:px-20 lg:px-[9vw]  pt-16 flex flex-col justify-center md:justify-start "
    >
      <Title title="Partners" image={Queen} />
      <p className="text-white text-lg lg:w-10/12 w-full  mb-20">
        Here are some of our partners who have helped us in our journey. We are
        always looking for new partners to help us achieve greater heights. If
        you are interested in partnering with us, please let us know ✨
      </p>

      <div className="flex items-center flex-col">
        <div className="w-[100%] flex-wrap flex justify-center flex-row">
          {partners.map((item) => (
            <Card name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
