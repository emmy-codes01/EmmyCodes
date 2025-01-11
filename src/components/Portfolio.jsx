import React, { useState, useEffect } from 'react';
import Loading from './Loading.jsx'; // Ensure this component is properly defined and exported

const PortfolioPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 3 seconds for demonstration

        return () => clearTimeout(timer); // Cleanup the timeout
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
                    <div className="text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-24 h-24 text-gray-500 mx-auto mb-6"
                        >
                            <path
                                d="M19.75 9.5c0-1.72-1.25-3.17-2.93-3.62l-.55-1.66c-.16-.48-.62-.83-1.14-.95l-3.59-.63a1.25 1.25 0 0 0-1.46 1.46l.63 3.59c.12.52.47.98.95 1.14l1.66.55c.45 1.68-.19 3.62-1.88 4.08l-1.09.41c-.75.28-1.32.89-1.54 1.68-.19.62-.16 1.28.1 1.83.28.56.74.93 1.27 1.07l3.59.63c.53.09.97-.14 1.14-.62l.63-3.59c.12-.52-.17-1.07-.62-1.21l-1.09-.41c-1.04-.38-1.57-1.57-1.31-2.65l.21-.84c.27-.87-.22-1.8-1.05-2.07l-.93-.29c-.28-.08-.49-.27-.67-.5l-.62-.82c-.16-.21-.23-.48-.22-.73.01-.47-.39-.85-.85-.85s-.86.39-.86.86c-.01.47.36.84.83.84.25 0 .48-.1.68-.28l.68.89c.23.31.25.73.08 1.06l-1.01 1.65a.75.75 0 0 0-.1.42c-.17.18-.39.28-.62.28-.75 0-1.47-.28-2.04-.79a2.66 2.66 0 0 0-1.56-.45c-.71.21-1.32.73-1.74 1.33-.4.57-.57 1.26-.49 1.97z"
                                fill="currentColor"
                            />
                        </svg>
                        <h2 className="text-3xl font-semibold mb-4">
                            Oops, I’m currently working on this page!
                        </h2>
                        <p className="text- mb-6 ">
                            Sorry for the inconvenience! I’m in the process of improving this page. Please check back later.
                        </p>
                        <center>
                            <a href="/">
                                <button className="hover:underline flex justify-center  items-center bg-black text-xs text-white px-8 py-5 md:px-8 md:py-5 rounded-full transition-all">
                                    <span className="font-medium">Go back home</span>
                                </button>
                            </a>
                        </center>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioPage;
