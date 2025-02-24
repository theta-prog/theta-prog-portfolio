const HobbiesSection = () => {
    return (
        <section id="hobbies" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Hobbies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    ['DRUM', '🥁'],
                    ['CAMERA', '📸'],
                    ['BOOK', '📚'],
                    ['CAMP', '⛺️'],
                ].map(([hobby, emoji]) => (
                    <a
                        key={hobby}
                        href={`hobbies#${hobby.toLowerCase()}`}
                        className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden transition-transform hover:scale-105"
                    >
                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{hobby}</h3>
                            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <span className="text-4xl">{emoji}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                {hobby === 'DRUM' ? 'My journey with drums' : hobby === 'CAMERA' ? 'Photography passion' : hobby === 'BOOK' ? 'My reading list' : 'Outdoor adventures'}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default HobbiesSection;
