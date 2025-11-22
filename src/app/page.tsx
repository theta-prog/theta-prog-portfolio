'use client';
import Header from './components/Header/index';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';

// Main Component
const Page = () => {
    return (
        <div
            className="w-full min-h-screen bg-background text-foreground transition-colors duration-200 flex flex-col"
            data-oid=":4b6_4u"
        >
            <Header data-oid="cxbhji8" />
            <main className="flex-1 max-w-7xl mx-auto px-8 py-12 space-y-16" data-oid="9luk_7-">
                <HeroSection data-oid="g5tdyha" />
                <NewsSection />
                <AboutSection data-oid="8w-w4pj" />
                <WorksSection data-oid="d2zsnco" />
            </main>
        </div>
    );
};

export default Page;
