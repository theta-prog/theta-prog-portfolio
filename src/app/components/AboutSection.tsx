'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './AboutSection/translations';
import { FaYoutube, FaTiktok, FaGithub, FaMusic } from 'react-icons/fa';
import { SiNiconico } from 'react-icons/si';

const AboutSection = () => {
    
    const { language } = useLanguage();
    
    const t = translations[language];

    const snsLinks = [
        { name: 'YouTube', url: 'https://youtube.com', icon: FaYoutube },
        { name: 'Niconico', url: 'https://www.nicovideo.jp', icon: SiNiconico },
        { name: 'TikTok', url: 'https://www.tiktok.com', icon: FaTiktok },
        { name: 'Piapro', url: 'https://piapro.jp', icon: FaMusic },
        { name: 'GitHub', url: 'https://github.com', icon: FaGithub },
    ];

    return (
        <section id="about" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.title}
            </h2>

            <div className="bg-white dark:bg-[#2a2f3a] rounded-xl p-4 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Profile Image Placeholder */}
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0 flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden mx-auto md:mx-0">
                        <span className="text-sm">Profile Image</span>
                    </div>

                    <div className="space-y-6 flex-1">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {t.subtitle}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                {t.backgroundText}
                            </p>
                        </div>

                        {/* SNS Links */}
                        <div className="flex flex-wrap gap-4">
                            {snsLinks.map((sns) => (
                                <a
                                    key={sns.name}
                                    href={sns.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors text-sm font-medium"
                                >
                                    <sns.icon className="text-lg" />
                                    <span>{sns.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
