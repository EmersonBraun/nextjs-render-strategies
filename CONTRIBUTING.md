# Contributing to Next.js Rendering Strategies

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Adding Translations](#adding-translations)
- [Reporting Issues](#reporting-issues)

## 📜 Code of Conduct

This project adheres to a code of conduct that all contributors are expected to follow. Please be respectful, inclusive, and constructive in all interactions.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nextjs-render-strategies.git
   cd nextjs-render-strategies
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/emersonbraun/nextjs-render-strategies.git
   ```

## 💻 Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**: Fix issues and improve stability
- ✨ **New features**: Add new rendering strategies or enhance existing ones
- 📝 **Documentation**: Improve docs, add examples, or fix typos
- 🌍 **Translations**: Add or improve translations for different languages
- 🎨 **UI/UX improvements**: Enhance the visual design and user experience
- ⚡ **Performance**: Optimize code and improve performance
- 🧪 **Tests**: Add or improve test coverage

### Contribution Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following our [coding standards](#coding-standards)

3. **Test your changes**:
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes** following our [commit guidelines](#commit-guidelines)

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 📐 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Follow strict typing practices
- Avoid `any` types when possible
- Use meaningful variable and function names

### Code Style

- **Indentation**: 2 spaces
- **Formatting**: Use Biome formatter (`npm run format`)
- **Linting**: Follow Biome linter rules (`npm run lint`)
- **Line length**: Keep lines under 100 characters when possible

### React/Next.js Conventions

- Use functional components with TypeScript
- Prefer Server Components when possible
- Use `"use client"` directive only when necessary
- Follow Next.js App Router conventions
- Use the `@/` alias for imports from `src/`

### Component Structure

```tsx
// 1. Imports
import type { ComponentProps } from "react";
import { Component } from "@/components/component";

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Component
export function MyComponent({ prop }: Props) {
  // Component logic
  return (
    // JSX
  );
}
```

### File Naming

- Components: `kebab-case.tsx` (e.g., `benefits-card.tsx`)
- Pages: `page.tsx` or `layout.tsx`
- Utilities: `kebab-case.ts` (e.g., `utils.ts`)

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools
- `i18n`: Translation updates

### Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Examples

```
feat(csr): add new diagram visualization

fix(ssr): resolve hydration mismatch error

docs(readme): update installation instructions

i18n(pt): add Portuguese translations for comparison page
```

## 🔄 Pull Request Process

1. **Update your branch** with the latest changes from `main`:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Ensure all checks pass**:
   - Code must be formatted (`npm run format`)
   - Linter must pass (`npm run lint`)
   - Build must succeed (`npm run build`)

3. **Write a clear PR description**:
   - What changes were made?
   - Why were these changes necessary?
   - How were they tested?
   - Include screenshots for UI changes

4. **Link related issues** if applicable

5. **Wait for review** and address any feedback

### PR Checklist

- [ ] Code follows the project's coding standards
- [ ] Code is properly formatted and linted
- [ ] Build passes successfully
- [ ] Changes are tested locally
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional commits
- [ ] PR description is clear and comprehensive

## 🌍 Adding Translations

This project supports multiple languages. To add or update translations:

1. **Find the translation files** in `messages/`:
   - `en.json` - English (base)
   - `pt.json` - Portuguese
   - `es.json` - Spanish
   - `uk.json` - Ukrainian

2. **Add your translations** following the existing structure

3. **Test your translations**:
   - Switch languages in the app
   - Verify all strings are translated
   - Check for missing keys

4. **For new languages**:
   - Create a new `{locale}.json` file
   - Add the locale to `src/i18n/routing.ts`
   - Update the language selector component

### Translation Guidelines

- Maintain the same JSON structure as `en.json`
- Keep translations contextually accurate
- Use appropriate technical terminology
- Test with different text lengths (some languages are longer)

## 🐛 Reporting Issues

### Before Reporting

- Check if the issue already exists
- Verify it's reproducible with the latest version
- Gather relevant information (browser, OS, error messages)

### Issue Template

When creating an issue, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**:
  - OS and version
  - Browser and version
  - Node.js version
- **Screenshots**: If applicable
- **Additional Context**: Any other relevant information

## 📚 Project Structure

```
src/
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── csr/           # Client-Side Rendering demo
│       ├── ssr/           # Server-Side Rendering demo
│       ├── ssg/           # Static Site Generation demo
│       ├── isr/           # Incremental Static Regeneration demo
│       ├── rsc/           # React Server Components demo
│       ├── streaming/     # Streaming demo
│       ├── ppr/           # Partial Prerendering demo
│       └── comparison/    # Comparison page
├── components/            # Reusable components
├── i18n/                  # Internationalization config
└── lib/                   # Utility functions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## ❓ Questions?

If you have questions or need help:

- Open an issue with the `question` label
- Check existing issues and discussions
- Review the documentation in the README

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🎉**

