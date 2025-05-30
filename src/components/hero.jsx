import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import status from "../assets/status.png";
import frontend from "../assets/frontend.png";
import reno from "../assets/reno.png";
import moi from "../assets/moi.png";
import oldLaptop from "../assets/old-laptop.png";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`pb-[20px] md:pb-[100px] pt-[100px] transform transition-all duration-1000 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-17 mt-[10px]">
        <p className="stats flex items-center justify-end text-[20px] text-[#A2A3A3]">
          Status:{" "}
          <img src={status} alt="" className="h-[37px] w-[37px] ml-[10px]" />
          Open to Works
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-[25px] md:mt-[60px] relative px-4 sm:px-6 lg:px-31">
        {/* DESKTOP HEADINGS */}
        <div className="desktop">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="hidden md:block integral-font text-[#54625A] md:text-[10rem] lg:text-[200px] font-black relative leading-40 custom-untight mx-auto"
          >
            RENFRED
          </motion.h1>

          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="hidden md:block integral-font text-[#54625A] md:text-[12.3rem] lg:text-[240px] font-black relative leading-40 custom-tight mx-auto ml-[-3px]"
          >
            REUBEN
          </motion.h1>
        </div>

        {/* MOBILE HEADINGS */}
        <div className="mob w-full ml-[15px] overflow-hidden">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="block md:hidden integral-font text-[#54625A] text-[30vw] font-black relative leading-24 mx-auto"
          >
            RENF <br />
            RED -
          </motion.h1>

          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="block md:hidden integral-font text-[#54625A] text-[40vw] font-black relative leading-32 mt-[10px] ml-[-3px] mx-auto"
          >
            REU <br />
            BEN
          </motion.h1>
        </div>

        {/* LAPTOP IMAGE */}
        <img
          src={oldLaptop}
          alt="Old Computer"
          className={`absolute md:bottom-[-20%] right-[1%] md:right-[10%] w-[220px] md:w-[350px] z-10 transform transition-transform duration-1000 cursor-pointer hover:scale-105 ${
            isLoaded ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={() => alert("🎉 You found an Easter egg! Keep exploring...")}
        />
      </div>

      {/* TYPING TEXT */}
      <div className="px-6 sm:px-6 lg:px-40 text-[20px] md:text-[30px] text-[#54625A] mt-[30px] font-[Nanum Myeongjo]">
        <Typewriter
          words={["A Front-End Developer with a Structured Mind"]}
          loop={1}
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={2000}
        />
      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden mt-0 mb-[5px] md:mt-[30px] md:mb-0">
        <div className="relative overflow-hidden mt-[30px]">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{
              animation: "scroll 20s linear infinite",
            }}
          >
            {Array.from({ length: 30 }).map((_, index) => (
              <img
                key={index}
                src={frontend}
                alt="Frontend developer text"
                className="inline-block"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
