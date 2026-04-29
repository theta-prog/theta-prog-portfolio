import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageProvider, useLanguage } from '../src/app/contexts/LanguageContext';
import { ThemeProvider, useTheme } from '../src/app/contexts/ThemeContext';
import AboutSection from '../src/app/components/AboutSection';
import Header from '../src/app/components/Header/index';
import NewsSection from '../src/app/components/NewsSection';
import HeroSection from '../src/app/components/HeroSection';
import SiteFooter from '../src/app/components/SiteFooter';
import WorksSection from '../src/app/components/WorksSection';

const TestLanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <button data-testid="switch-to-ja" onClick={() => setLanguage('ja')}>
        Switch to Japanese
      </button>
      <button data-testid="switch-to-en" onClick={() => setLanguage('en')}>
        Switch to English
      </button>
    </div>
  );
};

const TestThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
};

const renderWithLanguageProvider = (component: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        {component}
      </LanguageProvider>
    </ThemeProvider>
  );
};

describe('Internationalization (i18n) Tests', () => {
  test('LanguageContext provides default language as "ja"', () => {
    renderWithLanguageProvider(<TestLanguageSwitch />);
    expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
  });

  test('LanguageContext throws error when used outside provider', () => {
    const TestComponent = () => {
      try {
        useLanguage();
        return <div>Should not render</div>;
      } catch (error) {
        return <div data-testid="error-message">{(error as Error).message}</div>;
      }
    };

    render(<TestComponent />);
    expect(screen.getByTestId('error-message')).toHaveTextContent('useLanguage must be used within a LanguageProvider');
  });

  test('LanguageContext allows language switching', () => {
    renderWithLanguageProvider(<TestLanguageSwitch />);
    expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
    fireEvent.click(screen.getByTestId('switch-to-en'));
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    fireEvent.click(screen.getByTestId('switch-to-ja'));
    expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
  });

  test('Header component renders brand and nav', () => {
    renderWithLanguageProvider(<Header />);
    expect(screen.getByText('theta library')).toBeInTheDocument();
    expect(screen.getByText('日本語')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Switch language to English' })).toBeInTheDocument();
  });

  test('AboutSection renders in Japanese', () => {
    renderWithLanguageProvider(<AboutSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText("I'm theta")).toBeInTheDocument();
    expect(screen.getByText(/UIコンポーネントシステムの構築やWebアプリケーション開発に携わっている/)).toBeInTheDocument();
  });

  test('AboutSection switches to English', () => {
    renderWithLanguageProvider(
      <div>
        <AboutSection />
        <TestLanguageSwitch />
      </div>
    );
    fireEvent.click(screen.getByTestId('switch-to-en'));
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText("I'm theta")).toBeInTheDocument();
    expect(screen.queryByText(/UIコンポーネントシステムの構築やWebアプリケーション開発に携わっている/)).not.toBeInTheDocument();
  });
});

describe('ThemeContext Tests', () => {
  test('ThemeContext throws error when used outside provider', () => {
    const TestComponent = () => {
      try {
        useTheme();
        return <div>Should not render</div>;
      } catch (error) {
        return <div data-testid="theme-error-message">{(error as Error).message}</div>;
      }
    };

    render(<TestComponent />);
    expect(screen.getByTestId('theme-error-message')).toHaveTextContent('useTheme must be used within a ThemeProvider');
  });

  test('ThemeProvider restores saved theme and toggles it', async () => {
    window.localStorage.setItem('theta-theme', 'light');

    render(
      <ThemeProvider>
        <TestThemeSwitch />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    });
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');

    fireEvent.click(screen.getByTestId('toggle-theme'));

    await waitFor(() => {
      expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    });
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(window.localStorage.getItem('theta-theme')).toBe('dark');
  });
});

describe('Header Component Tests', () => {
  test('SNS Popover opens and shows links', () => {
    renderWithLanguageProvider(<Header />);

    // Initially SNS dropdown should not be visible
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument();

    // Click the Links button to open
    const linksButton = screen.getByRole('button', { name: 'SNS Links' });
    fireEvent.click(linksButton);

    // SNS links should appear
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toBeInTheDocument();
    expect(screen.queryByText('YouTube')).not.toBeInTheDocument();

    fireEvent.click(githubLink);
    expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
  });

  test('Language toggle switches language', () => {
    renderWithLanguageProvider(
      <div>
        <Header />
        <TestLanguageSwitch />
      </div>
    );

    const languageButton = screen.getByRole('button', { name: 'Switch language to English' });
    fireEvent.click(languageButton);
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.getByRole('button', { name: 'Switch language to 日本語' })).toBeInTheDocument();

    const jaButton = screen.getByRole('button', { name: 'Switch language to 日本語' });
    fireEvent.click(jaButton);
    expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
  });

  test('Theme toggle updates the document theme', async () => {
    renderWithLanguageProvider(<Header />);

    fireEvent.click(screen.getByRole('button', { name: 'Toggle theme' }));

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    });
  });
});

describe('NewsSection Component Tests', () => {
  test('NewsSection renders correctly', () => {
    renderWithLanguageProvider(<NewsSection />);
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('2026.04.26')).toBeInTheDocument();
    expect(screen.getByText('2024.05.20')).toBeInTheDocument();
  });
});

describe('HeroSection Component Tests', () => {
  test('HeroSection renders brand title', () => {
    renderWithLanguageProvider(<HeroSection />);
    expect(screen.getByText('theta library')).toBeInTheDocument();
  });

  test('HeroSection renders subtitle', () => {
    renderWithLanguageProvider(<HeroSection />);
    expect(screen.getByText(/Music.*Code/)).toBeInTheDocument();
  });
});

describe('SiteFooter Component Tests', () => {
  test('SiteFooter renders Japanese copy and developer links', () => {
    renderWithLanguageProvider(<SiteFooter />);

    expect(screen.getByText('フロントエンドエンジニア。UIシステムとWebアプリケーションを作っています。')).toBeInTheDocument();
    expect(screen.getByText('ナビゲーション')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Creative Works' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
  });

  test('SiteFooter switches to English', () => {
    renderWithLanguageProvider(
      <div>
        <SiteFooter />
        <TestLanguageSwitch />
      </div>
    );

    fireEvent.click(screen.getByTestId('switch-to-en'));

    expect(screen.getByText('Frontend engineer building UI systems and web applications.')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Creative Works' })).toBeInTheDocument();
  });
});

describe('WorksSection Component Tests', () => {
  test('WorksSection renders in Japanese (default)', () => {
    renderWithLanguageProvider(<WorksSection />);
    expect(screen.getByText('作品集')).toBeInTheDocument();
    expect(screen.getAllByText('Creative Works').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Coding').length).toBeGreaterThan(0);
  });

  test('WorksSection shows music and coding previews', () => {
    renderWithLanguageProvider(<WorksSection />);
    expect(screen.getByText('Spectrum')).toBeInTheDocument();
    expect(screen.getByText('stella-ui')).toBeInTheDocument();
  });
});

describe('Page Integration Tests', () => {
  test('Components render without errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    renderWithLanguageProvider(
      <div>
        <Header />
        <AboutSection />
        <NewsSection />
        <HeroSection />
        <WorksSection />
      </div>
    );
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
