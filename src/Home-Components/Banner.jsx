import React, { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";
import Tree from "../assets/tree2.png"

const Banner = () => {
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
        <div className="relative w-full h-[500px] md:h-[600px] bg-secondary border-y-4 border-primary">
            {/* Background Image */}
            <img
                src={Tree}
                alt="Pollachi Thiruvizha"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            {/* Fireworks Canvas */}
            <canvas ref={fireworksRef} className="absolute w-full inset-0" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="w-full text-2xl sm:text-3xl lg:text-5xl text-secondary font-extrabold text-center text-border tracking-wider mb-4">
                    Pollachi <span className="text-secondary text-border">Thiruvizha 2024</span>
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-5xl text-gray-300">
                    Join us for the first-ever Pollachi Thiruvizha! A vibrant celebration of culture, business expos,
                    traditional performances, and entertainment. Don’t miss this unique experience in Pollachi.
                </p>
                <button className="bg-gradient-to-r from-secondary via-secondary to-secondary hover:bg-gradient-to-l text-white font-semibold py-2  px-8 rounded-xl transition duration-300 border-[2px] border-primary whitespace-nowrap shadow-xl">
                    <div className="flex items-center gap-3 font-bold text-xl text-white hover:text-black">
                        <span className="text-lg lg:text-xl text-white" style={{ textShadow: "2px 2px 0px black" }}>
                            Book Now
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Banner;
