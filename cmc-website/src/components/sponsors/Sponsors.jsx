import React from "react";
import King from "../../../public/W_King.png";
import Title from "../shared/Title";

export default function Sponsors() {
  return (
    <div
      id="sponsors"
      className="h-[70vh] bg-secondary px-8 sm:px-20 lg:px-[9vw]  pt-16 flex flex-col justify-center md:justify-start "
    >
      <Title title="Sponsors" image={King} />
      <p className="text-white text-lg lg:w-10/12 w-full  ">
        We are grateful to our sponsors for their support and contribution to
        our club. We are always looking for new sponsors to help us grow and
        develop our community. If you are interested in sponsoring us, please
        lets us know 💖
      </p>
    </div>
  );
}
