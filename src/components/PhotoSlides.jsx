/* eslint-disable no-unused-vars */
import React from 'react';
import r11 from '../assets/images/r11.png';
import r12 from '../assets/images/r12.png';
import r13 from '../assets/images/r13.png';
import r14 from '../assets/images/r14.png';
import r15 from '../assets/images/r15.png';
import r16 from '../assets/images/r16.png';
import r17 from '../assets/images/r17.png';

const PhotoSlides = () => {
    const topRowImages = [
        r17,
        r16,
        r15,
        r11,
        r12,
        r13,
        r14,
    ];

    const duplicatedTopRow = [...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages];

    return (
        <div className="w-full overflow-hidden bg-white py-8 relative rounded-b-[100px]">
            <div className="w-full">
                <div className="flex animate-scroll-smooth">
                    {duplicatedTopRow.map((src, index) => (
                        <div
                            key={index}
                            className="flex-none w-56 md:w-96 h-44 shrink-0"
                        >
                            <img
                                src={src}
                                alt="Image"
                                className="w-full h-full object-cover opacity-75 filter grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoSlides;