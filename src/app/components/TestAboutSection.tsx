'use client';

import { useLanguage } from '../contexts/LanguageContext';

const TestAboutSection = () => {
    console.log('🔥 TestAboutSection: RENDERING NOW!');
    
    const { language } = useLanguage();
    console.log('🔥 TestAboutSection: Language is', language);

    return (
        <div className="p-8">
            <h1>Test About Section</h1>
            <p>Current language: {language}</p>
            <p>This is a test component to verify rendering.</p>
        </div>
    );
};

export default TestAboutSection;
