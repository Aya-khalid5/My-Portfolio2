# Aya Khaled Abdelhamid Abdelaziz — Data Analyst Portfolio

A frontend-only personal portfolio built with Next.js, React, TypeScript, and
Tailwind CSS. No backend, no API routes, no database, no environment
variables required.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & run production

```bash
npm run build
npm start
```

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx            Root layout, fonts, SEO metadata
│   ├── page.tsx               Homepage (assembles all sections)
│   ├── globals.css
│   ├── icon.tsx                Auto-generated favicon
│   ├── not-found.tsx          404 page
│   ├── projects/
│   │   ├── page.tsx           All projects
│   │   └── [slug]/page.tsx    Individual project page
│   └── certifications/
│       └── page.tsx           All certifications
├── components/                 One component per section + ui/ primitives
├── data/                        All portfolio content (edit here, not in components)
├── lib/utils.ts                 Site constants (name, email, links) + cx helper
└── public/
    ├── projects/                 Project screenshots (add real files here)
    └── certificates/             Certificate images (add real files here)
```

## Updating content

All text content lives in `data/`, not inside components:

- `data/projects.ts` — projects, metrics, tools, links, image paths
- `data/skills.ts` — core tools and skill categories
- `data/services.ts` — services offered
- `data/certifications.ts` — certifications
- `data/experience.ts` — training/experience
- `data/stats.ts` — homepage statistics
- `lib/utils.ts` — name, email, LinkedIn, GitHub (the `SITE` object)

## Adding your real screenshots and certificate images

Project cards and certificate cards show a "Screenshot coming soon" /
placeholder tile until a matching image file exists. Drop files in with
these **exact** filenames and they'll appear automatically — no code
changes needed:

**Project screenshots** → `public/projects/`
- `social-media-dashboard.png`
- `sales-operations-dashboard.png`
- `digital-marketing-dashboard.png`
- `food-waste-app.png`
- `smart-recruitment.png`
- `asd-screening.png`

**Certificate images** → `public/certificates/`
- `nti-data-analysis.png`
- `power-bi.png`
- `sql-basics.png`
- `google-advanced-data-analytics.png`

## Adding real links (GitHub, live demos, credentials)

These are placeholders (`"#"`) until you replace them — the site does not
invent URLs.

- Project GitHub/demo links: edit `githubUrl` and `projectUrl` in
  `data/projects.ts`. Once a value is no longer `"#"`, the button becomes a
  working link automatically.
- Certificate credential links: edit `credentialUrl` in
  `data/certifications.ts`.
- Certificate issue dates: edit `issueDate` in `data/certifications.ts`
  (currently `[ADD ISSUE DATE]`).

## GitHub setup

```bash
git init
git add .
git commit -m "Initial commit: data analyst portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploying to Vercel

1. Push this project to a GitHub repository (see above).
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — leave the default build settings
   (`npm run build`, output directory managed automatically).
4. No environment variables are required.
5. Click **Deploy**.

Every subsequent push to `main` redeploys automatically.

## Final deployment checklist

- [ ] `npm install` runs cleanly
- [ ] `npm run build` completes with no errors
- [ ] Real project screenshots added to `public/projects/`
- [ ] Real certificate images added to `public/certificates/`
- [ ] `githubUrl` / `projectUrl` updated in `data/projects.ts`
- [ ] `credentialUrl` / `issueDate` updated in `data/certifications.ts`
- [ ] Repository pushed to GitHub
- [ ] Repository imported into Vercel and deployed
- [ ] Live URL checked on mobile (375px), tablet (768px), and desktop
