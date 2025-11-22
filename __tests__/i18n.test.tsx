import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageProvider, useLanguage } from '../src/app/contexts/LanguageContext';
import AboutSection from '../src/app/components/AboutSection';
import Header from '../src/app/components/Header/index';
import NewsSection from '../src/app/components/NewsSection';
import HeroSection from '../src/app/components/HeroSection';
import WorksSection from '../src/app/components/WorksSection';

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

describe('Header Component Tests', () => {
  test('Header renders logo image when provided', () => {
    renderWithLanguageProvider(<Header logoImage="/images/logo.png" />);
    const logo = screen.getByAltText('theta library');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
    // Note: Next.js Image component modifies the src, so we just check it exists
  });

  test('SNS Popover opens and closes', () => {
    const { container } = renderWithLanguageProvider(<Header />);
    
    // Initially popover should not be visible
    expect(screen.queryByText('YouTube')).not.toBeInTheDocument();
    
    // Click SNS button to open
    const snsButton = screen.getByLabelText('SNS Links');
    fireEvent.click(snsButton);
    
    // Popover should be visible
    expect(screen.getByText('YouTube')).toBeInTheDocument();
    
    // Click overlay to close
    // The overlay is the fixed inset-0 div
    const overlay = container.querySelector('.fixed.inset-0');
    fireEvent.click(overlay!);
    
    // Popover should be closed
    expect(screen.queryByText('YouTube')).not.toBeInTheDocument();

    // Re-open to test closing by link click
    fireEvent.click(snsButton);
    const youtubeLink = screen.getByText('YouTube').closest('a');
    fireEvent.click(youtubeLink!);
    expect(screen.queryByText('YouTube')).not.toBeInTheDocument();
  });

  test('Mobile Menu opens and closes via links', () => {
    renderWithLanguageProvider(<Header />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Helper to open menu and click a link
    const openAndClickLink = (linkText: string) => {
      fireEvent.click(menuButton);
      // Get all links with text, pick the last one (mobile)
      const links = screen.getAllByText(linkText);
      const mobileLink = links[links.length - 1];
      fireEvent.click(mobileLink);
      // Menu should be closed (check if mobile specific element is gone)
      // We can check if the "SNS" label in mobile menu is gone
      expect(screen.queryByText('SNS')).not.toBeInTheDocument();
    };

    openAndClickLink('About');
    openAndClickLink('Music');
    openAndClickLink('Coding');
  });

  test('Mobile Menu language switch', () => {
    renderWithLanguageProvider(
      <div>
        <Header />
        <TestLanguageSwitch />
      </div>
    );
    
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Test English Switch
    fireEvent.click(menuButton);
    const englishButtons = screen.getAllByText('English');
    const mobileEnglishButton = englishButtons[englishButtons.length - 1];
    fireEvent.click(mobileEnglishButton);
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.queryByText('Language')).not.toBeInTheDocument(); // Menu closed

    // Test Japanese Switch
    fireEvent.click(menuButton);
    const japaneseButtons = screen.getAllByText('日本語');
    const mobileJapaneseButton = japaneseButtons[japaneseButtons.length - 1];
    fireEvent.click(mobileJapaneseButton);
    expect(screen.getByTestId('current-language')).toHaveTextContent('ja');
    expect(screen.queryByText('Language')).not.toBeInTheDocument(); // Menu closed
  });
});

describe('NewsSection Component Tests', () => {
  test('NewsSection renders correctly', () => {
    renderWithLanguageProvider(<NewsSection />);
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Renewal')).toBeInTheDocument();
    expect(screen.getByText('2024.05.20')).toBeInTheDocument();
  });
});

describe('HeroSection Component Tests', () => {
  test('HeroSection renders correctly', () => {
    render(<HeroSection />);
    expect(screen.getByText('theta library')).toBeInTheDocument();
    expect(screen.getByText('This is a Portfolio site of Theta')).toBeInTheDocument();
  });

  test('HeroSection cycles backgrounds', () => {
    jest.useFakeTimers();
    render(<HeroSection />);
    
    // Initial background should be visible (opacity-100)
    // We can check class names. The first div should have opacity-100.
    // backgrounds = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500']
    
    // Helper to get background divs
    const getBgDivs = () => {
      // We can find them by their bg classes
      const blue = document.querySelector('.bg-blue-500');
      const purple = document.querySelector('.bg-purple-500');
      return { blue, purple };
    };
    
    const { blue, purple } = getBgDivs();
    expect(blue).toHaveClass('opacity-100');
    expect(purple).toHaveClass('opacity-0');
    
    // Advance time by 3000ms
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    expect(blue).toHaveClass('opacity-0');
    expect(purple).toHaveClass('opacity-100');
    
    jest.useRealTimers();
  });
});

describe('WorksSection Component Tests', () => {
  test('WorksSection renders correctly', () => {
    render(<WorksSection />);
    expect(screen.getByText('My Works')).toBeInTheDocument();
    expect(screen.getByText('Music')).toBeInTheDocument();
    expect(screen.getByText('Coding')).toBeInTheDocument();
    
    // Check for dummy content
    expect(screen.getByText('Original Song 1')).toBeInTheDocument();
    expect(screen.getByText('Project 1')).toBeInTheDocument();
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
