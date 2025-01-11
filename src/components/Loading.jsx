/* eslint-disable no-unused-vars */
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative flex items-center justify-center w-20 h-20">
        <div className="absolute border-4 border-t-4 border-gray-300 border-t-gray-600 rounded-full w-full h-full animate-spin"></div>
        {/* <div className="absolute text-blue-600 text-xl font-semibold">Loading...</div> */}
      </div>
    </div>
  );
};

export default Loading;
