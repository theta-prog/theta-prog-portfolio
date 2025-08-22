import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Theta Library',
    description: 'Portfolio of creative works and projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja" data-oid="xh6.tdb">
            <body className={inter.className} data-oid="n3hy_7s">
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
