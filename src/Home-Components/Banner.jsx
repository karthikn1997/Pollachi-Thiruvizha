import React, { useEffect, useState, useRef } from "react";
import { Fireworks } from "fireworks-js";
import Tree1 from "../assets/tree1.png";
import Tree2 from "../assets/tree.png";

const Banner = () => {
    const fireworksRef = useRef(null);

    const slides = [
        {
            image: Tree1,
            text: "Exhibition",
            date: "25th - 29th"
        },
        {
            image: Tree2,
            text: "Children's Games",
            date: "22nd - 29th"
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

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
        // Auto-slide logic
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    // Function to format date and ordinal suffix
    const formatDateWithSuffix = (date) => {
        const dateParts = date.split(" ");
        return dateParts.map((part, idx) => {
            const number = part.replace(/[^0-9]/g, "");
            const suffix = part.replace(/[0-9]/g, "");
            return (
                <span key={idx} className="text-shadow mr-4">
                    {number}
                    <sup className="text-2xl">{suffix}</sup>
                </span>
            );
        });
    };

    return (
        <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-b from-secondary via-secondary to-primary border-primary">
            {/* Background Image */}
            <img
                src={slides[currentSlide].image}
                alt="Pollachi Thiruvizha"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000"
            />

            {/* Fireworks Canvas */}
            <canvas ref={fireworksRef} className="absolute w-full inset-0" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl text-white font-extrabold text-center tracking-widest text-shadow-lg mb-4">
                    {slides[currentSlide].text}
                </h1>
                <p className="text-2xl md:text-5xl mb-6 max-w-5xl text-gray-100 transition-opacity duration-1000 tracking-widest">
                    {formatDateWithSuffix(slides[currentSlide].date)}
                </p>
                {/* <button className="bg-gradient-to-r from-primary via-secondary to-primary hover:from-secondary hover:to-primary text-white font-bold py-3 px-10 rounded-2xl transition-all duration-300 border-2 border-primary shadow-lg hover:shadow-2xl transform hover:scale-105">
                    <div className="flex items-center gap-3 font-bold text-xl text-white hover:text-black">
                        <span className="text-lg lg:text-xl text-white" style={{ textShadow: "2px 2px 0px black" }}>
                            Book Now
                        </span>
                    </div>
                </button> */}
            </div>
        </div>
    );
}

export default Banner;
