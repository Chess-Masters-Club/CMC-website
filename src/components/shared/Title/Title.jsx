import React from "react";
import Bishop from "../../../../public/W_Bishop.png";
import king from "../../../../public/W_King.png";
import Knight from "../../../../public/W_Knight.png";

import "./Title.css";

export default function Title({ title, image }) {
  return (
    <div className="flex mb-10">
      {
        image ? <img
        className="lg:w-14 md:w-12 w-10 mr-5 object-contain h-auto"
        src={image}
      /> : null
      }
      <h1 className=" mt-12 text-white text-[40px] md:text-[45px] lg:text-[50px]">
        {title}
      </h1>
    </div>
  );
}
