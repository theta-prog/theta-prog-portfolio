'use client';

import { useTheme } from '../contexts/ThemeContext';
import { Background, Heading, Text } from '@stella-ds/react';

const HeroSection = () => {
    const { theme } = useTheme();

    return (
        <Background
            variant={theme === 'dark' ? 'galaxy' : 'milkyway'}
            color="cosmos"
            theme={theme}
            style={{ borderRadius: '1rem', minHeight: '300px' }}
            className="md:min-h-[500px]"
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px',
                padding: '2rem',
            }} className="md:min-h-[500px]">
                <div style={{ textAlign: 'center', maxWidth: '40rem' }}>
                    <Heading
                        level={1}
                        size="3xl"
                        color="starlight-primary"
                        style={{ marginBottom: '0.75rem', letterSpacing: '-0.03em' }}
                    >
                        theta library
                    </Heading>
                    <Text size="lg" color="starlight-secondary">
                        Music &amp; Code — a creative portfolio
                    </Text>
                </div>
            </div>
        </Background>
    );
};

export default HeroSection;
