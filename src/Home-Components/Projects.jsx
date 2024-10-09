import React, { useEffect } from "react";
import { FaCheckCircle } from 'react-icons/fa'; // Importing the icons
import Image1 from '../assets/img-1.jpeg';
import Image2 from '../assets/img-2.jpeg';
import Bg from "../assets/bg.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#26282B] py-10 px-8 sm:px-4 relative">

      <div className="w-full absolute inset-0 bg-cover bg-center bg-opacity-30"
          style={{ backgroundImage: `url(${Bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.2 }}
        ></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-left text-white mb-12 border-b border-[#EBCFA7] pb-4">
          Upcoming Projects
        </h2>

        {/* Row 1: Facilities Left, Project Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-[#EBCFA7] pb-8">
          {/* Facilities */}
          <div className="flex-1">
            <ul className="text-white space-y-4 text-xl tracking-widest">
              <li className="flex items-center">
                <FaCheckCircle className="text-[#EBCFA7] mr-3 text-2xl animate-bounce" />
                <span>All Facing Available</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#EBCFA7] mr-3 text-2xl animate-bounce" />
                <span>Only For Sale</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#EBCFA7] mr-3 text-2xl animate-bounce" />
                <span>1532 Sqft</span>
              </li>
            </ul>
          </div>

          {/* Project 1 */}
          <div className="w-full bg-[#EBCFA7] shadow-lg  overflow-hidden flex-1 border" data-aos="slide-left" data-aos-delay="300">
            <img 
              src={Image1} 
              alt="Project 1" 
              className="w-full  h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#26282B] mb-4">
                Luxury Apartments
              </h3>
              
              <button className="px-6 py-2 border-2 border-gray-800 text-[#26282B] rounded-md hover:bg-[#26282B] hover:text-white animate-slow-ping">
                More Details
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Project Left, Facilities Right */}
        <div className="flex flex-col md:flex-row-reverse items-center  gap-8 border-b border-[#EBCFA7] pb-8">
          {/* Facilities */}
          <div className="flex-1 ">
            <ul className="text-white space-y-4 text-xl tracking-widest">
              <li className="flex items-center">
                <FaCheckCircle className="text-[#EBCFA7] mr-3 text-2xl animate-bounce" />
                <span>All Facing Available</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#EBCFA7] mr-3 text-2xl animate-bounce" />
                <span>Only For Sale</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#EBCFA7] mr-3 text-2xl animate-bounce" />
                <span>1459 Sqft</span>
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="w-full bg-[#EBCFA7] shadow-lg  overflow-hidden flex-1 border" data-aos="slide-right" data-aos-delay="300">
            <img 
              src={Image2} 
              alt="Project 2" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#26282B] mb-4">
                Modern Villas
              </h3>
            
              <button className="px-6 py-2 border-2 border-gray-800 text-[#26282B] rounded-md hover:bg-[#26282B] hover:text-white animate-slow-ping">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
