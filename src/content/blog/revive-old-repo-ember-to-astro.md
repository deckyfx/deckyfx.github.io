---
title: Reviving an Old Repo — Migrating from Ember to Astro
description: My personal site sat untouched as a broken Ember.js app since 2016. Here's how I finally replaced it with a modern Astro site.
date: 2026-06-04
tags: [astro, ember, migration, bun]
---

My GitHub Pages site — `deckyfx.github.io` — was last touched in 2016. It was an Ember.js app, and it had been broken for years. Every time I opened it I just closed the tab and moved on.

This time I didn't.

## What was there

The repo was a full Ember CLI project. `bower.json`, `ember-cli-build.js`, `.bowerrc`, the works. Nothing ran. Node version was wrong, Bower was already dead, and even if I got it running it would've been a blank page from a framework nobody ships anymore.

It wasn't worth fixing. It was worth replacing.

## Why Astro

I wanted something that would just work for a personal profile + blog. No backend, no CMS, no database. Markdown files, a build step, and a static output I can drop on Cloudflare Pages.

Astro fits that perfectly:
- **Zero JS by default** — ships no JavaScript unless you ask for it
- **Content Collections** — built-in Markdown support with typed frontmatter
- **Fast builds** — especially with Bun as the runtime
- **No framework lock-in** — I can add React, Vue, or Svelte components if I ever need them

## The migration

The migration was basically a wipe and rebuild. Nothing from the old Ember app was worth keeping — not the templates, not the styles, not the config. I created a new branch, deleted everything except `.git/` and `LICENSE`, and ran:

```bash
bun create astro@latest .
```

Tailwind went in next:

```bash
bunx astro add tailwind
```

Then content collections, a layout, the homepage, blog listing, and individual post pages. The whole thing took one session.

## Stack choices

**Bun over Node** — faster installs, faster dev server startup, and I'm already using Bun for everything else. No reason to reach for Node.

**Tailwind v4** — the new version uses `@import "tailwindcss"` in CSS instead of a config file. Much cleaner.

**`@fontsource` over Google Fonts CDN** — fonts get bundled into the static output by Vite. No external network request on page load, no privacy concerns, works offline.

**`lucide-astro` for icons** — tree-shaken inline SVGs. Zero runtime JavaScript.

## Hosting

The new site lives on Cloudflare Pages. Free tier, unlimited requests, automatic deploys on push to `master`. The old GitHub Pages URL (`deckyfx.github.io`) has a custom domain set to `decky.win` so it auto-redirects.

## What's next

The site is sparse intentionally. I'd rather have a clean foundation I actually maintain than a feature-rich thing I abandon again. Blog posts when I have something worth writing. Projects page when I have screenshots worth showing.

Eight years late, but it's done.
