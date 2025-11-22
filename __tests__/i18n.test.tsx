import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageProvider, useLanguage } from '../src/app/contexts/LanguageContext';
import AboutSection from '../src/app/components/AboutSection';
import Header from '../src/app/components/Header/index';

// Test component to access and manipulate language context
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

const renderWithLanguageProvider = (component: React.ReactNode) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
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

  test('Header component renders and switches languages', () => {
    renderWithLanguageProvider(
      <div>
        <Header />
        <TestLanguageSwitch />
      </div>
    );
    expect(screen.getByText('theta library')).toBeInTheDocument();
    const jaButton = screen.getByRole('button', { name: '日本語' });
    const enButton = screen.getByRole('button', { name: 'English' });
    expect(jaButton).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
    fireEvent.click(enButton);
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    fireEvent.click(jaButton);
    expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
  });

  test('AboutSection renders in Japanese', () => {
    renderWithLanguageProvider(<AboutSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText("I'm theta")).toBeInTheDocument();
    // Check for part of the background text
    expect(screen.getByText(/ボカロ、DTMを中心に音楽制作活動を行う/)).toBeInTheDocument();
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
    // Check that Japanese text is NOT present
    expect(screen.queryByText(/ボカロ、DTMを中心に音楽制作活動を行う/)).not.toBeInTheDocument();
  });
});

describe('Page Integration Tests', () => {
  test('Components render without errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    renderWithLanguageProvider(
      <div>
        <Header />
        <AboutSection />
      </div>
    );
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
