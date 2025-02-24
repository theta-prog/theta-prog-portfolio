const WorksSection = () => {
    return (
        <section id="works" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['MUSIC', 'ART', 'CODING'].map((category, index) => (
                    <a
                        key={category}
                        href={`works/${category.toLowerCase()}`}
                        className={`${
                            index === 0
                                ? 'bg-purple-100 dark:bg-purple-900/30'
                                : index === 1
                                  ? 'bg-rose-100 dark:bg-rose-900/30'
                                  : 'bg-blue-100 dark:bg-blue-900/30'
                        } rounded-2xl overflow-hidden transition-transform hover:scale-105`}
                    >
                        <div className="p-6 space-y-4">
                            <h3 className={`text-2xl font-bold ${index === 0 ? 'text-purple-900 dark:text-purple-100' : index === 1 ? 'text-rose-900 dark:text-rose-100' : 'text-blue-900 dark:text-blue-100'}`}>
                                {category}
                            </h3>
                            <div className={`aspect-video ${index === 0 ? 'bg-purple-200 dark:bg-purple-800' : index === 1 ? 'bg-rose-200 dark:bg-rose-800' : 'bg-blue-200 dark:bg-blue-800'} rounded-lg flex items-center justify-center`}>
                                <span className={`${index === 0 ? 'text-purple-600 dark:text-purple-200' : index === 1 ? 'text-rose-600 dark:text-rose-200' : 'text-blue-600 dark:text-blue-200'}`}>
                                    {category} Project Preview
                                </span>
                            </div>
                            <p className={`${index === 0 ? 'text-purple-800 dark:text-purple-200' : index === 1 ? 'text-rose-800 dark:text-rose-200' : 'text-blue-800 dark:text-blue-200'}`}>
                                Description of your {category.toLowerCase()} works
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default WorksSection;
