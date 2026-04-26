import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@stella-ds/theme/css';
import '@stella-ds/react/css';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'theta library',
    description: 'Portfolio of theta — Vocaloid music producer & frontend engineer',
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
