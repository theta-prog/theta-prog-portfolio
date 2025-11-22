'use client';
import Header from '../../components/Header/index';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from './translations';

export default function Page() {
    const { language } = useLanguage();
    const t = translations[language];

    const techStack = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Processing', 'Python', 'Jenkins'];

    return (
        <div className="w-full min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />
            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="space-y-12">
                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t.subtitle}
                        </p>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.techStack}</h2>
                        <div className="bg-white dark:bg-[#2a2f3a] rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Project List */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.projectsTitle}</h2>
                        {t.projects.map((project, index) => (
                            <div key={index} className="bg-white dark:bg-[#2a2f3a] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center transition-transform hover:scale-[1.01]">
                                {/* Placeholder for screenshot */}
                                <div className="w-full md:w-64 aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 relative overflow-hidden group">
                                    <span className="group-hover:scale-110 transition-transform duration-300">{t.viewDetails}</span>
                                </div>
                                <div className="flex-1 space-y-3 text-center md:text-left">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{project.tech}</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
}
