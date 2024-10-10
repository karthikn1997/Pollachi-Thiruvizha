import React from 'react'
import Welcome from "../assets/pollachi-logo.png"
import Bg from "../assets/bg1.png"

const AboutThiruvizha = () => {
    return (
        <div className="relative w-full bg-white py-12 px-6 md:px-12 border-2">

            {/* Background image */}
            <div className="absolute inset-0 w-full z-0 bottom-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Bg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                        opacity: 0.1,
                    }}
                ></div>
            </div>


            <div className="relative w-[95%] mx-auto">
                <h1 className="w-full text-2xl sm:text-3xl text-primary bg-gradient-to-r from-primary to-transparent font-extrabold text-center lg:text-left tracking-widest mb-4 p-3 border-l-8 border-secondary px-8">
                    <span className='text-border-secondary tracking-widest'>Pollachi</span> <span className="text-secondary tracking-widest">Thiruvizha 2024</span>
                </h1>
                <p className="text-lg text-gray-800 leading-8 mb-6 text-left px-4">
                    Welcome to the first-ever "Pollachi Thiruvizha," a grand celebration of culture, business, and entertainment!
                    This event brings together a wide variety of exciting expos, activities, and showcases, happening for the first time in Pollachi.
                    Join us as we celebrate the rich traditions of Pollachi with a modern twist. From technology expos to cultural fairs,
                    Pollachi Thiruvizha promises an unforgettable experience for all.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    <div className="flex justify-center">
                        <img
                            src={Welcome}
                            alt="Thiruvizha Event"
                            className="rounded-lg shadow-md shadow-gray-500 object-cover p-4 w-full "
                        />
                    </div>

                    <div className="text-lg text-gray-800 leading-8 flex items-center">
                        <p>
                            Explore a range of expos featuring local businesses, artisanal products, and technology innovations.
                            Experience traditional performances, food stalls, and much more as we highlight the beauty and vibrancy of Pollachi.
                            Whether you're a local or a visitor, Pollachi Thiruvizha has something for everyone. Don’t miss the chance to be a part of this incredible event!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutThiruvizha;
