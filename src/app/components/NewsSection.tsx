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
                <CardContent className="news-list" style={{ padding: '1.25rem 1.5rem' }}>
                    {t.newsItems.map((item, index) => (
                        <div key={index}>
                            {index > 0 && <Separator style={{ margin: '0.875rem 0' }} />}
                            <div className="news-item">
                                <Text
                                    size="sm"
                                    family="mono"
                                    color="secondary"
                                >
                                    {item.date}
                                </Text>
                                <Text size="sm" style={{ lineHeight: 1.6 }}>{item.content}</Text>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default NewsSection;
