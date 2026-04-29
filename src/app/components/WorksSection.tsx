'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './WorksSection/translations';
import { musicLinks } from '../constants/socialLinks';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    Badge,
    Heading,
    Button,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@stella-ds/react';

const carouselControlsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    marginTop: '1rem',
};

const carouselControlStyle = {
    position: 'static' as const,
};

const carouselStyle: CSSProperties & { '--carousel-edge-padding'?: string } = {
    '--carousel-edge-padding': '0.875rem',
};

const desktopMediaQuery = '(min-width: 768px)';

const WorksSection = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [slidesPerView, setSlidesPerView] = useState(1);
    const previousSlideLabel = language === 'ja' ? '前のスライド' : 'Previous slide';
    const nextSlideLabel = language === 'ja' ? '次のスライド' : 'Next slide';

    useEffect(() => {
        const mediaQuery = window.matchMedia(desktopMediaQuery);

        const syncSlidesPerView = () => {
            setSlidesPerView(mediaQuery.matches ? 2 : 1);
        };

        syncSlidesPerView();
        mediaQuery.addEventListener('change', syncSlidesPerView);

        return () => {
            mediaQuery.removeEventListener('change', syncSlidesPerView);
        };
    }, []);

    return (
        <section id="works">
            <Heading level={2} size="xl" style={{ marginBottom: '2rem' }}>
                {t.title}
            </Heading>

            {/* Coding — primary */}
            <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <Heading level={3} size="lg" color="aurora-400">
                        {t.coding}
                    </Heading>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/works/coding">{t.viewAll}</Link>
                    </Button>
                </div>
                <Carousel slideAlign="smart" slidesPerView={slidesPerView} aria-label={`${t.coding} ${t.title}`} className="w-full" style={carouselStyle}>
                    <CarouselContent className="gap-5 items-stretch">
                    {t.codingPreviews.map((project) => (
                        <CarouselItem key={project.title} style={{ minWidth: 0 }}>
                            <Card hoverable style={{ height: '100%' }}>
                                <div className="aspect-video-placeholder" style={{ borderRadius: '0.5rem 0.5rem 0 0' }}>
                                    {`{ }`} {project.title}
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardFooter style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tech.split(', ').map((tech) => (
                                        <Badge key={tech} variant="subtle" color="default" size="sm">{tech}</Badge>
                                    ))}
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <div style={carouselControlsStyle}>
                        <CarouselPrevious
                            aria-label={`${previousSlideLabel}: ${t.coding}`}
                            style={carouselControlStyle}
                        />
                        <CarouselNext
                            aria-label={`${nextSlideLabel}: ${t.coding}`}
                            style={carouselControlStyle}
                        />
                    </div>
                </Carousel>
            </div>

            {/* Creative Works (music) — secondary */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <Heading level={3} size="lg" color="nebula-400">
                        {t.creativeWorks}
                    </Heading>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/works/music">{t.viewAll}</Link>
                    </Button>
                </div>
                <Carousel slideAlign="smart" slidesPerView={slidesPerView} aria-label={`${t.creativeWorks} ${t.title}`} className="w-full" style={carouselStyle}>
                    <CarouselContent className="gap-5 items-stretch">
                    {t.musicPreviews.map((song) => (
                        <CarouselItem key={song.title} style={{ minWidth: 0 }}>
                            <Card hoverable style={{ height: '100%' }}>
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
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <div style={carouselControlsStyle}>
                        <CarouselPrevious
                            aria-label={`${previousSlideLabel}: ${t.creativeWorks}`}
                            style={carouselControlStyle}
                        />
                        <CarouselNext
                            aria-label={`${nextSlideLabel}: ${t.creativeWorks}`}
                            style={carouselControlStyle}
                        />
                    </div>
                </Carousel>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {musicLinks.map((link) => (
                        <Button key={link.name} variant="ghost" size="sm" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                <link.icon style={{ fontSize: '0.9rem' }} />
                                <span>{link.name}</span>
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksSection;
