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
        id: 'chat',
        variant: 'image',
        eyebrow: 'Workflow',
        title: 'Prompt to Product',
        description: '仕様の意図がそのままUIに着地するまで詰める。',
        image: '/images/chat.jpg',
        alt: 'Dark editor chat interface floating over a rainy glass background.',
        href: '/works/coding',
        linkLabel: 'Open coding works',
        ctaLabel: 'See coding works ->',
    },
    {
        id: 'inspect',
        variant: 'image',
        eyebrow: 'Interface Review',
        title: 'Inspect the Surface',
        description: '挙動、余白、視線誘導までコードで詰める。',
        image: '/images/right-click.jpg',
        alt: 'Context menu opened over a design inspection view.',
        href: '/works/coding',
        linkLabel: 'Open interface work samples',
        ctaLabel: 'Inspect projects ->',
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
                                                priority={slide.id === 'chat'}
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                                className={styles.mediaImage}
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
