'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './WorksSection/translations';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    Badge,
    Heading,
    Button,
} from '@stella-ds/react';

const WorksSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="works">
            <Heading level={2} size="xl" style={{ marginBottom: '2rem' }}>
                {t.title}
            </Heading>

            {/* Music */}
            <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <Heading level={3} size="lg" color="nebula-400">
                        {t.music}
                    </Heading>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/works/music">{t.viewAll}</Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {t.musicPreviews.map((song, i) => (
                        <Card key={i} hoverable>
                            <div className="aspect-video-placeholder" style={{ borderRadius: '0.5rem 0.5rem 0 0' }}>
                                ♪ {song.title}
                            </div>
                            <CardHeader>
                                <CardTitle>{song.title}</CardTitle>
                                <CardDescription>Vo. {song.vocalist}</CardDescription>
                            </CardHeader>
                            <CardFooter style={{ gap: '0.5rem' }}>
                                <Badge variant="subtle" color="primary" size="sm">{song.genre}</Badge>
                                <Badge variant="outline" size="sm">{song.year}</Badge>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Coding */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <Heading level={3} size="lg" color="aurora-400">
                        {t.coding}
                    </Heading>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/works/coding">{t.viewAll}</Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {t.codingPreviews.map((project, i) => (
                        <Card key={i} hoverable>
                            <div className="aspect-video-placeholder" style={{ borderRadius: '0.5rem 0.5rem 0 0' }}>
                                {`{ }`} {project.title}
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardFooter style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tech.split(', ').map((t) => (
                                    <Badge key={t} variant="subtle" color="default" size="sm">{t}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksSection;
