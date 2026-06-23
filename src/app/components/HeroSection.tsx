'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { useTheme } from '../contexts/ThemeContext';
import {
    Background,
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Heading,
    Text,
} from '@stella-ds/react';

type HeroSlide = {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    linkLabel: string;
    ctaLabel: string;
} & (
    | {
        variant: 'copy';
        supportingText: string;
    }
    | {
        variant: 'image';
        image: string;
        alt: string;
        imageFit?: 'contain' | 'cover';
    }
);

const heroSlides: HeroSlide[] = [
    {
        id: 'intro',
        variant: 'copy',
        eyebrow: 'Frontend Engineer',
        title: 'theta library',
        description: 'Music · Code · Systems',
        supportingText: 'UIコンポーネントシステム、Webプロダクト、制作ワークフローを横断して磨いていく。',
        href: '/about',
        linkLabel: 'Open the About page',
        ctaLabel: 'Read profile ->',
    },
    {
        id: 'coding-pick',
        variant: 'image',
        eyebrow: 'Featured Coding',
        title: 'stella-ds',
        description: 'トークン、Reactコンポーネント、Storybookを備えたUI基盤。',
        image: '/images/stella-ui-home.png',
        alt: 'Stella UI homepage',
        imageFit: 'contain',
        href: '/works/coding',
        linkLabel: 'Open coding works',
        ctaLabel: 'See coding works ->',
    },
    {
        id: 'music-pick',
        variant: 'image',
        eyebrow: 'Featured Music',
        title: 'Someday',
        description: '感謝を軽やかなメロディで届ける初音ミクのポップナンバー。',
        image: 'https://i.ytimg.com/vi/TOkltMR3j0s/hqdefault.jpg',
        alt: 'Someday YouTube thumbnail',
        imageFit: 'cover',
        href: '/works/music',
        linkLabel: 'Open music works',
        ctaLabel: 'Listen to music ->',
    },
];

const heroCarouselStyle: CSSProperties & {
    '--carousel-edge-padding'?: string;
    '--carousel-gap'?: string;
} = {
    '--carousel-edge-padding': '0px',
    '--carousel-gap': '0px',
};

const HeroSection = () => {
    const { theme } = useTheme();

    return (
        <Background
            variant={theme === 'dark' ? 'galaxy' : 'milkyway'}
            color="cosmos"
            theme={theme}
            style={{ borderRadius: '1rem', minHeight: '300px', overflow: 'hidden' }}
            className={styles.heroBackground}
        >
            <Carousel
                loop
                slidesPerView={1}
                autoplay
                autoplayInterval={5500}
                pauseOnHover
                aria-label="Hero showcase"
                style={heroCarouselStyle}
                className={styles.heroCarousel}
            >
                <CarouselContent className={styles.carouselContent}>
                    {heroSlides.map((slide) => (
                        <CarouselItem key={slide.id} className={styles.carouselItem}>
                            <Link href={slide.href} aria-label={slide.linkLabel} className={styles.slideLink}>
                                {slide.variant === 'copy' ? (
                                    <div className={`${styles.slideShell} ${styles.copySlide}`}>
                                        <div className={styles.copyContent}>
                                            <Text as="p" size="sm" color="starlight-secondary" className={styles.eyebrow}>
                                                {slide.eyebrow}
                                            </Text>
                                            <Heading
                                                level={1}
                                                size="3xl"
                                                color="starlight-primary"
                                                style={{ letterSpacing: '-0.03em' }}
                                            >
                                                {slide.title}
                                            </Heading>
                                            <Text size="lg" color="starlight-secondary">
                                                {slide.description}
                                            </Text>
                                            <Text size="md" color="starlight-secondary" className={styles.supportingText}>
                                                {slide.supportingText}
                                            </Text>
                                            <Text as="span" size="sm" color="starlight-primary" className={styles.ctaLabel}>
                                                {slide.ctaLabel}
                                            </Text>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={`${styles.slideShell} ${styles.imageSlide}`}>
                                        <div className={styles.mediaFrame}>
                                            <Image
                                                src={slide.image}
                                                alt={slide.alt}
                                                fill
                                                priority={slide.id === 'coding-pick'}
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                                className={`${styles.mediaImage} ${slide.imageFit === 'contain' ? styles.mediaImageContain : ''}`}
                                            />
                                            <div className={styles.mediaOverlay} />
                                            <div className={styles.captionCard}>
                                                <Text as="p" size="sm" color="starlight-secondary" className={styles.eyebrow}>
                                                    {slide.eyebrow}
                                                </Text>
                                                <Heading level={2} size="xl" color="starlight-primary">
                                                    {slide.title}
                                                </Heading>
                                                <Text size="md" color="starlight-secondary">
                                                    {slide.description}
                                                </Text>
                                                <Text as="span" size="sm" color="starlight-primary" className={styles.ctaLabel}>
                                                    {slide.ctaLabel}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    aria-label="Previous hero slide"
                    className={`${styles.carouselControl} ${styles.carouselPrevious}`}
                />
                <CarouselNext
                    aria-label="Next hero slide"
                    className={`${styles.carouselControl} ${styles.carouselNext}`}
                />
                <CarouselDots aria-label="Hero slide indicators" className={styles.heroDots} />
            </Carousel>
        </Background>
    );
};

export default HeroSection;
