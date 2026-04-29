'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'theta-theme';

const isTheme = (value: string | null): value is Theme => {
    return value === 'dark' || value === 'light';
};

const getDomTheme = (): Theme | null => {
    if (typeof document === 'undefined') {
        return null;
    }

    const domTheme = document.documentElement.getAttribute('data-theme');
    return isTheme(domTheme) ? domTheme : null;
};

const getStoredTheme = (): Theme | null => {
    if (typeof window === 'undefined') {
        return null;
    }

    try {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        return isTheme(storedTheme) ? storedTheme : null;
    } catch {
        return null;
    }
};

const getInitialTheme = (): Theme => {
    return getDomTheme() ?? getStoredTheme() ?? 'dark';
};

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        document.documentElement.setAttribute('data-theme', theme);

        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch {
            // Ignore storage errors and keep the DOM theme in sync.
        }
    }, [theme, mounted]);

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
    return ctx;
};
