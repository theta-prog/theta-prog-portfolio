import Header from '../../components/Header/index';

export default function Page() {
    const projects = [
        {
            title: "SoundScape Generator",
            category: "音楽・オーディオ",
            description: "リアルタイムで環境音からアンビエントミュージックを生成するWebアプリケーション。機械学習を使用して音響特徴を分析し、harmonicなサウンドスケープを自動生成します。",
            tech: ["React", "Web Audio API", "TensorFlow.js", "Node.js"],
            features: ["リアルタイム音響解析", "AI生成音楽", "インタラクティブUI", "音源エクスポート"],
            status: "進行中",
            github: "#",
            demo: "#"
        },
        {
            title: "Visual Code Editor",
            category: "開発ツール",
            description: "プログラミング初心者向けのビジュアルコードエディター。ブロックベースの視覚的プログラミングから実際のコードを生成し、段階的な学習をサポートします。",
            tech: ["Vue.js", "Monaco Editor", "Electron", "TypeScript"],
            features: ["ドラッグ&ドロップ", "リアルタイムコード変換", "学習プログレス", "多言語対応"],
            status: "完成",
            github: "#",
            demo: "#"
        },
        {
            title: "Data Art Dashboard",
            category: "データビジュアライゼーション",
            description: "個人データをアート作品として視覚化するダッシュボード。日常の活動データから美しいパターンやストーリーを発見し、インタラクティブなビジュアルを生成します。",
            tech: ["D3.js", "React", "Python", "FastAPI"],
            features: ["パーソナルデータ統合", "アート生成", "カスタマイズ可能", "データエクスポート"],
            status: "ベータ版",
            github: "#",
            demo: "#"
        },
        {
            title: "AR Music Experience",
            category: "AR/VR",
            description: "拡張現実技術を使用した音楽体験アプリ。空間に浮かぶ楽器やエフェクトをジェスチャーで操作し、新しい形の音楽演奏とパフォーマンスを可能にします。",
            tech: ["React Native", "ARCore", "WebRTC", "Three.js"],
            features: ["ジェスチャー認識", "空間音響", "マルチプレイヤー", "録画・共有"],
            status: "プロトタイプ",
            github: "#",
            demo: "#"
        },
        {
            title: "Smart Garden Monitor",
            category: "IoT",
            description: "植物の成長を自動監視・最適化するIoTシステム。センサーデータをAIで分析し、植物の健康状態を予測して最適な環境を自動調整します。",
            tech: ["Raspberry Pi", "Arduino", "Next.js", "PostgreSQL"],
            features: ["多センサー監視", "AI予測", "自動水やり", "成長記録"],
            status: "完成",
            github: "#",
            demo: "#"
        },
        {
            title: "Collaborative Art Platform",
            category: "ソーシャル",
            description: "複数のアーティストがリアルタイムで協力して作品を制作できるプラットフォーム。バージョン管理、リアルタイム同期、作品の歴史追跡機能を備えています。",
            tech: ["Socket.io", "Canvas API", "MongoDB", "Express.js"],
            features: ["リアルタイム共同編集", "バージョン管理", "コメント機能", "作品ギャラリー"],
            status: "進行中",
            github: "#",
            demo: "#"
        }
    ];

    const skills = [
        {
            category: "フロントエンド",
            items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"]
        },
        {
            category: "バックエンド",
            items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            category: "モバイル・デスクトップ",
            items: ["React Native", "Electron", "Flutter", "Progressive Web Apps"]
        },
        {
            category: "AI・機械学習",
            items: ["TensorFlow", "PyTorch", "OpenCV", "Natural Language Processing"]
        },
        {
            category: "クリエイティブ",
            items: ["Web Audio API", "Canvas API", "WebGL", "P5.js", "Processing"]
        },
        {
            category: "IoT・ハードウェア",
            items: ["Arduino", "Raspberry Pi", "ESP32", "Sensors", "MQTT"]
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "完成":
                return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
            case "進行中":
                return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
            case "ベータ版":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
            case "プロトタイプ":
                return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
            default:
                return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300";
        }
    };

    return (
        <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200">
            <Header />
            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="space-y-16">
                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                            Coding Portfolio
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            創造性と技術を融合させたプログラミングプロジェクト。
                            アート、音楽、データビジュアライゼーション、IoTなど、
                            多分野にわたる革新的なアプリケーションを開発しています。
                        </p>
                    </section>

                    {/* Featured Project */}
                    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                                    Featured Project
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                    {projects[0].title}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {projects[0].description}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {projects[0].tech.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a 
                                            href={projects[0].github}
                                            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                        <a 
                                            href={projects[0].demo}
                                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🎵</div>
                                        <p className="text-lg font-medium">SoundScape Generator</p>
                                        <p className="text-sm opacity-75">AI-Powered Music App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Grid */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            プロジェクト一覧
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.slice(1).map((project, index) => (
                                <div 
                                    key={index}
                                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    {project.title}
                                                </h3>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                    主要機能:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {project.features.map((feature, featureIndex) => (
                                                        <li 
                                                            key={featureIndex}
                                                            className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                                                        >
                                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex space-x-3 pt-2">
                                                <a 
                                                    href={project.github}
                                                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    GitHub
                                                </a>
                                                <a 
                                                    href={project.demo}
                                                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            技術スタック
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skillCategory, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        {skillCategory.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillCategory.items.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Philosophy */}
                    <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            開発哲学
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                私のプログラミングアプローチは、技術的な革新と創造的な表現の境界を曖昧にすることです。
                                単なる機能的なアプリケーションではなく、ユーザーに新しい体験や感動を提供するツールを開発することを目指しています。
                            </p>
                            <p>
                                特に、AI、音楽、視覚芸術、IoTなどの分野を組み合わせることで、
                                従来にない価値や美しさを創造することに情熱を注いでいます。
                                技術は表現の手段であり、最終的には人間の感性や創造性を拡張するものだと考えています。
                            </p>
                            <p>
                                また、オープンソースコミュニティへの貢献と、他のクリエイターとのコラボレーションを重視し、
                                知識や技術の共有を通じて、より豊かなデジタルクリエイティブエコシステムの構築に貢献したいと思っています。
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
