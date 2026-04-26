import Header from '../components/Header/index';
import AboutSection from '../components/AboutSection';
import SiteFooter from '../components/SiteFooter';

export default function Page() {
    return (
        <div className="w-full min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-8 py-12">
                <AboutSection />
            </main>
            <SiteFooter />
        </div>
    );
}
