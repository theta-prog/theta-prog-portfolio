'use client';

import Header from '../../components/Header/index';
import SiteFooter from '../../components/SiteFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { profileUrls } from '../../constants/socialLinks';
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
            <main className="flex-1 max-w-5xl mx-auto w-full px-8 py-12">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    <section style={{ textAlign: 'center' }}>
                        <Heading level={1} size="3xl" style={{ marginBottom: '0.75rem' }}>
                            {t.title}
                        </Heading>
                        <Text size="lg" color="secondary">
                            {t.subtitle}
                        </Text>
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.75rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginTop: '1.5rem',
                            }}
                        >
                            <Button variant="outline" size="md" asChild>
                                <a href={profileUrls.youtube} target="_blank" rel="noopener noreferrer">
                                    {t.youtubeChannel}
                                </a>
                            </Button>
                            <Button variant="outline" size="md" asChild>
                                <a href={profileUrls.niconico} target="_blank" rel="noopener noreferrer">
                                    {t.niconicoProfile}
                                </a>
                            </Button>
                            <Button variant="outline" size="md" asChild>
                                <a href={profileUrls.piapro} target="_blank" rel="noopener noreferrer">
                                    {t.piaproProfile}
                                </a>
                            </Button>
                        </div>
                    </section>

                    <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Heading level={2} size="xl">{t.videosTitle}</Heading>
                            <Text color="secondary">{t.videosSubtitle}</Text>
                        </div>
                        {t.songs.map((song, index) => (
                            <Card key={index} hoverable>
                                <CardContent style={{ padding: '1.5rem' }}>
                                    <div className="flex flex-col md:flex-row gap-6 items-stretch">
                                        <div className="w-full md:w-80 flex-shrink-0">
                                            <div className="aspect-video w-full overflow-hidden rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.08)' }}>
                                                <iframe
                                                    title={`${t.play} ${song.title}`}
                                                    src={`https://www.youtube.com/embed/${song.youtubeId}`}
                                                    className="h-full w-full border-0"
                                                    loading="lazy"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                                            className="text-center md:text-left">
                                            <div>
                                                <Heading level={3} size="lg" style={{ marginBottom: '0.25rem' }}>
                                                    {song.title}
                                                </Heading>
                                                <Text color="secondary" size="sm">
                                                    {t.vocal} {song.vocalist}
                                                </Text>
                                            </div>
                                            <Text color="primary">{song.description}</Text>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                                                className="md:justify-start">
                                                <Badge variant="subtle" color="primary">{song.kind}</Badge>
                                                <Badge variant="outline">{song.year}</Badge>
                                                <Badge variant="outline">{song.duration}</Badge>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
                                                className="md:justify-start">
                                                <Button variant="outline" size="sm" asChild>
                                                    <a href={song.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                                        {t.watchOnYoutube}
                                                    </a>
                                                </Button>
                                                {song.niconicoUrl && (
                                                    <Button variant="outline" size="sm" asChild>
                                                        <a href={song.niconicoUrl} target="_blank" rel="noopener noreferrer">
                                                            {t.watchOnNiconico}
                                                        </a>
                                                    </Button>
                                                )}
                                                {song.piaproUrl && (
                                                    <Button variant="outline" size="sm" asChild>
                                                        <a href={song.piaproUrl} target="_blank" rel="noopener noreferrer">
                                                            {t.openOnPiapro}
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Heading level={2} size="xl">{t.piaproTitle}</Heading>
                            <Text color="secondary">{t.piaproSubtitle}</Text>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {t.piaproWorks.map((work, index) => (
                                <Card key={index} hoverable>
                                    <CardContent style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', height: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <Heading level={3} size="md">{work.title}</Heading>
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                <Badge variant="subtle" color="primary">{work.type}</Badge>
                                                {work.note && <Badge variant="outline">{work.note}</Badge>}
                                            </div>
                                        </div>
                                        <Text color="primary">{work.description}</Text>
                                        <div>
                                            <Button variant="ghost" size="sm" asChild>
                                                <a href={work.url} target="_blank" rel="noopener noreferrer">
                                                    {t.openOnPiapro}
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
