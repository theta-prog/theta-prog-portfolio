import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const backgrounds = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500'];
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [backgrounds.length]);

    return (
        <section className="h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden">
            {backgrounds.map((bg, index) => (
                <div
                    key={bg}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentBg ? 'opacity-100' : 'opacity-0'
                    } ${bg}`}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 md:p-8 bg-black/30 backdrop-blur-sm rounded-lg max-w-2xl mx-4">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4 tracking-tight text-white">
                        THETA LIBRARY
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-100">
                        This is a Portfolio site of Theta
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
