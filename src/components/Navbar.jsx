/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Linkedin, MessageCircle, Instagram } from 'lucide-react';

const Navbar = () => {
    const [copyText, setCopyText] = useState('Email');
    const email = 'kawsarvy.design@gmail.com';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopyText('Copied!');
            setTimeout(() => setCopyText('Email'), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="navbar">
            <nav className="w-full px-4 py-2 text-xs pt-8 md:pt-10 bg-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Left side - Email and CV */}
                    <div className="flex items-center gap-2">
                        <p className='text-xs hidden md:block'>eayeni185@gmail.com</p>
                        <button
                            onClick={handleCopy}
                            className="font-bold bg-black text-white px-8 py-3 border md:px-10 md:py-4 rounded-full transition-colors"
                        >
                            {copyText}
                        </button>
                        <button className="font-bold bg-white px-8 py-3 border md:px-10 md:py-4 rounded-full hover:underline transition-colors">
                            CV
                        </button>
                    </div>

                    {/* Right side - Social icons */}
                    <div className="flex items-center gap-4">
                        <a href="https://linkedin.com/in/emmanuel-ayeni01" className="text-gray-600 hover:text-gray-900">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://wa.me/message/J72ZSVAOHGWSM1" className="text-gray-600 hover:text-gray-900">
                            <MessageCircle size={20} />
                            <span className="sr-only">Dribbble</span>
                        </a>
                        <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                            <Instagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;