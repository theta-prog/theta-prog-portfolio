import Header from '../components/Header/index';
import ContactSection from '../components/ContactSection';

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200">
            <Header />
            <main className="max-w-4xl mx-auto px-8 py-12">
                <ContactSection />
            </main>
        </div>
    );
}
