# Yomna Salem, CV and portfolio

Live at [atlno1fan.github.io/MyCV](https://atlno1fan.github.io/MyCV/).

A single-page CV: about, experience, projects, education and skills, with the CV also available as a
two-page and a one-page PDF. The content lives in one typed file; the rest is the shell that renders it.

## Stack

- React 18 with TypeScript (strict), built by Vite
- Tailwind CSS with design tokens as CSS variables, so the light and dark palettes share one set of classes
- Self-hosted fonts (Source Serif 4 and Source Sans 3 through Fontsource): no third-party requests at all
- Vitest and Testing Library for tests, ESLint (TypeScript, React, hooks, accessibility) and Prettier
- GitHub Actions: every pull request is linted, type-checked, tested and built; every push to `main` is
  verified the same way and then published to GitHub Pages

## Working on it

```sh
npm ci            # install exactly what the lockfile says
npm run dev       # http://localhost:3010/MyCV/
npm run check     # lint, typecheck, test and build, the same gate CI runs
npm run cv:pdf    # rebuild the two CV PDFs in public/ from cv/*.html
```

Node 20 or newer (see `.nvmrc`).

## Editing the content

Everything visible is in [`src/data/portfolio.ts`](src/data/portfolio.ts), typed by
[`src/types.ts`](src/types.ts). Sections appear only when they have content, a role folds its bullets
behind "Show more" when it sets `highlightCount`, and a project shows a link only when it has one.
`src/data/portfolio.test.ts` checks the content for blanks, duplicate skills and non-https links.

The PDF CVs are separate documents in [`cv/`](cv/): edit `cv-full.html` or `cv-1page.html`, run
`npm run cv:pdf`, and commit the regenerated files in `public/`.

## Security choices

- A strict Content Security Policy (`default-src 'self'`, no inline scripts or styles, no third-party
  origins) is injected into production builds by the Vite plugin in `vite.config.ts`. GitHub Pages cannot
  send headers, so it ships as a meta tag.
- Links that leave the site open in a new tab with `rel="noopener noreferrer"`; the referrer policy is
  `strict-origin-when-cross-origin`.
- No analytics, no cookies, no forms, no runtime network requests.
- GitHub Actions are pinned to commit hashes, workflows run with read-only permissions except the publish
  step, and Dependabot keeps npm packages and Actions current.

## Structure

```
index.html                page shell, metadata, link previews, JSON-LD
src/main.tsx              mounts the app and loads fonts and styles
src/App.tsx               page composition: header, hero, sections, footer
src/components/           one component per part of the page
src/data/portfolio.ts     all content
src/hooks/                the active-section observer
src/lib/links.ts          link and public-file helpers
src/test/setup.ts         test environment
cv/                       CV documents and the PDF build script
public/                   favicon, share image, robots.txt, CV PDFs
```
