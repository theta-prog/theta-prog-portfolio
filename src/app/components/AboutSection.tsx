'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './AboutSection/translations';
import { snsLinks } from '../constants/socialLinks';
import {
    Card,
    CardContent,
    Avatar,
    Heading,
    Text,
    Button,
    Stack,
} from '@stella-ds/react';

const AboutSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about">
            <Heading level={2} size="xl" style={{ marginBottom: '1.25rem' }}>
                {t.title}
            </Heading>
            <Card>
                <CardContent style={{ padding: '1.5rem 2rem' }}>
                    <Stack direction="horizontal" gap="8" align="start" className="flex-col md:flex-row">
                        <Avatar
                            alt="theta"
                            size="xl"
                            style={{
                                width: '7rem',
                                height: '7rem',
                                flexShrink: 0,
                                fontSize: '2.5rem',
                                alignSelf: 'center',
                            }}
                            className="md:self-start md:w-40 md:h-40"
                        />
                        <Stack direction="vertical" gap="4" style={{ flex: 1, minWidth: 0 }}>
                            <div>
                                <Heading level={3} size="xl" style={{ marginBottom: '0.25rem' }}>
                                    {t.subtitle}
                                </Heading>
                                <Text color="secondary" size="sm">
                                    {t.roleTagline}
                                </Text>
                            </div>
                            <Text color="primary" style={{ lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>
                                {t.backgroundText}
                            </Text>
                            <Stack direction="horizontal" gap="2" wrap style={{ marginTop: '0.25rem' }}>
                                {snsLinks.map((sns) => (
                                    <Button key={sns.name} variant="outline" size="sm" asChild>
                                        <a href={sns.url} target="_blank" rel="noopener noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                            <sns.icon style={{ fontSize: '0.9rem' }} />
                                            {sns.name}
                                        </a>
                                    </Button>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </section>
    );
};

export default AboutSection;
