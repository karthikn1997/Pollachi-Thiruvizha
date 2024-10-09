import React, { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";
import HeroBg from "../assets/pt-bg.jpg";
import Crowd from "../assets/crowd1.png";
import Party from "../assets/party.png"
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Hero = () => {
  const fireworksRef = useRef(null);

  useEffect(() => {
    // Initialize Fireworks
    const fireworks = new Fireworks(fireworksRef.current, {
      speed: 1,
      acceleration: 1,
      friction: 0.9,
      gravity: 1,
      particles: 100,
    });

    fireworks.start();

    return () => {
      fireworks.stop();
    };
  }, []);

  return (
    <div className="w-full min-h-[100vh] relative">
      <section className="relative min-h-[100vh] w-full flex flex-col lg:flex-row items-center justify-center hero-section gap-8 lg:gap-4 bg-[rgba(0,0,0,0.5)] py-8 overflow-hidden border-b-4 border-green-500">
        
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${HeroBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              filter: "blur(5px)",
              opacity: 0.8,
            }}
          ></div>
        </div>

        {/* Fireworks Canvas */}
        <canvas ref={fireworksRef} className="absolute w-full inset-0" />

        <img src={Crowd} className="absolute w-full bottom-0 z-10 opacity-70" alt="" />
        <img src={Party} className="absolute w-full -top-24 z-20 opacity-50" alt="" />

        {/* Content */}
        <div className="px-8 pt-10 lg:p-20 flex flex-col justify-center items-center relative z-20">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-orange-600 font-extrabold mb-4 text-center lg:text-left text-border tracking-wider waving2 span ">
            <span className="mr-4 ">Pollachi </span><span className="text-blue-800 text-border ">Thiruvizha</span>
          </h1>
          <p className="text-sm lg:text-xl tracking-wider text-white mb-4 md:mb-8 text-center lg:text-left">
            We're glad you're here. Discover amazing events and join our community!
          </p>
          <button className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-700 hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-8 rounded-xl transition duration-300 border-[2px] border-white whitespace-nowrap shadow-xl animate-slow-ping">
            <div className="flex items-center gap-3 font-bold text-xl text-white hover:text-black">
              <span className="text-lg lg:text-2xl text-white" style={{ textShadow: "2px 2px 0px black" }}>
                Book Now
              </span>
              <span className="text-2xl animate-bounce">
                <FaRegArrowAltCircleDown className="text-white" />
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
