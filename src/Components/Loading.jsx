
import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import an icon from react-icons


const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white ">
      <FaSpinner className="text-green-500 animate-spin" size={88} />
      <h2 className="text-2xl m-5 font-bold text-black transition-all duration-300 tracking-widest "
        >
          Karthik Project</h2>
    </div>
  );
};

export default Loading;