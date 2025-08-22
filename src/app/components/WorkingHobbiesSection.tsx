'use client';

import { useLanguage } from '../contexts/LanguageContext';

// 翻訳データを直接コンポーネント内で定義
const translations = {
  ja: {
    title: 'Hobby',
    subtitle: '創造性と技術探求の源泉となる多様な趣味の世界',
    categories: {
      music: '音楽制作',
      art: 'デジタルアート',
      tech: '技術探究',
      others: 'その他の趣味'
    },
    hobbies: [
      {
        category: 'music',
        title: '電子音楽制作',
        description: 'アンビエント、ドローン、実験音楽の制作。シンセサイザーとソフトウェアを使用した音響実験。',
        tags: ['Ambient', 'Drone', 'Experimental', 'Synthesizer']
      },
      {
        category: 'music',
        title: 'フィールドレコーディング',
        description: '自然音や都市音の収録と加工。環境音をベースとした楽曲制作。',
        tags: ['Field Recording', 'Sound Design', 'Nature Sounds']
      },
      {
        category: 'art',
        title: 'ジェネラティブアート',
        description: 'アルゴリズムを使用した自動生成アート。数学的パターンと美的表現の融合。',
        tags: ['Generative', 'Algorithm', 'Math Art', 'Procedural']
      },
      {
        category: 'art',
        title: 'デジタルペインティング',
        description: 'タブレットを使用したデジタル絵画。抽象的な表現とカラーエクスペリメント。',
        tags: ['Digital Painting', 'Abstract', 'Color Theory']
      },
      {
        category: 'tech',
        title: 'クリエイティブコーディング',
        description: 'Processing、p5.js、openFrameworksを使用したインタラクティブアート開発。',
        tags: ['Processing', 'p5.js', 'openFrameworks', 'Interactive']
      },
      {
        category: 'tech',
        title: 'ハードウェアハッキング',
        description: 'Arduino、Raspberry Piを使用した電子工作とセンサー実験。',
        tags: ['Arduino', 'Raspberry Pi', 'Electronics', 'IoT']
      },
      {
        category: 'others',
        title: 'アナログ写真',
        description: 'フィルムカメラを使用した写真撮影と暗室現像。',
        tags: ['Film Photography', 'Darkroom', 'Analog']
      },
      {
        category: 'others',
        title: '植物栽培',
        description: '観葉植物とハーブの栽培。植物の成長過程の観察と記録。',
        tags: ['Plants', 'Gardening', 'Growth Tracking']
      }
    ]
  },
  en: {
    title: 'Hobby',
    subtitle: 'A diverse world of hobbies that serve as sources of creativity and technological exploration',
    categories: {
      music: 'Music Production',
      art: 'Digital Art',
      tech: 'Technology Exploration',
      others: 'Other Hobbies'
    },
    hobbies: [
      {
        category: 'music',
        title: 'Electronic Music Production',
        description: 'Creating ambient, drone, and experimental music. Acoustic experiments using synthesizers and software.',
        tags: ['Ambient', 'Drone', 'Experimental', 'Synthesizer']
      },
      {
        category: 'music',
        title: 'Field Recording',
        description: 'Recording and processing natural and urban sounds. Creating music based on environmental sounds.',
        tags: ['Field Recording', 'Sound Design', 'Nature Sounds']
      },
      {
        category: 'art',
        title: 'Generative Art',
        description: 'Algorithm-based auto-generated art. Fusion of mathematical patterns and aesthetic expression.',
        tags: ['Generative', 'Algorithm', 'Math Art', 'Procedural']
      },
      {
        category: 'art',
        title: 'Digital Painting',
        description: 'Digital painting using tablets. Abstract expression and color experimentation.',
        tags: ['Digital Painting', 'Abstract', 'Color Theory']
      },
      {
        category: 'tech',
        title: 'Creative Coding',
        description: 'Interactive art development using Processing, p5.js, and openFrameworks.',
        tags: ['Processing', 'p5.js', 'openFrameworks', 'Interactive']
      },
      {
        category: 'tech',
        title: 'Hardware Hacking',
        description: 'Electronics projects and sensor experiments using Arduino and Raspberry Pi.',
        tags: ['Arduino', 'Raspberry Pi', 'Electronics', 'IoT']
      },
      {
        category: 'others',
        title: 'Analog Photography',
        description: 'Film camera photography and darkroom development.',
        tags: ['Film Photography', 'Darkroom', 'Analog']
      },
      {
        category: 'others',
        title: 'Plant Cultivation',
        description: 'Cultivating houseplants and herbs. Observing and documenting plant growth processes.',
        tags: ['Plants', 'Gardening', 'Growth Tracking']
      }
    ]
  }
};

const WorkingHobbiesSection = () => {
    console.log('🎨 WorkingHobbiesSection: Component rendering...');
    
    const { language } = useLanguage();
    console.log('📍 WorkingHobbiesSection: Current language =', language);
    
    const t = translations[language];
    console.log('📝 WorkingHobbiesSection: Translation object =', t);

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

export default WorkingHobbiesSection;
