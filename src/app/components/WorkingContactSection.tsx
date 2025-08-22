'use client';

import { useLanguage } from '../contexts/LanguageContext';

// 翻訳データを直接コンポーネント内で定義
const translations = {
  ja: {
    title: 'Contact',
    subtitle: '一緒に創造的なプロジェクトを始めませんか？',
    description: '新しいアイデアや協力の機会について、いつでもお気軽にご連絡ください。音楽制作、アート作品、技術プロジェクトなど、様々な分野での協力を歓迎しています。',
    getInTouch: 'お気軽にご連絡ください',
    contactMethods: {
      email: 'メール',
      social: 'ソーシャルメディア',
      collaboration: 'コラボレーション'
    },
    methods: [
      {
        type: 'email',
        title: 'Email',
        value: 'hello@theta-library.com',
        description: 'プロジェクトのご相談や質問はメールでお気軽にどうぞ。',
        icon: 'email'
      },
      {
        type: 'social',
        title: 'GitHub',
        value: '@theta-library',
        description: 'コードやオープンソースプロジェクトをご覧いただけます。',
        icon: 'github'
      },
      {
        type: 'social',
        title: 'SoundCloud',
        value: '@theta-sounds',
        description: '最新の音楽作品やサウンドエクスペリメントをお聞きいただけます。',
        icon: 'soundcloud'
      },
      {
        type: 'collaboration',
        title: 'Project Collaboration',
        value: 'Let\'s create together',
        description: 'クリエイティブなプロジェクトや技術的な挑戦に興味がある方、一緒に何かを作りませんか？',
        icon: 'collaboration'
      }
    ],
    interests: {
      title: '興味のある分野',
      items: [
        'インタラクティブメディアアート',
        'アルゴリズム作曲',
        'ジェネラティブビジュアル',
        'IoTとセンサー技術',
        'VR/AR体験デザイン',
        'オープンソースプロジェクト'
      ]
    },
    availability: {
      title: '対応可能なプロジェクト',
      description: 'フリーランスとして、以下のようなプロジェクトに参加可能です：',
      types: [
        'Web開発・アプリケーション開発',
        '音楽制作・サウンドデザイン',
        'インタラクティブアート制作',
        'プロトタイプ開発',
        '技術コンサルティング',
        'ワークショップ・教育プログラム'
      ]
    }
  },
  en: {
    title: 'Contact',
    subtitle: 'Let\'s start a creative project together?',
    description: 'Feel free to reach out about new ideas or collaboration opportunities. I welcome collaboration in various fields including music production, art projects, and technical projects.',
    getInTouch: 'Get in Touch',
    contactMethods: {
      email: 'Email',
      social: 'Social Media',
      collaboration: 'Collaboration'
    },
    methods: [
      {
        type: 'email',
        title: 'Email',
        value: 'hello@theta-library.com',
        description: 'Feel free to email me for project inquiries or questions.',
        icon: 'email'
      },
      {
        type: 'social',
        title: 'GitHub',
        value: '@theta-library',
        description: 'Check out my code and open source projects.',
        icon: 'github'
      },
      {
        type: 'social',
        title: 'SoundCloud',
        value: '@theta-sounds',
        description: 'Listen to my latest music works and sound experiments.',
        icon: 'soundcloud'
      },
      {
        type: 'collaboration',
        title: 'Project Collaboration',
        value: 'Let\'s create together',
        description: 'Interested in creative projects or technical challenges? Let\'s create something together.',
        icon: 'collaboration'
      }
    ],
    interests: {
      title: 'Areas of Interest',
      items: [
        'Interactive Media Art',
        'Algorithmic Composition',
        'Generative Visuals',
        'IoT & Sensor Technology',
        'VR/AR Experience Design',
        'Open Source Projects'
      ]
    },
    availability: {
      title: 'Available Project Types',
      description: 'As a freelancer, I can participate in projects such as:',
      types: [
        'Web Development & Application Development',
        'Music Production & Sound Design',
        'Interactive Art Creation',
        'Prototype Development',
        'Technical Consulting',
        'Workshops & Educational Programs'
      ]
    }
  }
};

const WorkingContactSection = () => {
    console.log('📧 WorkingContactSection: Component rendering...');
    
    const { language } = useLanguage();
    console.log('📍 WorkingContactSection: Current language =', language);
    
    const t = translations[language];
    console.log('📝 WorkingContactSection: Translation object =', t);

    const getIcon = (iconType: string) => {
        const icons = {
            email: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.95L18 8M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
            ),
            github: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            soundcloud: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.707l-3.536-3.536L7.05 10.586 12 15.536l4.95-4.95-1.414-1.415L12 12.707z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
            ),
            collaboration: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        };
        return icons[iconType as keyof typeof icons] || icons.email;
    };

    const getMethodColor = (type: string) => {
        const colors = {
            email: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
            social: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
            collaboration: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
        };
        return colors[type as keyof typeof colors] || colors.email;
    };

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
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                    {t.description}
                </p>
            </section>

            {/* Contact Methods */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
                    {t.getInTouch}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {t.methods.map((method, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className={`p-3 rounded-lg ${getMethodColor(method.type)}`}>
                                    {getIcon(method.icon)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
                                        {method.value}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {method.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interests Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {t.interests.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.interests.items.map((item, index) => (
                        <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Availability Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
                    {t.availability.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
                    {t.availability.description}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.availability.types.map((type, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <span className="text-gray-700 dark:text-gray-300">{type}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WorkingContactSection;
