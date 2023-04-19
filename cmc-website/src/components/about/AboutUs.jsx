import React, { Component } from "react";
import Title from "../shared/Title";
import Rook from "../../../public/W_Rook.png";

export default class AboutUs extends Component {
  render() {
    return (
      <div
        id="about"
        className=" bg-secondary px-8 sm:px-20 lg:px-[9vw] h-[70vh]  pt-16 flex flex-col justify-center md:justify-start "
      >
        <Title title="About Us" image={Rook} />
        <p className="text-white text-lg lg:w-10/12 w-full  ">
          our scientific club that aims mainly to combine chess ♞ with
          artificial intelligence 🤹🏻 in particular and everything related to
          technology 👾 in general, which makes us not only distinguished in
          terms of content, but even our horizons have no limits, as chess and
          technology are unlimited fields, TO chess and TO tech!
        </p>
      </div>
    );
  }
}
