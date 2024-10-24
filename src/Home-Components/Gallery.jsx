import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Img1 from "../assets/rakla2.jpeg";
import Img2 from "../assets/dance1.jpeg";
import Img3 from "../assets/ratinam.jpeg";
import Img4 from "../assets/stage.jpeg";
import Img5 from "../assets/dance.jpeg";

const images = [
    { original: Img1, thumbnail: Img1 },
    { original: Img2, thumbnail: Img2 },
    { original: Img3, thumbnail: Img3 },
    { original: Img4, thumbnail: Img4 },
    { original: Img5, thumbnail: Img5 },
];

const GalleryComponent = () => {
    const renderImage = (item) => {
        return (
            <div className="w-[800px] h-[400px] mx-auto">
                <img
                    src={item.original}
                    alt=""
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
        );
    };

    return (
        <div className="w-full bg-secondary pt-10">
            <div className='w-full '>
                <div className="w-[90%] mx-auto p-10 bg-[#537a56] rounded-lg border">
                    <ImageGallery
                        items={images}
                        showThumbnails={true}
                        showPlayButton={true}
                        showFullscreenButton={false}
                        showNav={true}
                        renderItem={renderImage}
                        thumbnailClass="image-gallery-thumbnail h-20 w-20 border-2 border-transparent hover:border-[#ff6347] transition-all duration-300" // Tailwind classes added here
                    />
                </div>
            </div>
        </div>
    );
};


export default GalleryComponent;
