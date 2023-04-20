import React from "react";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../scripts/motion";
import Particlesbg from "./Particles";

const Hero = () => {
  return (
    <>
      <Particlesbg />

      <motion.section
        id="home"
        className="px-8 sm:px-20 lg:px-[9vw] h-[89vh] min-h-[500px] relative flex items-center content-center mt-32 lg:mt-0"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex justify-center md:justify-start items-center mb-14 w-full lg:w-10/12">
          <div>
            <motion.h1
              className="bg-clip-text bg-gradient-to-b text-tertiary text-[40px] md:text-[45px] text-center md:text-left w-full lg:text-[50px] xl:text-[60px] font-extrabold "
              variants={textVariant(0.4)}
            >
              This is <span className="text-secondary">Chess Masters</span>
            </motion.h1>

            <motion.div
              className=" mt-5 text-lg sm:text-xl md:text-2xl text-tertiary text-center md:text-left lg:text-3xl xl:text-4xl font-light"
              variants={textVariant(0.6)}
            >
              <div className="ml-2">
                The first Algerian scientific club for{" "}
                <span className="text-secondary">artificial intelligence</span>{" "}
                🧠 and <span className="text-secondary">chess</span> ♟️
              </div>
              <button className="bg-secondary border-2 transition-all duration-300 text-lg lg:text-2xl text-white font-bold py-4 px-12 rounded-2xl mt-5 lg:mt-10 border-secondary hover:bg-white hover:text-secondary">
                Join us!
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
