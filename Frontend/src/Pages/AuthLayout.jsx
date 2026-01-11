// AuthLayout.jsx
import React from 'react';
import img from '../Assets/gdgLogo.jpg';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)' }}>
            {/* Animated Droplets */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden>
                {/* top row */}
                <div className="droplet d-1"></div>
                <div className="droplet d-2"></div>
                <div className="droplet d-3"></div>
                <div className="droplet d-4"></div>

                {/* left column */}
                <div className="droplet d-5"></div>
                <div className="droplet d-6"></div>
                <div className="droplet d-7"></div>

                {/* right column */}
                <div className="droplet d-8"></div>
                <div className="droplet d-9"></div>
                <div className="droplet d-10"></div>

                {/* bottom row */}
                <div className="droplet d-11"></div>
                <div className="droplet d-12"></div>
                <div className="droplet d-13"></div>

                {/* scattered center */}
                <div className="droplet d-14"></div>
                <div className="droplet d-15"></div>
                <div className="droplet d-16"></div>
                <div className="droplet d-17"></div>
                <div className="droplet d-18"></div>

                {/* additional larger & decorative droplets */}
                <div className="droplet d-19"></div>
                <div className="droplet d-20"></div>
                <div className="droplet d-21"></div>
                <div className="droplet d-22"></div>
                <div className="droplet d-23"></div>
                <div className="droplet d-24"></div>
                <div className="droplet d-25"></div>
                <div className="droplet d-26"></div>
            </div>
            <div className="relative w-full max-w-6xl">
                {/* Desktop Layout */}
                <div className="hidden lg:flex rounded-3xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)', border: '1px solid rgba(66,133,244,0.2)' }}>
                    {/* Left Side - Form */}
                    <div className="w-1/2 flex items-center justify-center p-12">
                        {children}
                    </div>

                    {/* Right Side - Artwork */}
                    <div className="w-1/2 relative overflow-hidden">
                        <img
                            src={img}
                            alt="Logo"
                            className="w-1/2 h-1/2 mx-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent text-xl text-black font-bold text-center flex flex-col justify-center items-center">
                            <h1>Google Developers Group</h1>
                            <h2>Quantum University</h2>
                        </div>
                        {/* <div className="text-xl text-black font-bold text-center">
                        </div> */}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="rounded-3xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)', border: '1px solid rgba(66,133,244,0.2)' }}>
                        
                        <div className="h-56 relative overflow-hidden">
                            <img
                                src={img}
                                alt="Logo"
                                className="w-32 h-32 mx-auto object-contain mt-4"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div> */}
                            <div className="text-xl text-black font-bold text-center">
                                <h1>Google Developers Group</h1>
                                <h2>Quantum University</h2>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="px-6 pb-6 mt-8 relative z-10">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

