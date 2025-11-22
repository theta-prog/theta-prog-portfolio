'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './WorksSection/translations';

const WorksSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="works" className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h2>
            
            {/* Music Section */}
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{t.music}</h3>
                    <Link href="/works/music" className="text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                        {t.viewAll}
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dummy YouTube Embeds */}
                    {[1, 2].map((item) => (
                        <div key={item} className="bg-white dark:bg-[#2a2f3a] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-transform hover:scale-[1.02]">
                            <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                    {t.youtubePreview} {item}
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t.originalSong} {item}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{t.songDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Coding Section */}
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t.coding}</h3>
                    <Link href="/works/coding" className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                        {t.viewAll}
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dummy App Previews */}
                    {[1, 2].map((item) => (
                        <div key={item} className="bg-white dark:bg-[#2a2f3a] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-transform hover:scale-[1.02]">
                            <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                    {t.appScreenshot} {item}
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t.project} {item}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{t.techStackLabel}: React, Next.js, TypeScript</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksSection;
