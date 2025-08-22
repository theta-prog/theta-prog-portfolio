'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { headerTranslations } from './translations';

const Header = () => {
    const { language, setLanguage } = useLanguage();
    const t = headerTranslations[language];

    return (
        <header
            className="w-full px-8 py-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50"
            data-oid="23wu06j"
        >
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
                data-oid="itg2we3"
            >
                <div className="flex items-center gap-8" data-oid="vv8-5ic">
                    <Link href="/">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer" data-oid="o:tnpay">
                            Theta Library
                        </h1>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6" data-oid="xtstwlo">
                        <Link
                            href="/about"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            data-oid="djxe1w1"
                        >
                            {t.about}
                        </Link>
                        <div className="relative group" data-oid="v0dnyw2">
                            <span
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
                                data-oid="gfbw9gy"
                            >
                                {t.works}
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="-w96x4h"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                        data-oid="1m2j.wg"
                                    />
                                </svg>
                            </span>
                            <div
                                className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2"
                                data-oid="plzv8w2"
                            >
                                <Link
                                    href="/works/music"
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    data-oid="zaxr32e"
                                >
                                    {t.musicProjects}
                                </Link>
                                <Link
                                    href="/works/art"
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    data-oid="1k..zmq"
                                >
                                    {t.artGallery}
                                </Link>
                                <Link
                                    href="/works/coding"
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    data-oid="vdm:f9x"
                                >
                                    {t.codingPortfolio}
                                </Link>
                            </div>
                        </div>
                        <Link
                            href="/hobbies"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            data-oid="hgrx3f5"
                        >
                            {t.hobbies}
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            data-oid="-0:.696"
                        >
                            {t.contact}
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4" data-oid="1x8r.ia">
                    {/* Language Toggle */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLanguage('ja')}
                            className={`px-2 py-1 text-sm rounded ${
                                language === 'ja'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                            } transition-colors`}
                        >
                            日本語
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-2 py-1 text-sm rounded ${
                                language === 'en'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                            } transition-colors`}
                        >
                            English
                        </button>
                    </div>
                    <Link
                        href="/contact"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        data-oid="uhetxjq"
                    >
                        {t.getInTouch}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
