# shared/

Generic Astro components and base styles reused by every site. No visual design lives here: all styling reads CSS variables (tokens) that each site defines.

## Contents
- `components/BaseLayout.astro` — `<html lang="pt-BR">`, SEO head (title, description, canonical, Open Graph, Twitter card), favicon prop (default `/favicon.svg`), skip link. Slots: default (main), `header`, `footer`, `head`.
- `components/Header.astro` — brand wordmark, nav links, optional CTA, mobile menu toggle (`aria-expanded`, Esc closes and returns focus).
- `components/Footer.astro` — brand, optional links, legal line, default slot.
- `components/Button.astro` — `<a>` when `href` is set, else `<button>`; `variant`: `primary` | `secondary`.
- `components/Card.astro` — `title`, optional `href`, `headingLevel`; slots: `media`, default.
- `components/Accordion.astro` — FAQ via native `<details>/<summary>` (keyboard-accessible, no JS).
- `components/Form.astro` — labelled fields (`text|email|tel|textarea`), `action`, `method`.
- `components/Img.astro` — `astro:assets` `<Image>`; lazy by default, `priority` for hero images. Remote URLs need `width`/`height` and `image.domains` in the site config.
- `styles/base.css` — reset, `:focus-visible`, `.container`, `.visually-hidden`, `.skip-link`, reduced motion. Imported by BaseLayout.

## Required tokens
Each site's tokens file must define: `--color-{bg,surface,text,border,primary,on-primary,focus}`, `--font-{body,heading}`, `--text-{sm,base}`, `--leading-{body,heading}`, `--space-{xs,sm,md,lg,xl,gutter}`, `--container-max`, `--header-height`, `--border-width`, `--radius-{button,card,input}`, `--focus-{width,offset}`, `--duration-fast`, `--opacity-hover`, `--z-{header,skip}`. See `sites/_template/src/styles/tokens.css`.

## New site
1. Copy `sites/_template` to `sites/NN-slug`, set `name` in `package.json` and `site` in `astro.config.mjs`.
2. Replace `src/styles/tokens.css` and `src/content/site.json`.
3. `npm install && npm run build` (runs `astro check` then `astro build`).

Keep the `paths` entries in the site `tsconfig.json`: they let files in `shared/` (outside the site folder) resolve `astro` types from the site's `node_modules`.

## Scripts
- `scripts/build-all.sh` — install + build every site.
- `scripts/check-all.sh` — `astro check` every site.
