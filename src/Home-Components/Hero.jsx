import React, { useEffect, useRef, useState } from "react";
import { Fireworks } from "fireworks-js";
import HeroBg1 from "../assets/pt-bg.jpg"; // Your first background image
import HeroBg2 from "../assets/bg1.jpg"; // Another background image
import HeroBg3 from "../assets/bg2.jpg"; // Another background image
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import logo from "../assets/pollachi-logo.png";

const Hero = () => {
  const fireworksRef = useRef(null);
  const [currentBg, setCurrentBg] = useState(0);

  // Array of background images
  const bgImages = [HeroBg1, HeroBg2, HeroBg3];

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

  useEffect(() => {
    // Change background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % bgImages.length);
    }, 5000); // Change the interval time (in milliseconds) as per your requirement

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [bgImages.length]);

  return (
    <div className="w-full min-h-[100vh] relative" id="home">
      <section className="relative min-h-[100vh] w-full flex flex-col lg:flex-row items-center justify-center hero-section gap-8 lg:gap-4 bg-black py-8 overflow-hidden border-b-2 border-primary">

        {/* Background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImages[currentBg]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              filter: "blur(0px)",
              opacity: 0.8,
              transition: "background-image 2s ease-in-out", // Add smooth transition
            }}
          ></div>
        </div>

        {/* Fireworks Canvas */}
        <canvas ref={fireworksRef} className="absolute w-full inset-0" />

        {/* Content */}
        <div className="px-8 pt-10 lg:p-20 flex flex-col justify-center items-center relative z-20 -mt-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-orange-600 font-extrabold mb-4 text-center lg:text-left text-border tracking-wider waving2 span " >
            <span className="mr-4">Pollachi</span><span className="text-blue-800 text-border">Thiruvizha 2024</span>
          </h1>
          <p className="text-sm lg:text-xl tracking-wider text-white mb-4 md:mb-8 text-center lg:text-left">
            We're glad you're here. Discover amazing events and join our community!
          </p>
          <button className="bg-[#89A711] hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-8 rounded-xl transition duration-300 border-[2px] border-orange-500 whitespace-nowrap shadow-xl animate-slow-ping">
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
