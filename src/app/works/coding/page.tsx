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

                    <section>
                        <Heading level={2} size="lg" style={{ marginBottom: '1rem' }}>
                            {t.techStack}
                        </Heading>
                        <Card>
                            <CardContent style={{ padding: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {t.techStackItems.map((tech, index) => (
                                    <Badge key={index} variant="subtle" color="default" size="sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <Heading level={2} size="lg">{t.projectsTitle}</Heading>
                        {t.projects.map((project, index) => (
                            <Card key={index} hoverable>
                                <CardContent style={{ padding: '1.5rem' }}>
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="aspect-video-placeholder w-full md:w-56 flex-shrink-0"
                                            style={{ minHeight: '7rem', fontSize: '1.5rem' }}>
                                            {`{ }`}
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            <div>
                                                <Heading level={3} size="md" style={{ marginBottom: '0.25rem' }}>
                                                    {project.title}
                                                </Heading>
                                                <Badge variant="outline" size="sm">{project.year}</Badge>
                                            </div>
                                            <Text color="primary">{project.description}</Text>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                                                {project.tech.split(', ').map((t) => (
                                                    <Badge key={t} variant="subtle" color="default" size="sm">{t}</Badge>
                                                ))}
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
