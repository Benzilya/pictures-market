# Iliano Babenchini — Private Museum

Premium multilingual portfolio and art-commerce website for contemporary artist Iliano Babenchini, Milan.

## Status

Final release-candidate Next.js build with premium homepage, 22-work catalogue, artwork detail pages, filters, inquiry flow, responsive navigation, IT/EN/RU entry pages and brand identity.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS design system

## First local installation

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/Benzilya/pictures-market.git
cd pictures-market
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Updating an existing local copy

Stop the local dev server with `Ctrl + C`, then run:

```bash
cd pictures-market
git status
git pull origin main
npm install
npm run dev
```

If the local copy is only for preview and you want it to exactly match GitHub:

```bash
git fetch origin
git reset --hard origin/main
npm install
npm run dev
```

`git reset --hard` permanently deletes uncommitted local changes.

## Environment

Copy `.env.example` to `.env.local` and set these values before production deployment:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_STUDIO_EMAIL=studio@your-domain.example
```

Without `NEXT_PUBLIC_STUDIO_EMAIL`, the inquiry form stays in safe preview mode and copies the prepared inquiry instead of opening a fake email address.

## Production verification

```bash
npx tsc --noEmit
npm run build
npm start
```

A GitHub Actions workflow also runs typecheck and production build on pushes to `main` and pull requests.

## Current routes

- `/` — English premium editorial homepage
- `/it` — Italian localized homepage
- `/ru` — Russian localized homepage
- `/collection` — complete catalogue with series and availability filters
- `/artwork/[slug]` — individual artwork pages with metadata, related works and inquiry flow
- `/sitemap.xml` — environment-aware generated sitemap
- `/robots.txt` — environment-aware crawler configuration

## Current UI

- premium sticky navigation with IB monogram
- responsive mobile menu
- IT / EN / RU language switcher
- editorial hero section
- selected works gallery
- 22-work current collection
- dedicated artwork detail pages
- series and availability filtering
- artist statement section
- authenticity / certificate section
- designer/collector service section
- acquisition inquiry form
- related-artwork recommendations
- responsive mobile layouts
- premium 404 page
- favicon, metadata, JSON-LD artwork schema, sitemap and robots metadata

## Artwork media

Both supplied presentation boards are integrated into the catalogue. Board crops are temporary web previews; individual high-resolution artwork files can replace them later without changing catalogue metadata or layout code.

## Brand assets

- `public/brand/iliano-babenchini-mark.svg` — IB monogram
- `public/brand/certificate-template.svg` — certificate of authenticity
- `app/icon.svg` — favicon/app icon

## Before public launch

Only external production details remain: set the real domain and studio contact in environment variables, then run the production build and deploy to Vercel or another Next.js-compatible host.

## Brand direction

Private Museum: a digital private gallery combining museum restraint, luxury editorial design and conversion-focused art commerce.
