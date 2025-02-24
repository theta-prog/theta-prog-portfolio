const AboutSection = () => {
    return (
        <section id="about" className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 max-w-[300px] mx-auto">
                        <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                            Profile Photo
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Name</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            I am a passionate developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional user interfaces.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">React</span>
                            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">Next.js</span>
                            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
