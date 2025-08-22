# Deployment Setup Guide

This guide will help you configure the necessary secrets and settings for the CI/CD pipeline to work properly.

## 🔐 Required GitHub Secrets

### For Vercel Deployment (Recommended)

1. **VERCEL_TOKEN**
   - Go to [Vercel Dashboard](https://vercel.com/account/tokens)
   - Click "Create Token"
   - Name: `GitHub Actions CI/CD`
   - Scope: Full Account
   - Copy the token and add it as a GitHub secret

2. **VERCEL_ORG_ID**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel link` in your project directory
   - Check `.vercel/project.json` for `orgId`
   - Add this value as a GitHub secret

3. **VERCEL_PROJECT_ID**
   - From the same `.vercel/project.json` file
   - Copy the `projectId` value
   - Add this value as a GitHub secret

### For Codecov (Optional but Recommended)

4. **CODECOV_TOKEN**
   - Go to [Codecov](https://about.codecov.io/)
   - Sign up/Login with your GitHub account
   - Add your repository
   - Copy the upload token
   - Add it as a GitHub secret

## ⚙️ Setting Up GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Navigate to **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret with the exact names above

## 🚀 Alternative Deployment Platforms

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub secrets
5. Uncomment the Netlify deployment section in `.github/workflows/cd.yml`

### GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages**
4. Uncomment the GitHub Pages deployment section in `.github/workflows/cd.yml`

## 🔍 Vercel Setup (Step-by-Step)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Link Your Project
```bash
vercel link
```
Follow the prompts to link your GitHub repository.

### 4. Get Project Configuration
```bash
cat .vercel/project.json
```

This will show you the `orgId` and `projectId` needed for GitHub secrets.

### 5. Test Deployment (Optional)
```bash
vercel --prod
```

## 🏃‍♂️ CI/CD Pipeline Overview

### Continuous Integration (CI)
- **Triggers**: Push to any branch, Pull Requests
- **Jobs**: 
  - Install dependencies
  - Run linting (ESLint)
  - Check formatting (Prettier)
  - Type checking (TypeScript)
  - Run tests with coverage
  - Build application
  - Upload coverage to Codecov
  - Run Lighthouse CI

### Continuous Deployment (CD)
- **Triggers**: 
  - Push to `main` branch (automatic)
  - Manual trigger via GitHub Actions tab
- **Jobs**:
  - Deploy to Vercel production
  - Update deployment status

## 🛡️ Branch Protection Rules (Recommended)

Set up branch protection for `main`:

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Required status checks: `CI`
   - ✅ Require conversation resolution before merging
   - ✅ Include administrators

## 📊 Monitoring and Maintenance

### Coverage Reports
- View coverage reports in the **Actions** tab after each CI run
- Codecov integration provides detailed coverage analytics
- Coverage thresholds are enforced (80% branches, 90% functions/lines/statements)

### Performance Monitoring
- Lighthouse CI runs on every build
- Performance budgets are enforced
- Reports available in Actions artifacts

### Dependency Management
- Dependabot automatically creates PRs for dependency updates
- Security updates are prioritized
- Monthly schedule for regular updates

## 🚨 Troubleshooting

### Common Issues

1. **Vercel deployment fails**
   - Check if all three Vercel secrets are correctly set
   - Ensure Vercel project is properly linked
   - Verify build command in `package.json`

2. **Tests fail in CI but pass locally**
   - Check Node.js version compatibility (CI uses 18.x and 20.x)
   - Ensure all dependencies are in `package.json`
   - Check for timezone/environment-specific test failures

3. **Lighthouse CI fails**
   - Check if the application builds successfully
   - Verify the application starts on the expected port
   - Review Lighthouse configuration in `lighthouserc.json`

4. **Coverage threshold not met**
   - Review uncovered code in coverage reports
   - Add missing tests
   - Adjust thresholds in `jest.config.js` if necessary

### Getting Help

- Check the **Actions** tab for detailed error logs
- Review the generated artifacts for reports
- Consult the official documentation:
  - [Vercel Deployment](https://vercel.com/docs)
  - [GitHub Actions](https://docs.github.com/en/actions)
  - [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🎉 Verification

After setup, verify everything works:

1. **Push a commit** to see CI pipeline run
2. **Create a Pull Request** to test PR validation
3. **Merge to main** to trigger deployment
4. **Check deployment** at your Vercel URL

Your CI/CD pipeline is now ready! 🚀
