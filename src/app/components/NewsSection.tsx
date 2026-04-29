'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './NewsSection/translations';
import { Card, CardContent, Heading, Text, Separator } from '@stella-ds/react';

const NewsSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section>
            <Heading level={2} size="xl" style={{ marginBottom: '1.25rem' }}>
                {t.title}
            </Heading>
            <Card>
                <CardContent style={{ padding: '1.25rem 1.5rem' }}>
                    {t.newsItems.map((item, index) => (
                        <div key={index}>
                            {index > 0 && <Separator style={{ margin: '0.875rem 0' }} />}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}
                                className="md:flex-row md:items-center md:gap-6">
                                <Text
                                    size="sm"
                                    family="mono"
                                    color="secondary"
                                    style={{ minWidth: '7rem', flexShrink: 0 }}
                                >
                                    {item.date}
                                </Text>
                                <Text size="sm">{item.content}</Text>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default NewsSection;
