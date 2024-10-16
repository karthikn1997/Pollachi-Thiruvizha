import React from 'react';
import { FaBullseye, FaEye, FaFlagCheckered, FaHandsHelping } from 'react-icons/fa';

const ThiruvizhaValues = () => {
    return (
        <div className="py-16 bg-secondary px-6 md:px-12 relative ">
            <div className="w-[95%] mx-auto">

                {/* Grid Layout for Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Flip Card: Mission */}
                    <div className="flip-card h-80">
                        <div className="flip-card-inner h-full">
                            <div className="flip-card-front bg-[#537a56] p-6 rounded-lg shadow-md text-center border-b-8 border-white flex flex-col justify-center">
                                <FaBullseye className="text-6xl text-white mb-4 mx-auto" />
                                <h3 className="text-2xl font-semibold text-white mb-4">Mission</h3>
                                <p className="text-white">
                                    To unite the vibrant community of Pollachi through a celebration of culture, innovation, and tradition.
                                </p>
                            </div>
                            <div className="flip-card-back bg-yellow-400 p-6 rounded-lg shadow-md text-center flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-white mb-4">Learn More</h3>
                                <p className="text-gray-900">Showcase the unique beauty and potential of Pollachi to a wider audience.</p>
                            </div>
                        </div>
                    </div>

                    {/* Flip Card: Vision */}
                    <div className="flip-card h-80">
                        <div className="flip-card-inner h-full">
                            <div className="flip-card-front bg-gray-800 p-6 rounded-lg shadow-md text-center border-b-8 border-yellow-400 flex flex-col justify-center">
                                <FaEye className="text-6xl text-yellow-400 mb-4 mx-auto" />
                                <h3 className="text-2xl font-semibold text-white mb-4">Vision</h3>
                                <p className="text-gray-300">
                                    Our vision is to create an annual event that fosters local pride.
                                </p>
                            </div>
                            <div className="flip-card-back bg-yellow-400 p-6 rounded-lg shadow-md text-center flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-white mb-4">Learn More</h3>
                                <p className="text-gray-900">Put Pollachi on the map as a hub for cultural and technological excellence.</p>
                            </div>
                        </div>
                    </div>

                    {/* Flip Card: Goals */}
                    <div className="flip-card h-80">
                        <div className="flip-card-inner h-full">
                            <div className="flip-card-front bg-[#537a56] p-6 rounded-lg shadow-md text-center border-b-8 border-white flex flex-col justify-center">
                                <FaFlagCheckered className="text-6xl text-white mb-4 mx-auto" />
                                <h3 className="text-2xl font-semibold text-white mb-4">Goals</h3>
                                <p className="text-white">
                                    Promote local businesses, artisans, and cultural talent.
                                </p>
                            </div>
                            <div className="flip-card-back bg-yellow-400 p-6 rounded-lg shadow-md text-center flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-white mb-4">Learn More</h3>
                                <p className="text-gray-700">Invite innovation and technological showcases from across the region.</p>
                            </div>
                        </div>
                    </div>

                    {/* Flip Card: Commitments */}
                    <div className="flip-card h-80">
                        <div className="flip-card-inner h-full">
                            <div className="flip-card-front bg-gray-800 p-6 rounded-lg shadow-md text-center border-b-8 border-yellow-400 flex flex-col justify-center">
                                <FaHandsHelping className="text-6xl text-yellow-400 mb-4 mx-auto" />
                                <h3 className="text-2xl font-semibold text-white mb-4">Commitments</h3>
                                <p className="text-gray-300">
                                    Committed to inclusivity, sustainability, and positive impacts.
                                </p>
                            </div>
                            <div className="flip-card-back bg-yellow-400 p-6 rounded-lg shadow-md text-center flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-white mb-4">Learn More</h3>
                                <p className="text-gray-900">Ensure Pollachi Thiruvizha reflects the values of the community.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ThiruvizhaValues;
