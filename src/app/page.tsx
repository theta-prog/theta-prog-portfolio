'use client';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import HobbiesSection from './components/HobbiesSection';

// Main Component
const Page = () => {
    return (
        <div
            className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200 flex flex-col"
            data-oid=":4b6_4u"
        >
            <Header data-oid="cxbhji8" />
            <main className="flex-1 max-w-7xl mx-auto px-8 py-12 space-y-16" data-oid="9luk_7-">
                <HeroSection data-oid="g5tdyha" />
                <AboutSection data-oid="8w-w4pj" />
                <WorksSection data-oid="d2zsnco" />
                <HobbiesSection data-oid="qkxst0x" />
            </main>
        </div>
    );
};

export default Page;
