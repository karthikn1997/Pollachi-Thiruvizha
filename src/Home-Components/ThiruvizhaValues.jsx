import React from 'react'
import { FaBullseye, FaEye, FaFlagCheckered, FaHandsHelping } from 'react-icons/fa'

const ThiruvizhaValues = () => {
    return (
        <div className="py-16 bg-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Mission, Vision, Goals & Commitments
                </h2>

                {/* Grid Layout for Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Mission */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:bg-blue-100 text-center">
                        <FaBullseye className="text-6xl text-blue-500 mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
                        <p className="text-gray-600">
                            To unite the vibrant community of Pollachi through a celebration of culture, innovation, and tradition.
                            We aim to showcase the unique beauty and potential of Pollachi to a wider audience.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:bg-green-100 text-center">
                        <FaEye className="text-6xl text-green-500 mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
                        <p className="text-gray-600">
                            Our vision is to create an annual event that not only fosters local pride but also puts Pollachi on the map as a hub for cultural and technological excellence.
                        </p>
                    </div>

                    {/* Goals */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-100 text-center">
                        <FaFlagCheckered className="text-6xl text-yellow-500 mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Goals</h3>
                        <p className="text-gray-600">
                            Our primary goal is to promote local businesses, artisans, and cultural talent, while also inviting innovation and technological showcases from across the region.
                        </p>
                    </div>

                    {/* Commitments */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:bg-purple-100 text-center">
                        <FaHandsHelping className="text-6xl text-purple-500 mb-4 mx-auto animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Commitments</h3>
                        <p className="text-gray-600">
                            We are committed to inclusivity, sustainability, and creating lasting positive impacts for the local community. We ensure that Pollachi Thiruvizha reflects the values and aspirations of the people.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ThiruvizhaValues;
