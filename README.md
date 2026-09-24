# Timi Festus — Portfolio

Next.js (App Router) + TypeScript + Tailwind v4 portfolio site for a full-stack developer — any kind of website or web app, plus AI automation.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you ship it

- **`app/components/Contact.tsx`** — swap the placeholder `hello@timifestus.dev` for your real email, and confirm the Fiverr URL.
- **`app/layout.tsx`** — update the `metadata` description if you want to tweak the SEO/share text.
- Add a real domain + deploy on Vercel (`vercel deploy`) when ready — matches the stack you already use for RevaCore.

## Structure

```
app/
  layout.tsx        Fonts (Space Grotesk / Inter / IBM Plex Mono) + metadata
  page.tsx           Assembles the sections below
  globals.css        Design tokens (blueprint/cyanotype palette) + grid backgrounds
  components/
    Nav.tsx          Sticky nav
    Hero.tsx          Hero with animated "drafted" floor-plan SVG + title block
    Services.tsx      4 build modules: Websites, Web apps, Data tools, AI Automation
    TechStack.tsx      Stack as a materials schedule
    Process.tsx        How-I-work statement block
    Contact.tsx         CTA + footer
```

## Design direction

Blueprint / cyanotype aesthetic — grid lines, coordinate ticks, and a drafting
title block, since the blueprint/drafting aesthetic reads as craft and precision
rather than a generic SaaS template. Palette
lives in `app/globals.css` as CSS variables (`--ink`, `--blueprint`, `--brass`,
`--patina`, `--paper`) if you want to retune it.
# Timi
