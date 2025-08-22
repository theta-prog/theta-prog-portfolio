'use client';

import { useLanguage } from '../contexts/LanguageContext';

// 翻訳データを直接コンポーネント内で定義
const translations = {
  ja: {
    title: 'About Me',
    subtitle: 'クリエイティブな表現と技術の融合を追求する、多分野にわたるクリエイター',
    profile: 'プロフィール',
    background: 'バックグラウンド',
    backgroundText: '音楽、アート、プログラミングの境界を越えて活動するクリエイター。技術と芸術の融合により、革新的な表現方法を模索し続けています。デジタル技術を活用した新しい創作手法の開発に情熱を注いでいます。',
    approach: 'アプローチ',
    approachText: '異なる分野の知識や技術を組み合わせることで、従来にない作品や体験を創造することを目指しています。常に新しい技術や表現手法に興味を持ち、実験的なプロジェクトに取り組んでいます。',
    skillsTitle: 'スキル・専門分野',
    musicProduction: '音楽制作',
    musicProductionDesc: '電子音楽、アンビエント、実験音楽の制作。DAWを使用した楽曲制作とサウンドデザイン。',
    digitalArt: 'デジタルアート',
    digitalArtDesc: 'ジェネラティブアート、デジタルペインティング、3Dモデリング、インタラクティブアート。',
    programming: 'プログラミング',
    programmingDesc: 'Web開発、クリエイティブコーディング、アルゴリズム作曲、インタラクティブメディア開発。',
    philosophy: '創作哲学',
    philosophyQuote: '「技術は表現の手段であり、創造性は技術を超越する。異なる分野の境界を曖昧にし、新しい可能性を探求することで、予想を超えた美しさや感動を生み出すことができる。」'
  },
  en: {
    title: 'About Me',
    subtitle: 'A multidisciplinary creator pursuing the fusion of creative expression and technology',
    profile: 'Profile',
    background: 'Background',
    backgroundText: 'A creator working across the boundaries of music, art, and programming. Through the fusion of technology and art, I continuously explore innovative expression methods. I am passionate about developing new creative techniques utilizing digital technology.',
    approach: 'Approach',
    approachText: 'I aim to create unprecedented works and experiences by combining knowledge and techniques from different fields. I am always interested in new technologies and expression methods, working on experimental projects.',
    skillsTitle: 'Skills & Expertise',
    musicProduction: 'Music Production',
    musicProductionDesc: 'Electronic music, ambient, and experimental music production. Music creation and sound design using DAWs.',
    digitalArt: 'Digital Art',
    digitalArtDesc: 'Generative art, digital painting, 3D modeling, and interactive art.',
    programming: 'Programming',
    programmingDesc: 'Web development, creative coding, algorithmic composition, and interactive media development.',
    philosophy: 'Creative Philosophy',
    philosophyQuote: '"Technology is a means of expression, and creativity transcends technology. By blurring the boundaries between different fields and exploring new possibilities, we can create beauty and emotion that exceed expectations."'
  }
};

const AboutSection = () => {
    console.log('🚀 AboutSection: Component rendering...');
    
    const { language } = useLanguage();
    console.log('📍 AboutSection: Current language =', language);
    
    const t = translations[language];
    console.log('📝 AboutSection: Translation object =', t);

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

            {/* Bio Section */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 space-y-6">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                    {t.profile}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                            {t.background}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t.backgroundText}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                            {t.approach}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t.approachText}
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
                    {t.skillsTitle}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l6-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm10-9c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {t.musicProduction}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t.musicProductionDesc}
                        </p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {t.digitalArt}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t.digitalArtDesc}
                        </p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {t.programming}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t.programmingDesc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {t.philosophy}
                </h2>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 text-center italic leading-relaxed">
                    {t.philosophyQuote}
                </blockquote>
            </section>
        </div>
    );
};

export default AboutSection;
