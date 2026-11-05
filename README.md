# Muthu Yuvaraj — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4. Every page is generated as static HTML for SEO.

## Two modes
- **Professional** (default) — clean, light, business-first.
- **Space** — galaxy theme with warp starfield, nebula, orbiting planets.

The toggle sits in the header. The visitor's choice is saved in their browser, and the content is identical in both modes, so SEO is unaffected.

## Edit content
All text lives in `src/data/site.ts`.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy (Netlify)
The site is exported as static HTML (`output: "export"` in `next.config.ts`) into `out/`.
`netlify.toml` tells Netlify to run `npm run build` and publish `out/` — no dashboard settings needed.

`NEXT_PUBLIC_SITE_URL` (set in `netlify.toml`) is used for the canonical URL, sitemap, robots.txt and the social share image. Update it if you connect a custom domain.

The old static site is kept in `legacy/` for reference.
