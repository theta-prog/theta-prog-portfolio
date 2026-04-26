'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { snsLinks } from '../constants/socialLinks';
import {
    Footer,
    FooterContent,
    FooterDivider,
    FooterBottom,
    Text,
    Button,
} from '@stella-ds/react';

const navLinks = {
    en: [
        { label: 'About', href: '/about' },
        { label: 'Music', href: '/works/music' },
        { label: 'Coding', href: '/works/coding' },
    ],
    ja: [
        { label: 'About', href: '/about' },
        { label: 'Music', href: '/works/music' },
        { label: 'Coding', href: '/works/coding' },
    ],
};

const copy = {
    en: {
        desc: 'Music producer & frontend engineer.',
        nav: 'Navigation',
        links: 'Links',
        copyright: `© ${new Date().getFullYear()} theta. All rights reserved.`,
    },
    ja: {
        desc: 'ボカロP・フロントエンドエンジニア',
        nav: 'ナビゲーション',
        links: 'リンク',
        copyright: `© ${new Date().getFullYear()} theta. All rights reserved.`,
    },
};

const SiteFooter = () => {
    const { language } = useLanguage();
    const t = copy[language];
    const nav = navLinks[language];

    return (
        <Footer>
            <FooterContent>
                <div>
                    <Text weight="bold" size="lg" style={{ marginBottom: '0.5rem', color: 'var(--stella-color-starlight-primary, #e8eaf6)' }}>
                        theta library
                    </Text>
                    <Text size="sm" color="secondary">
                        {t.desc}
                    </Text>
                </div>

                <div>
                    <Text size="sm" weight="semibold" style={{ marginBottom: '0.75rem', color: 'var(--stella-color-starlight-primary, #e8eaf6)' }}>
                        {t.nav}
                    </Text>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                        {nav.map((item) => (
                            <Link key={item.href} href={item.href} className="nav-link" style={{ fontSize: '0.875rem' }}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <Text size="sm" weight="semibold" style={{ marginBottom: '0.75rem', color: 'var(--stella-color-starlight-primary, #e8eaf6)' }}>
                        {t.links}
                    </Text>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {snsLinks.map((sns) => (
                            <Button key={sns.name} variant="ghost" size="sm" asChild
                                style={{ justifyContent: 'flex-start', paddingLeft: '0.25rem' }}>
                                <a href={sns.url} target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <sns.icon style={{ fontSize: '0.9rem' }} />
                                    <span style={{ fontSize: '0.875rem' }}>{sns.name}</span>
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
            </FooterContent>

            <FooterDivider />

            <FooterBottom>
                <Text size="xs" color="secondary">{t.copyright}</Text>
                <Text size="xs" color="secondary" style={{ marginLeft: 'auto' }}>
                    Built with{' '}
                    <a href="https://github.com/theta-prog/stella-ds"
                        style={{ color: 'var(--stella-color-cosmos-400, #818cf8)', textDecoration: 'none' }}>
                        stella-ui
                    </a>
                </Text>
            </FooterBottom>
        </Footer>
    );
};

export default SiteFooter;
