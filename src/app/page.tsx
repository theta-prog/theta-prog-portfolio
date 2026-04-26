import Header from './components/Header/index';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import SiteFooter from './components/SiteFooter';

const Page = () => {
    return (
        <div className="w-full min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-8 py-12" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <HeroSection />
                <NewsSection />
                <AboutSection />
                <WorksSection />
            </main>
            <SiteFooter />
        </div>
    );
};

export default Page;
