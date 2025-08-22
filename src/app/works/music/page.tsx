import Header from '../../components/Header/index';

export default function Page() {
    const albums = [
        {
            title: "Digital Landscapes",
            year: "2024",
            genre: "Ambient / Electronic",
            description: "都市と自然の音風景を融合させたアンビエント作品集。フィールドレコーディングと電子音響の実験的な組み合わせ。",
            tracks: ["Urban Dawn", "Forest Echoes", "Neon Rain", "Silent Frequency", "Digital Wind"],
            duration: "42:18",
            cover: "🌃"
        },
        {
            title: "Algorithmic Dreams",
            year: "2023",
            genre: "Generative Music",
            description: "アルゴリズムによって生成される音楽の可能性を探求した作品。数学的パターンと感情的表現の融合。",
            tracks: ["Recursive Melody", "Fractal Rhythm", "Probability Dance", "Neural Harmonies", "Random Beauty"],
            duration: "38:45",
            cover: "🧮"
        },
        {
            title: "Interactive Soundscapes",
            year: "2023",
            genre: "Interactive / Experimental",
            description: "リスナーの操作に応じて変化するインタラクティブな音楽体験。Webブラウザ上で再生可能。",
            tracks: ["Touch the Sound", "Gesture Symphony", "Voice Morph", "Space Navigation", "Time Bend"],
            duration: "∞ (無限)",
            cover: "🎮"
        }
    ];

    const singles = [
        {
            title: "Midnight Data Stream",
            year: "2024",
            genre: "Dark Ambient",
            description: "深夜のデータセンターで録音された音を基に制作。デジタル時代の孤独感を表現。",
            duration: "7:33",
            cover: "🌙"
        },
        {
            title: "Plant Communication",
            year: "2023",
            genre: "Bio-Electronic",
            description: "植物の電気信号をMIDIに変換して制作された実験的作品。自然と技術の対話。",
            duration: "12:14",
            cover: "🌱"
        },
        {
            title: "City Pulse",
            year: "2023",
            genre: "Urban Electronic",
            description: "東京の交通データをリズムパターンに変換。都市の鼓動を音楽で表現。",
            duration: "5:47",
            cover: "🏙️"
        }
    ];

    const performances = [
        {
            title: "Live Coding Performance",
            venue: "Tech Art Festival",
            date: "2024.03",
            description: "リアルタイムでコードを書きながら音楽を演奏するライブパフォーマンス。観客は画面上のコード変更を見ながら音楽の変化を体験。",
            type: "ライブコーディング"
        },
        {
            title: "Interactive Installation",
            venue: "Digital Art Museum",
            date: "2023.11",
            description: "来場者の動きに反応して音楽が変化するインスタレーション。音と動きの関係性を探求。",
            type: "インスタレーション"
        },
        {
            title: "AI Collaboration Concert",
            venue: "Music Technology Lab",
            date: "2023.08",
            description: "人工知能との共演による実験的コンサート。AIが生成するメロディーに人間がリアルタイムで応答。",
            type: "AI共演"
        }
    ];

    const tools = [
        {
            category: "DAW・制作環境",
            items: ["Ableton Live", "Max/MSP", "Reaper", "Logic Pro", "Bitwig Studio"]
        },
        {
            category: "プログラミング",
            items: ["SuperCollider", "ChucK", "Pure Data", "JavaScript (Web Audio)", "Python (librosa)"]
        },
        {
            category: "ハードウェア",
            items: ["Arduino", "Raspberry Pi", "Field Recorder", "MIDI Controllers", "Analog Synthesizers"]
        },
        {
            category: "プラグイン・エフェクト",
            items: ["Native Instruments", "FabFilter", "Soundtoys", "Valhalla", "Custom Max4Live devices"]
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
                            Music Projects
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            電子音楽制作、アルゴリズム作曲、インタラクティブサウンドアート。
                            テクノロジーと音楽の境界を探求し、新しい聴覚体験を創造しています。
                        </p>
                    </section>

                    {/* Featured Album */}
                    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                                    Latest Release
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                    {albums[0].title}
                                </h2>
                                <div className="space-y-2">
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        {albums[0].genre} • {albums[0].year} • {albums[0].duration}
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {albums[0].description}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-medium text-gray-900 dark:text-white">トラックリスト:</h3>
                                    <div className="space-y-2">
                                        {albums[0].tracks.map((track, index) => (
                                            <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                                <span className="w-6 text-sm">{index + 1}.</span>
                                                <span>{track}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                                        ▶ 試聴
                                    </button>
                                    <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        詳細
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300">
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">{albums[0].cover}</div>
                                        <p className="text-xl font-medium">{albums[0].title}</p>
                                        <p className="text-sm opacity-75">{albums[0].year}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Albums Grid */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            アルバム・EP
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {albums.slice(1).map((album, index) => (
                                <div 
                                    key={index}
                                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 dark:from-purple-800 dark:via-blue-800 dark:to-green-800 flex items-center justify-center text-6xl">
                                        {album.cover}
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {album.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {album.genre} • {album.year} • {album.duration}
                                            </p>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {album.description}
                                        </p>
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                                トラック:
                                            </h4>
                                            <div className="space-y-1">
                                                {album.tracks.slice(0, 3).map((track, trackIndex) => (
                                                    <div key={trackIndex} className="text-sm text-gray-600 dark:text-gray-400">
                                                        {trackIndex + 1}. {track}
                                                    </div>
                                                ))}
                                                {album.tracks.length > 3 && (
                                                    <div className="text-sm text-gray-500 dark:text-gray-500">
                                                        ...他 {album.tracks.length - 3} 曲
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <button className="w-full py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                            ▶ 試聴
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Singles */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            シングル・実験作品
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {singles.map((single, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="space-y-4">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">{single.cover}</div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {single.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {single.genre} • {single.year} • {single.duration}
                                            </p>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {single.description}
                                        </p>
                                        <button className="w-full py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                                            ▶ 再生
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Performances */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            パフォーマンス・展示
                        </h2>
                        <div className="space-y-6">
                            {performances.map((performance, index) => (
                                <div 
                                    key={index}
                                    className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="grid md:grid-cols-4 gap-6 items-center">
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {performance.title}
                                            </h3>
                                            <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded">
                                                {performance.type}
                                            </span>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                                {performance.venue}
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                {performance.date}
                                            </p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {performance.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Tools & Workflow */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                            制作環境・ツール
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {tools.map((toolCategory, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        {toolCategory.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {toolCategory.items.map((tool, toolIndex) => (
                                            <span 
                                                key={toolIndex}
                                                className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                                            >
                                                {tool}
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
                            音楽制作への取り組み
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                私の音楽制作は、「音」そのものの可能性を拡張することから始まります。
                                従来の楽器や音源だけでなく、日常の音、データ、センサー情報、アルゴリズムまでも
                                音楽の素材として捉え、新しい聴覚体験を創造しています。
                            </p>
                            <p>
                                特に興味深いのは、音楽とプログラミングの融合です。ライブコーディングによる
                                リアルタイム作曲、データビジュアライゼーションの音楽化、
                                AIとの共演など、技術的な実験が創造的な表現につながる瞬間に魅力を感じています。
                            </p>
                            <p>
                                また、音楽を「聞く」だけでなく「触る」「見る」「感じる」ことができる
                                インタラクティブな体験の創造にも力を入れています。
                                観客が作品の一部となり、音楽に参加できる環境を作ることで、
                                音楽と人の新しい関係性を探求しています。
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
