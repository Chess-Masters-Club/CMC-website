import React from "react";
import Banner from "../../../public/banner_logo.png";
import { socials } from "../../data";

export default function Footer() {
  return (
    <div
      id="footer"
      className="text-secondary bg-white border-t-[3px]  border-tertiary"
    >
      <div className="bottom-0 z-10 mt-8 w-full  px-10 pt-12">
        <div className="mx-6 pb-16 sm:mx-0 ">
          {/* contact */}

          {/* social media */}
          <div className="mb-8 flex flex-col items-center sm:m-0">
            <div className="pb-10 text-4xl">Follow us</div>
            <div className="flex gap-x-6">
              {socials.map((social, i) => (
                <div key={i} className="flex items-center justify-center ">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-[10px] rounded-full transition-all bg-tertiary bg-opacity-50 border-tertiary  hover:bg-transparent hover:text-tertiary border-[2px]"
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h5 className="bottom-0 px-2 pb-8 text-center text-[14px] md:text-[18px]">
        © 2023 Chess Masters - Constantine. All rights reserved.
      </h5>
    </div>
  );
}
