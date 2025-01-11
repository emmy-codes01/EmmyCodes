/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import dp from '../assets/images/dp.png';

// Import tool icons (update paths based on your project structure)
import ReactIcon from '../assets/react.svg';
import ReduxIcon from '../assets/redux.png';
import PhotoshopIcon from '../assets/photoshop.png';
import NodeIcon from '../assets/node.png';
import IllustratorIcon from '../assets/illustrator.png';

const Herosection = () => {
    return (
        <section className="pt-36 pb-28 md:pb-36 md:pt-48 bg-gray-100 flex flex-col items-center justify-center px-4 py-12 relative w-full rounded-b-[100px]">
            {/* Profile Image with Icons Around */}
            <div className="relative mb-8 md:mb-16 rounded-b-lg w-auto">
                {/* Profile Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 relative">
                    <img
                        src={dp}
                        alt="Profile"
                        className="w-full h-full object-cover grayscale"
                    />

                    {/* Icons Around Profile */}
                    <div className="absolute w-full h-full flex items-center justify-center bg-black">
                        {/* React Icon */}
                        <img
                            src={ReactIcon}
                            alt="React"
                            className="absolute top-0 left-[40%] w-8 h-8 md:w-10 md:h-10"
                        />
                        {/* Redux Icon */}
                        <img
                            src={ReduxIcon}
                            alt="Redux"
                            className="absolute top-[30%] left-0 w-8 h-8 md:w-10 md:h-10"
                        />
                        {/* Photoshop Icon */}
                        <img
                            src={PhotoshopIcon}
                            alt="Photoshop"
                            className="absolute top-[30%] right-0 w-8 h-8 md:w-10 md:h-10"
                        />
                        {/* Node Icon */}
                        <img
                            src={NodeIcon}
                            alt="Node.js"
                            className="absolute bottom-0 left-[40%] w-8 h-8 md:w-10 md:h-10"
                        />
                        {/* Illustrator Icon */}
                        <img
                            src={IllustratorIcon}
                            alt="Illustrator"
                            className="absolute bottom-[30%] right-[10%] w-8 h-8 md:w-10 md:h-10"
                        />
                    </div>
                </div>

                {/* Animated Name Bubble */}
                <div className="absolute -right-28 top-4 animate-float text-xs">
                    <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm">
                        <div className="flex items-center">
                            <span className="text-xs md:text-xs w-20 md:w-20 text-gray-900 font-medium">
                                Emmanuel A.
                            </span>
                            <span role="img" aria-label="wave" className="text-base md:text-lg">
                                👋
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Text */}
            <div className="text-center max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mb-10 md:mb-12 rounded-b-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-semibold leading-tight bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">
                    Building digital products, brands, and experiences.
                </h1>
            </div>

            {/* CTA Button */}
            <a href="/portfolio">
                <button className="hover:underline flex items-center gap bg-black text-xs text-white px-8 py-5 md:px-8 md:py-5 rounded-full transition-all">
                    <span className="text-xs md:text-xs font-medium">Discover</span>
                    <ArrowUpRight size={20} className='' />
                </button>
            </a>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Herosection;