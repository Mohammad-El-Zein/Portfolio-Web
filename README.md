# Mohammad El Zein — Portfolio

Personal portfolio website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. 

## Stack

- **Next.js** (App Router, static export via `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll-reveal animations
- **next-themes** — dark/light mode (dark by default)
- **lucide-react** — icons
- Built-in **German/English** language toggle (no external i18n library)

## Project structure

```
src/
  app/                    # root layout, global styles, page entry
  components/             # Navbar, Hero, About (+ story modal), Experience, Projects,
                           # Skills, Contact, Footer, theme toggle, language toggle, ...
  data/content.ts         # all resume/profile content in one place
  data/translations.ts    # DE/EN UI strings
  lib/utils.ts            # cn() class-merging helper
  lib/base-path.ts        # GitHub Pages base path helper
  lib/language-context.tsx
public/
  Lebenslauf.pdf          # downloadable CV
  images/                 # profile photo, etc.
```


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

