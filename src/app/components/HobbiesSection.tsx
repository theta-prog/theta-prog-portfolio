'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './HobbiesSection/translations';

const HobbiesSection = () => {
    console.log('🎨 HobbiesSection: Component rendering...');
    
    const { language } = useLanguage();
    console.log('📍 HobbiesSection: Current language =', language);
    
    const t = translations[language];
    console.log('📝 HobbiesSection: Translation object =', t);

    const getCategoryColor = (category: string) => {
        const colors = {
            music: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
            art: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
            tech: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
            others: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
        };
        return colors[category as keyof typeof colors] || colors.others;
    };

    const groupedHobbies = t.hobbies.reduce((acc, hobby) => {
        if (!acc[hobby.category]) {
            acc[hobby.category] = [];
        }
        acc[hobby.category].push(hobby);
        return acc;
    }, {} as Record<string, typeof t.hobbies>);

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    {t.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </section>

            {/* Hobbies Grid */}
            <section className="space-y-12">
                {Object.entries(groupedHobbies).map(([category, hobbies]) => (
                    <div key={category} className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                                {t.categories[category as keyof typeof t.categories]}
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {hobbies.map((hobby, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        {hobby.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {hobby.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {hobby.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Philosophy Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {language === 'ja' ? '趣味の哲学' : 'Hobby Philosophy'}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
          {language === 'ja' 
            ? '「趣味は創造性の源泉であり、異なる分野の探求が新しいアイデアとインスピレーションを生み出す。技術と芸術の境界を越えた実験こそが、予想を超えた発見をもたらす。」'
            : '"Hobbies are the source of creativity, and exploring different fields generates new ideas and inspiration. Experiments that transcend the boundaries of technology and art bring discoveries beyond expectations."'
          }
        </p>
            </section>
        </div>
    );
};

export default HobbiesSection;
