'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { headerTranslations } from './translations';
import { devLinks } from '../../constants/socialLinks';
import {
    Header as StellaHeader,
    HeaderBrand,
    HeaderNav,
    HeaderActions,
    Button,
    Separator,
} from '@stella-ds/react';

const Header = () => {
    const { language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const t = headerTranslations[language];
    const [snsOpen, setSnsOpen] = useState(false);
    const linksPanelShadow = theme === 'light'
        ? '0 18px 45px rgba(120, 131, 161, 0.18)'
        : 'var(--stella-shadow-lg, 0 8px 24px 0 rgb(0 0 0 / 0.5))';

    const nextLanguage = language === 'ja' ? 'en' : 'ja';
    const nextLanguageLabel = nextLanguage === 'ja' ? '日本語' : 'English';
    const currentLanguageLabel = language === 'ja' ? '日本語' : 'English';

    const languageButtonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        minWidth: '7.5rem',
        whiteSpace: 'nowrap',
    } as const;

    const navLinks = (
        <>
            <Link href="/about" className="nav-link">{t.about}</Link>
            <Link href="/works/coding" className="nav-link">{t.coding}</Link>
            <Link href="/works/music" className="nav-link">{t.music}</Link>
        </>
    );

    const mobileMenu = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Link href="/about" className="nav-link" style={{ display: 'block' }}>{t.about}</Link>
            <Link href="/works/coding" className="nav-link" style={{ display: 'block' }}>{t.coding}</Link>
            <Link href="/works/music" className="nav-link" style={{ display: 'block' }}>{t.music}</Link>
            <Separator style={{ margin: '0.5rem 0' }} />
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {devLinks.map((sns) => (
                    <Button key={sns.name} variant="ghost" size="sm" asChild>
                        <a href={sns.url} target="_blank" rel="noopener noreferrer">
                            <sns.icon style={{ fontSize: '1rem', marginRight: '0.25rem' }} />
                            {sns.name}
                        </a>
                    </Button>
                ))}
            </div>
            <Separator style={{ margin: '0.5rem 0' }} />
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(nextLanguage)}
                    aria-label={`Switch language to ${nextLanguageLabel}`}
                    style={languageButtonStyle}
                >
                    <FaLanguage aria-hidden="true" style={{ fontSize: '0.8rem' }} />
                    {currentLanguageLabel}
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? <FaSun style={{ fontSize: '0.9rem' }} /> : <FaMoon style={{ fontSize: '0.9rem' }} />}
                </Button>
            </div>
        </div>
    );

    return (
        <StellaHeader sticky blur mobileNav={mobileMenu}>
            <HeaderBrand>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--stella-color-starlight-primary, #e8eaf6)',
                        letterSpacing: '-0.02em',
                    }}>
                        theta library
                    </span>
                </Link>
            </HeaderBrand>

            <HeaderNav>{navLinks}</HeaderNav>

            <HeaderActions>
                <div style={{ position: 'relative' }}>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSnsOpen((v) => !v)}
                        aria-label="SNS Links"
                    >
                        Links
                    </Button>
                    {snsOpen && (
                        <>
                            <div
                                style={{ position: 'fixed', inset: 0, zIndex: 40 }}
                                onClick={() => setSnsOpen(false)}
                            />
                            <div style={{
                                position: 'absolute',
                                right: 0,
                                top: 'calc(100% + 0.5rem)',
                                minWidth: '10rem',
                                background: 'var(--stella-color-void-surface-translucent, rgba(21, 22, 27, 0.88))',
                                border: '1px solid var(--border, #2b2e35)',
                                borderRadius: '0.75rem',
                                padding: '0.5rem',
                                zIndex: 50,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.125rem',
                                boxShadow: linksPanelShadow,
                                backdropFilter: 'blur(18px)',
                            }}>
                                {devLinks.map((sns) => (
                                    <a
                                        key={sns.name}
                                        href={sns.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="nav-link"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', borderRadius: '0.5rem' }}
                                        onClick={() => setSnsOpen(false)}
                                    >
                                        <sns.icon style={{ fontSize: '1rem' }} />
                                        <span style={{ fontSize: '0.875rem' }}>{sns.name}</span>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(nextLanguage)}
                    aria-label={`Switch language to ${nextLanguageLabel}`}
                    style={languageButtonStyle}
                >
                    <FaLanguage aria-hidden="true" style={{ fontSize: '0.8rem' }} />
                    {currentLanguageLabel}
                </Button>

                <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark'
                        ? <FaSun style={{ fontSize: '0.9rem' }} />
                        : <FaMoon style={{ fontSize: '0.9rem' }} />}
                </Button>
            </HeaderActions>
        </StellaHeader>
    );
};

export default Header;
