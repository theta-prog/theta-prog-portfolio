'use client';
import Header from '../../components/Header/index';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from './translations';

export default function Page() {
    const { language } = useLanguage();
    const t = translations[language];

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

                    {/* Song List */}
                    <section className="space-y-6">
                        {t.songs.map((song, index) => (
                            <div key={index} className="bg-white dark:bg-[#2a2f3a] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center transition-transform hover:scale-[1.01]">
                                {/* Placeholder for artwork or player */}
                                <div className="w-full md:w-64 aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 relative overflow-hidden group">
                                    <span className="group-hover:scale-110 transition-transform duration-300">▶ {t.play}</span>
                                </div>
                                <div className="flex-1 space-y-3 text-center md:text-left">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{song.title}</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">{t.vocal} {song.vocalist}</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{song.description}</p>
                                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span>{song.year}</span>
                                        <span>•</span>
                                        <span>{song.genre}</span>
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
