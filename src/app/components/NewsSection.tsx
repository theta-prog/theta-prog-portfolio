'use client';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './NewsSection/translations';

const NewsSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const newsItems = t.newsItems;
    return (
        <section className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t.title}</h2>
            <div className="bg-white dark:bg-[#2a2f3a] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <ul className="space-y-4">
                    {newsItems.map((item, index) => (
                        <li key={index} className="flex flex-col md:flex-row md:items-center border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                            <span className="text-sm text-gray-500 dark:text-gray-400 w-32 font-mono">{item.date}</span>
                            <span className="text-gray-800 dark:text-gray-200">{item.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default NewsSection;
