# Portfolio — Selvet Elif Demirel

Personal portfolio site built with React and Vite, styled with Tailwind CSS. This repository contains the source for a small, responsive portfolio that showcases projects, skills and contact information.

**Live demo:** Will be here soon!

## Quick start

1. Install dependencies

```powershell
npm install
```

2. Start development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview the production build locally

```powershell
npm run preview
```

## Project structure

- `index.html` — HTML entry
- `src/main.jsx` — App bootstrap and React root
- `src/App.jsx` — Main application component and page sections
- `src/index.css`, `src/App.css` — Global and component styles
- `src/assets/` — Images, icons and other static assets
- `vite.config.js`, `postcss.config.js`, `tailwind.config.js` — Tooling and build config
- `package.json` — Scripts and dependencies

## Features

- Fast development with Vite HMR
- React functional components (JSX)
- Tailwind CSS utility-first styling
- Responsive layout and accessible components
- Simple, easily-editable project and content structure

## Customization

- Update content and sections in `src/App.jsx`.
- Add or replace images in `src/assets/` and reference them from components.
- Tailwind settings and custom themes live in `tailwind.config.js`.
- Adjust global styles in `src/index.css` and component styles in `src/App.css`.

## Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production bundle
- `npm run preview` — Serve the production build locally
- `npm run lint` — Run ESLint (if configured)

## Deployment

This site can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, Cloudflare Pages). Typical steps:

1. Build: `npm run build`
2. Deploy the `dist/` folder produced by Vite

## Contributing

- Edit content in `src/` and open a pull request. Keep changes small and focused.
- Run `npm run lint` before creating a PR if linting is set up.

## License

This project is licensed under the MIT License — see `LICENSE` for details.

## Contact

If you'd like to reach out, add your preferred contact method here (email, LinkedIn, etc.).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
