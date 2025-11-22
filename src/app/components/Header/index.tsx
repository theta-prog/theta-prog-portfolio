'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { headerTranslations } from './translations';
import { FaShareAlt, FaBars, FaTimes } from 'react-icons/fa';
import { snsLinks } from '../../constants/socialLinks';

interface HeaderProps {
    logoImage?: string | null;
}

const Header = ({ logoImage = null }: HeaderProps) => {
    const { language, setLanguage } = useLanguage();
    const t = headerTranslations[language];
    const [isSnsOpen, setIsSnsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    return (
        <header
            className="w-full px-4 py-4 md:px-8 md:py-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background sticky top-0 z-50"
            data-oid="23wu06j"
        >
            <div
                className="max-w-7xl mx-auto flex items-center justify-between"
                data-oid="itg2we3"
            >
                <div className="flex items-center gap-8" data-oid="vv8-5ic">
                    <Link href="/">
                        {logoImage ? (
                            <div className="relative h-10 w-32 md:w-40">
                                <Image
                                    src={logoImage}
                                    alt="theta library"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        ) : (
                            <h1 className="text-gray-900 dark:text-white text-2xl md:text-4xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer" data-oid="o:tnpay">
                                theta library
                            </h1>
                        )}
                    </Link>
                    <nav className="hidden md:flex items-center gap-6" data-oid="xtstwlo">
                        <Link
                            href="/about"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            data-oid="djxe1w1"
                        >
                            {t.about}
                        </Link>
                        <Link
                            href="/works/music"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            {t.music}
                        </Link>
                        <Link
                            href="/works/coding"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                            {t.coding}
                        </Link>
                    </nav>
                </div>

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-4" data-oid="1x8r.ia">
                    {/* SNS Popover */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSnsOpen(!isSnsOpen)}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="SNS Links"
                        >
                            <FaShareAlt size={20} />
                        </button>
                        
                        {isSnsOpen && (
                            <>
                                <div 
                                    className="fixed inset-0 z-40" 
                                    onClick={() => setIsSnsOpen(false)}
                                />
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#2a2f3a] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50 py-2 overflow-hidden">
                                    {snsLinks.map((sns) => (
                                        <a
                                            key={sns.name}
                                            href={sns.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                            onClick={() => setIsSnsOpen(false)}
                                        >
                                            <sns.icon className="text-lg" />
                                            <span className="text-sm font-medium">{sns.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

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
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1a1f2e] border-b border-gray-200 dark:border-gray-800 shadow-lg py-4 px-4 flex flex-col gap-4">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/about"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.about}
                        </Link>
                        <Link
                            href="/works/music"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.music}
                        </Link>
                        <Link
                            href="/works/coding"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.coding}
                        </Link>
                    </nav>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">SNS</p>
                        <div className="flex flex-wrap gap-4">
                            {snsLinks.map((sns) => (
                                <a
                                    key={sns.name}
                                    href={sns.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                >
                                    <sns.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Language</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setLanguage('ja');
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`px-3 py-1.5 text-sm rounded ${
                                    language === 'ja'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                }`}
                            >
                                日本語
                            </button>
                            <button
                                onClick={() => {
                                    setLanguage('en');
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`px-3 py-1.5 text-sm rounded ${
                                    language === 'en'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                                }`}
                            >
                                English
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
