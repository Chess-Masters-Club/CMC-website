import React from "react";
import Title from "../shared/Title";
import Pawn from "../../../public/W_Pawn.png";
import { contactInfos } from "../../data";

export default function ContactUs() {
  return (
    <div
      id="contact"
      className="h-[70vh] bg-secondary px-8 sm:px-20 lg:px-[9vw]  pt-16 flex flex-col justify-center md:justify-start "
    >
      <Title title="Contact Us" image={Pawn} />
      <p className="text-white text-lg lg:w-10/12 w-full  ">
        Feel free to contact us for any inquiries or suggestions. We are always
        happy to hear from you! 🥰
      </p>

      <div className="flex flex-col gap-y-4 font-medium text-white mt-14  mb-40 md:mb-0">
        {contactInfos.map((info, i) => (
          <a
            href={info.href}
            key={i}
            className="flex items-center gap-x-4"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center ">{info.icon}</div>
            <div className="">{info.content}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
