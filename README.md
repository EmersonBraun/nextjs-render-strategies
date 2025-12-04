# React Rendering Strategies

A comprehensive, interactive guide to understanding and implementing different React rendering strategies. This project demonstrates various rendering approaches with live examples, visual diagrams, and detailed comparisons.

🌐 **Live Demo**: [render-strategies.emersonbraun.dev](https://render-strategies.emersonbraun.dev)  
📦 **Repository**: [github.com/emersonbraun/nextjs-render-strategies](https://github.com/emersonbraun/nextjs-render-strategies)

## 🚀 Features

- **Interactive Demos**: See each rendering strategy in action with live examples
- **Visual Diagrams**: Understand the flow of each rendering approach
- **Side-by-Side Comparisons**: Compare rendering modes across key metrics
- **Practical Examples**: Real-world use cases and code examples
- **Multi-language Support**: Available in English, Portuguese, Spanish, and Ukrainian
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## 📚 Rendering Strategies Covered

- **[CSR](https://render-strategies.emersonbraun.dev/en/csr)** - Client-Side Rendering
- **[SSR](https://render-strategies.emersonbraun.dev/en/ssr)** - Server-Side Rendering
- **[SSG](https://render-strategies.emersonbraun.dev/en/ssg)** - Static Site Generation
- **[ISR](https://render-strategies.emersonbraun.dev/en/isr)** - Incremental Static Regeneration
- **[RSC](https://render-strategies.emersonbraun.dev/en/rsc)** - React Server Components
- **[Streaming](https://render-strategies.emersonbraun.dev/en/streaming)** - React Streaming with Suspense
- **[PPR](https://render-strategies.emersonbraun.dev/en/ppr)** - Partial Prerendering
- **[Comparison](https://render-strategies.emersonbraun.dev/en/comparison)** - Side-by-side comparison of all strategies

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router (used for this demo)
- [React 19](https://react.dev/) - UI library
- [Remix](https://remix.run/) - Full-stack web framework
- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Biome](https://biomejs.dev/) - Linting and formatting

## 🏃 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 Project Structure

```text
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

## 🌍 Internationalization

This project supports multiple languages:

- English (en)
- Portuguese (pt)
- Spanish (es)
- Ukrainian (uk)

The default language is English. You can switch languages using the language selector in the navigation.

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contributors

Thank you to all the wonderful people who have contributed to this project!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/emersonbraun"><img src="https://github.com/emersonbraun.png?s=100" width="100px;" alt="Emerson Braun"/><br /><sub><b>Emerson Braun</b></sub></a><br /><a href="https://github.com/emersonbraun/nextjs-render-strategies/commits?author=emersonbraun" title="Code">💻</a> <a href="#design-emersonbraun" title="Design">🎨</a> <a href="#maintenance-emersonbraun" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## 👤 Author

### Emerson Braun

- LinkedIn: [@emersonbraun](https://linkedin.com/in/emerson-braun)
- Twitter/X: [@emersonbraun](https://x.com/emersonfbraun)
- GitHub: [@emersonbraun](https://github.com/emersonbraun)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ by Emerson Braun
