# Theta Programming Portfolio

[![CI Pipeline](https://github.com/theta-prog/theta-prog-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/theta-prog/theta-prog-portfolio/actions/workflows/ci.yml)
[![CD Pipeline](https://github.com/theta-prog/theta-prog-portfolio/actions/workflows/cd.yml/badge.svg)](https://github.com/theta-prog/theta-prog-portfolio/actions/workflows/cd.yml)
[![codecov](https://codecov.io/gh/theta-prog/theta-prog-portfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/theta-prog/theta-prog-portfolio)

<p align="center">
  <img src="src/app/favicon.ico" />
</p>

A modern, responsive portfolio website built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [TailwindCSS](https://tailwindcss.com/). Features comprehensive internationalization support and automated CI/CD pipeline.

## Features

- **Internationalization**: Japanese/English language support
- **Modern Design**: Clean, responsive design with dark mode support
- **Performance**: Optimized for speed and SEO
- **Testing**: Comprehensive test coverage with Jest and React Testing Library
- **CI/CD**: Automated testing, building, and deployment
- **Mobile-First**: Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/theta-prog/theta-prog-portfolio.git
cd theta-prog-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Testing

Run the test suite:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run type-check` - Run TypeScript type checking

## Deployment

This project uses automated deployment through GitHub Actions:

- **CI Pipeline**: Runs tests, linting, and builds on every push/PR
- **CD Pipeline**: Deploys to production on main branch push
- **Performance**: Lighthouse CI checks for performance regressions

### Manual Deployment

The project is configured for easy deployment to various platforms:

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload the `out` folder to Netlify
```

#### GitHub Pages
Enable GitHub Pages in repository settings and push to main branch.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── Header/        # Header component with translations
│   │   ├── AboutSection/  # About section component
│   │   ├── ContactSection/# Contact section component
│   │   └── HobbiesSection/# Hobbies section component
│   ├── contexts/          # React contexts
│   │   └── LanguageContext.tsx # Internationalization context
│   ├── translations/      # Translation files
│   │   ├── en.ts         # English translations
│   │   ├── ja.ts         # Japanese translations
│   │   └── index.ts      # Translation exports
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── __tests__/             # Test files
└── public/                # Static assets
```

## Internationalization

The project supports multiple languages through a custom React context:

- **Japanese** (default)
- **English**

To add a new language:

1. Create a new translation file in `src/app/translations/`
2. Add the language to the `LanguageContext`
3. Update component translations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Tested with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)
- Deployed with [Vercel](https://vercel.com/)

---

