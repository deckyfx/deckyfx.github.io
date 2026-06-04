# Handover: deckyfx.github.io → New Astro Personal Site

## Context

This repo was previously a 2016 Ember.js personal page — completely outdated and broken.
We are rebuilding it from scratch as a modern **Astro** site to serve as a personal profile + blog.

## Owner

- GitHub: [@deckyfx](https://github.com/deckyfx)
- Domain: `decky.win`

## Goal

Replace the old Ember app with a clean Astro site that serves as:
- `decky.win` → personal profile/homepage
- `decky.win/blog` → personal blog (markdown-based, no CMS)

## Hosting Plan

| URL | Host | Notes |
|-----|------|-------|
| `decky.win` | Cloudflare Pages | free, unlimited requests, static |
| `decky.win/blog` | same Cloudflare Pages project | Astro content collections |
| `deckyfx.github.io` | GitHub Pages | set `decky.win` as custom domain → auto-redirects |
| `blog.decky.win` | redirect | point to `decky.win/blog` |

**Why Cloudflare Pages (not Workers):**
- Unlimited requests on free tier (Workers has 100k/day cap)
- Better suited for static sites
- No paid features required
- Previous blog (`emdash-blog`) used EmDash CMS on Cloudflare Worker — too complex, obscure v0.1.0 engine, many features behind paid tier — being abandoned in favour of this simpler approach

## What to Build

### Tech Stack
- **Astro** — static site generator
- **Bun** — package manager / runtime
- **Tailwind CSS** — styling
- **Astro Content Collections** — for blog posts (just `.md` files, no CMS)
- **Cloudflare Pages** — deployment target (use `@astrojs/cloudflare` adapter — but actually for fully static output, use `output: 'static'` — no adapter needed for Cloudflare Pages static)

### Site Structure
```
/                   → profile homepage
/blog               → blog post listing
/blog/[slug]        → individual blog post
```

### Profile Page Should Include
- Short bio / intro
- Links to active/notable projects (see below)
- Social links (GitHub, etc.)

### Notable Projects to Feature
- `dioxus-ipc-bridge` ⭐⭐ — Rust lib for HTTP-like IPC bridge in Dioxus
- `dioxus-react-integration` ⭐⭐ — Rust lib to develop Dioxus apps in React JS
- `react-native-printer` ⭐⭐⭐ — React Native ESC/POS printer module
- `ragnarok-online` ⭐⭐ — Dockerized Ragnarok Online private server stack
- `manga-reader` ⭐ — Manga Reader + OCR + Translation
- `insomnia-client` — CLI HTTP client compatible with Insomnia YAML
- `anpan-os` — CasaOS alternative powered by Bun
- `agenthub` — AI agent fleet dashboard

## First Steps (for the new session)

1. **Wipe** the old Ember.js files — delete everything except `.git/`
2. **Init Astro** inside the repo:
   ```bash
   bun create astro@latest .
   ```
   Choose: minimal template, TypeScript strict, Tailwind
3. **Add content collections** for blog
4. **Build** profile homepage and blog listing page
5. **Configure** for static output (no SSR needed):
   ```js
   // astro.config.mjs
   export default defineConfig({
     output: 'static',
   })
   ```
6. **Deploy** to Cloudflare Pages — connect repo, build command `bun run build`, output dir `dist`
7. **Set custom domain** `decky.win` in Cloudflare Pages
8. **Set custom domain** `decky.win` in GitHub Pages settings of this repo → `deckyfx.github.io` will auto-redirect

## Files to Delete (old Ember app)
- `app/`, `assets/`, `config/`, `fonts/`, `public/`, `tests/`, `vendor/`
- `bower.json`, `ember-cli-build.js`, `.bowerrc`, `.ember-cli`, `.jshintrc`, `.travis.yml`, `.watchmanconfig`
- `crossdomain.xml`, `testem.js`, `note.txt`, `index.html`, `package.json`
- Keep: `.git/`, `LICENSE`
