import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@stella-ds/theme/css';
import '@stella-ds/react/css';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'theta | Frontend Engineer',
    description: 'Frontend engineer building UI component systems and web applications. Based in Kawasaki, Japan.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'),
    openGraph: {
        title: 'theta | Frontend Engineer',
        description: 'Frontend engineer building UI component systems and web applications.',
        type: 'website',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja" data-theme="dark" suppressHydrationWarning>
            <head>
                {/* Prevent flash of wrong theme */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(){var t=localStorage.getItem('theta-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);})();`
                }} />
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    <LanguageProvider>
                        {children}
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
