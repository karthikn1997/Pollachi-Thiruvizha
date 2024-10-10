import React from 'react'
import { FaBullseye, FaEye, FaFlagCheckered, FaHandsHelping } from 'react-icons/fa'
import Bg from "../assets/pollachi-logo.png"

const ThiruvizhaValues = () => {
    return (
        <div className="py-16 bg-white px-6 md:px-12 relative">

            {/* Background image */}
            <div className="absolute inset-0 w-full z-0 bottom-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Bg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                        opacity: 0.2,
                    }}
                ></div>
            </div>

            <div className="w-[95%] mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-left text-gray-800 mb-12 bg-gradient-to-r from-primary to-transparent p-3 border-l-8 border-secondary px-8">
                    Our Mission, Vision, Goals & Commitments
                </h2>

                {/* Grid Layout for Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Mission */} 
                    <div className="bg-primary p-6 rounded-lg shadow-md  transition-transform duration-300 transform text-center border-b-8 border-secondary pt-10">
                        <FaBullseye className="text-6xl text-secondary mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-secondary mb-4">Mission</h3>
                        <p className="text-gray-900">
                            To unite the vibrant community of Pollachi through a celebration of culture, innovation, and tradition.
                            We aim to showcase the unique beauty and potential of Pollachi to a wider audience.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-secondary p-6 rounded-lg shadow-md transition-transform duration-300 transform  text-center border-b-8 border-primary pt-10">
                        <FaEye className="text-6xl text-primary mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-primary mb-4">Vision</h3>
                        <p className="text-gray-200">
                            Our vision is to create an annual event that not only fosters local pride but also puts Pollachi on the map as a hub for cultural and technological excellence.
                        </p>
                    </div>

                    {/* Goals */}
                    <div className="bg-primary p-6 rounded-lg shadow-md  transition-transform duration-300 transform text-center border-b-8 border-secondary pt-10">
                        <FaFlagCheckered className="text-6xl text-secondary mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-secondary mb-4">Goals</h3>
                        <p className="text-gray-900">
                            Our primary goal is to promote local businesses, artisans, and cultural talent, while also inviting innovation and technological showcases from across the region.
                        </p>
                    </div>

                    {/* Commitments */}
                    <div className="bg-secondary p-6 rounded-lg shadow-md  transition-transform duration-300 transform text-center border-b-8 border-primary pt-10">
                        <FaHandsHelping className="text-6xl text-primary mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-primary mb-4">Commitments</h3>
                        <p className="text-gray-200">
                            We are committed to inclusivity, sustainability, and creating lasting positive impacts for the local community. We ensure that Pollachi Thiruvizha reflects the values and aspirations of the people.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ThiruvizhaValues;
