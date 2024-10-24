import React, { useState } from 'react';
import Img from "../assets/rakla2.jpeg"

// Sample event data for each day
const eventData = {
    '22nd-Dec': [
        { title: 'Rekla Race', time: '6:30 AM', image: Img },
        { title: 'Pollachi Railway Station Celebration-PRPA', time: '10:30 AM', image: Img },
        { title: 'Inaugural Function & Chamber Day', time: '6:30 PM', image: Img },
    ],
    '23rd-Dec': [
        { title: 'Scooter Rally Womens', time: '6:30 AM', image: Img },
        { title: 'Book Festival', time: '10:30 AM', image: Img },
        { title: 'Nagaisuvai Pattimandram', time: '6:30 PM', image: Img },
        { title: 'kabbadi-STC (Adults)', image: Img },
    ],
    '24th-Dec': [
        { title: 'Cycle Rally', time: '6:30 AM', image: Img },
        { title: 'Cooking Competition', time: '10:30 AM', image: Img },
        { title: 'Story Telling Bava Chelladurai', time: '6:30 PM', image: Img },
        { title: 'Inter College Culturals-STC', image: Img },
    ],
    '25th-Dec': [
        { title: 'Nature Walk @ Aliyar', time: '6:30 AM', image: Img },
        { title: 'Cooking Competition Transgender', time: '10:30 AM', image: Img },
        { title: 'Valli Kummi', time: '6:30 PM', image: Img },
        { title: 'Yuvakalam Science Expo By Students', image: Img },
    ],
    '26th-Dec': [
        { title: 'Marathon', time: '6:30 AM', image: Img },
        { title: 'Treasure Hunt', time: '10:30 AM', image: Img },
        { title: 'Culturals & Martial Arts', time: '6:30 PM', image: Img },
        { title: 'Exihibition', image: Img },
    ],
    '27th-Dec': [
        { title: 'Walkathon For SR. Citizens & Cycle Rally For Childrens & SPL Childrens', time: '6:30 AM', image: Img },
        { title: 'Business Meet', time: '10:30 AM', image: Img },
        { title: 'Isha Team Performance (or) Perunchalangai Aattam', time: '6:30 PM', image: Img },
        { title: 'Rangoli-MCET', image: Img },
    ],
    '28th-Dec': [
        { title: 'Mass Yoga', time: '6:30 AM', image: Img },
        { title: 'Horse Race', time: '10:30 AM', image: Img },
        { title: 'Food Festival', time: '6:30 PM', image: Img },
        { title: 'DJ Night & Fire Cracker Show', image: Img },
    ],
    '29th-Dec': [
        { title: 'Happy Streets', time: '6:30 AM', image: Img },
        { title: 'Awards Night', time: '6:30 PM', image: Img },
    ],
};

const Events = () => {
    const [selectedDate, setSelectedDate] = useState('22nd-Dec');

    // List of dates from 22-Dec to 29-Dec
    const dates = ['22nd-Dec', '23rd-Dec', '24th-Dec', '25th-Dec', '26th-Dec', '27th-Dec', '28th-Dec', '29th-Dec'];

    return (
        <div className="w-full bg-secondary py-8" id="events">
            <div className="flex w-[90%] h-full mx-auto border border-yellow-500 rounded-lg shadow-lg transition-all duration-300">
                {/* Left-side tab menu */}
                <div className="w-1/4 bg-gray-800 p-4 rounded-l-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-white">Event Dates</h3>
                    <ul>
                        {dates.map((date) => (
                            <li key={date}>
                                <button
                                    className={`block w-full text-left p-3 mb-2 rounded font-semibold transition-all duration-300 ${selectedDate === date
                                        ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-800 hover:text-white hover:bg-[#89A711] hover:shadow-lg'
                                        }`}
                                    onClick={() => setSelectedDate(date)}
                                >
                                    {date}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right-side event list */}
                <div className="w-3/4 bg-[#537a56] p-6 rounded-r-lg flex flex-col justify-center items-center">
                    <h3 className="w-full text-2xl font-bold mb-6 text-left text-white">{selectedDate} Events</h3>

                    {/* Grid Layout for event cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {eventData[selectedDate]?.map((event, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col items-center justify-between p-2 border border-gray-200 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                            >
                                {/* Event image */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover rounded-lg mb-2"
                                />
                                {/* Event details */}
                                <div className="w-full px-4 text-center">
                                    <h4 className="text-sm font-semibold text-gray-900">{event.title}</h4>
                                    <p className="text-gray-600 text-sm mt-2">{event.time}</p>
                                </div>
                                {/* Get Ticket button */}
                                <button className="mt-4 py-2 w-full bg-yellow-500 text-black rounded-lg font-semibold shadow-md hover:bg-blue-800 transition-all duration-300">
                                    Get Ticket
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
