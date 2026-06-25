# Mohammad El Zein — Portfolio

Personal portfolio website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Replaces the previous static HTML/CSS/JS version.

## Stack

- **Next.js** (App Router, static export friendly)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll-reveal animations
- **next-themes** — dark/light mode (dark by default)
- **lucide-react** — icons

## Project structure

```
src/
  app/            # root layout, global styles, page entry
  components/     # Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer, theme toggle
  data/content.ts # all resume/profile content in one place
  lib/utils.ts    # cn() class-merging helper
public/
  llebenslauf.pdf # downloadable CV
```

To update content (experience, projects, skills, etc.), edit `src/data/content.ts` — no JSX changes needed.

## Local development

```bash  
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start   # serve the production build locally
```

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset "Next.js" is auto-detected — no config needed.
4. Deploy. Every push to `main` redeploys automatically.

### Netlify

1. Push this repo to GitHub.
2. New site from Git at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`
4. Publish directory: handled automatically via the official `@netlify/plugin-nextjs` (Netlify auto-installs it for Next.js projects).

### Static export (any static host)

If you don't need SSR (this site doesn't), you can fully static-export it:

```js
// next.config.ts
const nextConfig = { output: "export" };
```

```bash
npm run build
```

The static site is generated in `out/` and can be deployed to any static host (GitHub Pages, Netlify, S3, etc.).
