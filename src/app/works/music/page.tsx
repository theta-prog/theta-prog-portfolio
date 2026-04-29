'use client';

import Header from '../../components/Header/index';
import SiteFooter from '../../components/SiteFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from './translations';
import {
    Card,
    CardContent,
    Badge,
    Heading,
    Text,
    Button,
} from '@stella-ds/react';

export default function Page() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="w-full min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-8 py-12">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    <section style={{ textAlign: 'center' }}>
                        <Heading level={1} size="3xl" style={{ marginBottom: '0.75rem' }}>
                            {t.title}
                        </Heading>
                        <Text size="lg" color="secondary">
                            {t.subtitle}
                        </Text>
                    </section>

                    <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {t.songs.map((song, index) => (
                            <Card key={index} hoverable>
                                <CardContent style={{ padding: '1.5rem' }}>
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="aspect-video-placeholder w-full md:w-64 flex-shrink-0"
                                            style={{ minHeight: '8rem' }}>
                                            <Button variant="ghost" size="md" aria-label={`Play ${song.title}`}>
                                                ▶ {t.play}
                                            </Button>
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                                            className="text-center md:text-left">
                                            <div>
                                                <Heading level={3} size="lg" style={{ marginBottom: '0.25rem' }}>
                                                    {song.title}
                                                </Heading>
                                                <Text color="secondary" size="sm">
                                                    Vo. {song.vocalist}
                                                </Text>
                                            </div>
                                            <Text color="primary">{song.description}</Text>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                                                className="md:justify-start">
                                                <Badge variant="subtle" color="primary">{song.genre}</Badge>
                                                <Badge variant="outline">{song.year}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </section>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
