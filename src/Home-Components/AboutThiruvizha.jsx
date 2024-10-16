import React from 'react'
import Welcome from "../assets/pollachi-logo.png"
import Bg from "../assets/bg1.png"

const AboutThiruvizha = () => {
    return (
        <div className="relative w-full bg-secondary py-12 px-6 md:px-12">


            <div className="relative w-[95%] mx-auto">
                <h1 className="w-full text-2xl sm:text-3xl text-primary bg-gradient-to-r from-gray-800 to-transparent font-extrabold text-center lg:text-left tracking-widest mb-4 p-3 border-l-8 border-primary px-8">
                    <span className=' tracking-widest'>Why Pollachi</span> <span className="text-secondary tracking-widest text-border-primary">Thiruvizha</span>
                </h1>
                <p className="text-lg text-white leading-8 mb-6 text-left px-4">
                    Welcome to the first-ever "Pollachi Thiruvizha," a grand celebration of culture, business, and entertainment!
                    This event brings together a wide variety of exciting expos, activities, and showcases, happening for the first time in Pollachi.
                    Join us as we celebrate the rich traditions of Pollachi with a modern twist. From technology expos to cultural fairs,
                    Pollachi Thiruvizha promises an unforgettable experience for all.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    <div className="flex justify-center border border-primary rounded-lg p-6">
                        <img
                            src={Welcome}
                            alt="Thiruvizha Event"
                            className="object-cover w-full "
                        />
                    </div>

                    <div className="text-lg text-white leading-8 flex items-center">
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
