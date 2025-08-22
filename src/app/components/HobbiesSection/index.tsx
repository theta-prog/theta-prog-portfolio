'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { ja } from './translations/ja';
import { en } from './translations/en';

// 翻訳オブジェクト
const hobbiesTranslations = {
    ja,
    en
};

const HobbiesSection = () => {
    const { language } = useLanguage();
    const t = hobbiesTranslations[language];
    
    console.log('🚀 HobbiesSection: Component rendering...');
    console.log('📍 HobbiesSection: Current language =', language);
    console.log('📝 HobbiesSection: Translation object =', t);

    if (!t) {
        console.error('❌ HobbiesSection: Translation object is undefined!');
        return <div>Translation Error</div>;
    }

    return (
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

            {/* Hobbies Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.hobbies.map((hobby, index) => (
                    <div 
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800"
                    >
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-3">{hobby.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {hobby.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {hobby.description}
                        </p>
                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                {t.relatedActivities}
                            </h4>
                            <ul className="space-y-1">
                                {hobby.details.map((detail, detailIndex) => (
                                    <li 
                                        key={detailIndex}
                                        className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

            {/* Philosophy Section */}
            <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {t.creativityTitle}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                            {t.interdisciplinary}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t.interdisciplinaryText}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                            {t.exploration}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t.explorationText}
                        </p>
                    </div>
                </div>
            </section>

            {/* Current Projects */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
                    {t.currentProjects}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                            🌱 {t.plantProject}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t.plantProjectDesc}
                        </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                            🎨 {t.urbanArt}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t.urbanArtDesc}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HobbiesSection;
