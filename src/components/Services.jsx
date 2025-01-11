/* eslint-disable no-unused-vars */
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 relative w-full ">
      {/* Main heading with gradient */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-transparent">
         I Collaborate with brands and agencies to create impactful results.
        </h2>
        
        {/* Services label with line */}
        <div className="relative mt-16">
          <div className="absolute w-full h-px bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
          <div className="relative inline-block">
            <div className="bg-white px-8 py-2 rounded-full transform -rotate-3 shadow-sm">
              <span className="text-gray-800 text-sm font-medium">What I do</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* UX & UI */}
        <div className="text-center px-4 group cursor-pointer">
          <div className="flex justify-center mb-6 transition-transform duration-300 ease-out group-hover:transform group-hover:scale-110">
            <div className="p-4 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-white group-hover:shadow-lg">
              <svg className="w-12 h-12 transition-colors duration-300 group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="7" y1="8" x2="17" y2="8" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="13" y2="16" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-blue-600">UX & UI</h3>
          <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-900">
            Designing interfaces that are intuitive, efficient, and enjoyable to use.
          </p>
        </div>

        {/* Web & Mobile App */}
        {/* <div className="text-center px-4 group cursor-pointer">
          <div className="flex justify-center mb-6 transition-transform duration-300 ease-out group-hover:transform group-hover:scale-110">
            <div className="p-4 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-white group-hover:shadow-lg">
              <svg className="w-12 h-12 transition-colors duration-300 group-hover:text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="10" height="20" rx="2" />
                <line x1="9" y1="18" x2="11" y2="18" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-purple-600">Web & Mobile Applications</h3>
          <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-900">
            Transforming ideas into exceptional web and mobile app experiences.
          </p>
        </div> */}

        {/* Design & Creative */}
        <div className="text-center px-4 group cursor-pointer">
          <div className="flex justify-center mb-6 transition-transform duration-300 ease-out group-hover:transform group-hover:scale-110">
            <div className="p-4 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-white group-hover:shadow-lg">
              <svg className="w-12 h-12 transition-colors duration-300 group-hover:text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-pink-600">Brand Identity</h3>
          <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-900">
          Creating distinctive visual identities that capture your brand&#39;s essence and resonate with your target audience.
          </p>
        </div>

        {/* Development */}
        <div className="text-center px-4 group cursor-pointer">
          <div className="flex justify-center mb-6 transition-transform duration-300 ease-out group-hover:transform group-hover:scale-110">
            <div className="p-4 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-white group-hover:shadow-lg">
              <svg className="w-12 h-12 transition-colors duration-300 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-green-600">Web & Mobile Application Development</h3>
          <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-900">
          Building powerful, scalable applications that deliver seamless experiences across all platforms and devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;