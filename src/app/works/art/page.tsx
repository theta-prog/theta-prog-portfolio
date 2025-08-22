import Header from '../../components/Header/index';

export default function Page() {
    const artworks = [
        {
            title: "Digital Waves",
            year: "2024",
            medium: "ジェネラティブアート",
            description: "音波をモチーフにした抽象的なデジタルペインティング。リアルタイムで生成される波形パターンが無限に変化し続けます。",
            tech: ["Processing", "GLSL", "リアルタイム生成"],
            image: "/images/placeholder-art1.jpg"
        },
        {
            title: "Urban Rhythms",
            year: "2024",
            medium: "データビジュアライゼーション",
            description: "都市の交通データを視覚化した動的アート作品。時間の経過とともに色彩と形状が変化し、都市の鼓動を表現しています。",
            tech: ["D3.js", "Canvas API", "リアルタイムデータ"],
            image: "/images/placeholder-art2.jpg"
        },
        {
            title: "Fractal Gardens",
            year: "2023",
            medium: "3Dジェネラティブアート",
            description: "自然界のフラクタル構造からインスピレーションを得た3D作品群。数学的美しさと有機的な形状の融合を探求。",
            tech: ["Three.js", "WebGL", "フラクタルアルゴリズム"],
            image: "/images/placeholder-art3.jpg"
        },
        {
            title: "Sound Sculptures",
            year: "2023",
            medium: "インタラクティブアート",
            description: "音に反応して形状が変化する彫刻作品。観客の声や周囲の音響環境に応じて、リアルタイムで形を変えます。",
            tech: ["Arduino", "音響センサー", "モーター制御"],
            image: "/images/placeholder-art4.jpg"
        },
        {
            title: "Light Patterns",
            year: "2023",
            medium: "LED インスタレーション",
            description: "プログラム制御されたLEDマトリックスによる光のパターン作品。時間、天候、人の動きに応じて光の振る舞いが変化します。",
            tech: ["ESP32", "FastLED", "センサー統合"],
            image: "/images/placeholder-art5.jpg"
        },
        {
            title: "Organic Algorithms",
            year: "2022",
            medium: "ジェネラティブアート",
            description: "生物の成長パターンをアルゴリズムで再現した作品シリーズ。細胞分裂や植物の成長を数学的に表現しています。",
            tech: ["p5.js", "L-system", "遺伝的アルゴリズム"],
            image: "/images/placeholder-art6.jpg"
        }
    ];

    const exhibitions = [
        {
            title: "Digital Nature",
            venue: "アートギャラリー XYZ",
            year: "2024",
            type: "グループ展"
        },
        {
            title: "Tech × Art Festival",
            venue: "オンライン展示",
            year: "2023",
            type: "オンライン展示"
        },
        {
            title: "Generative Expressions",
            venue: "カルチャーセンター ABC",
            year: "2023",
            type: "個展"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200">
            <Header />
            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="space-y-16">
                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                            Art Gallery
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            テクノロジーと創造性を融合させたデジタルアート作品群。
                            プログラミング、アルゴリズム、センサー技術を駆使して、新しい美的体験を探求しています。
                        </p>
                    </section>

                    {/* Featured Work */}
                    <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                                    Featured Work
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                    {artworks[0].title}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {artworks[0].description}
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                                        <span className="font-medium">制作年:</span>
                                        <span>{artworks[0].year}</span>
                                    </div>
                                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                                        <span className="font-medium">メディウム:</span>
                                        <span>{artworks[0].medium}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center space-x-2">
                                        <span className="font-medium text-gray-600 dark:text-gray-400">技術:</span>
                                        {artworks[0].tech.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🎨</div>
                                        <p className="text-lg font-medium">Digital Waves</p>
                                        <p className="text-sm opacity-75">Interactive Art Piece</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Art Grid */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            作品ギャラリー
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {artworks.slice(1).map((artwork, index) => (
                                <div 
                                    key={index}
                                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 flex items-center justify-center">
                                        <div className="text-center text-gray-600 dark:text-gray-300">
                                            <div className="text-4xl mb-2">🖼️</div>
                                            <p className="font-medium">{artwork.title}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {artwork.title}
                                            </h3>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {artwork.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {artwork.medium}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {artwork.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {artwork.tech.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Exhibitions */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            展示履歴
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {exhibitions.map((exhibition, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {exhibition.title}
                                            </h3>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {exhibition.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {exhibition.venue}
                                        </p>
                                        <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded">
                                            {exhibition.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Artist Statement */}
                    <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            アーティストステートメント
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                私のアート制作は、テクノロジーと自然界の美しさの間にある対話から生まれます。
                                プログラミングという論理的な言語を使って、感情や直感的な美を表現することに挑戦しています。
                            </p>
                            <p>
                                アルゴリズムは制約であると同時に解放でもあります。事前に設定されたルールの中で、
                                予想もしない美しいパターンや形状が生まれる瞬間に魅力を感じ、その偶然性を作品に取り入れています。
                            </p>
                            <p>
                                また、作品が一方的に鑑賞されるのではなく、観客との相互作用によって完成する
                                インタラクティブな体験を重視しています。技術は手段であり、最終的には人間の感性や感情に
                                訴えかける作品づくりを目指しています。
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
