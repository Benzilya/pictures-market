# Iliano Babenchini — Private Museum

Premium multilingual portfolio and art-commerce website for contemporary artist Iliano Babenchini, Milan.

## Status

Working Next.js prototype with a responsive premium homepage, expanded artwork catalogue and first brand-identity pass.

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

Then refresh http://localhost:3000

If `git status` shows local changes that you do not want to lose, save them before pulling:

```bash
git add .
git commit -m "local changes"
git pull origin main
```

If the local copy is only for preview and you want it to exactly match GitHub, discard local changes first:

```bash
git fetch origin
git reset --hard origin/main
npm install
npm run dev
```

`git reset --hard` permanently deletes uncommitted local changes, so use it only for a disposable preview copy.

## Production build

```bash
npm run build
npm start
```

## Current UI

The homepage currently includes:

- premium sticky navigation with IB monogram
- editorial hero section
- selected works gallery
- 22-work current collection
- artwork titles, years, dimensions, series and pricing
- artist statement section
- authenticity / certificate section
- designer/collector service section
- inquiry CTA
- responsive mobile layout
- favicon and expanded page metadata

## Artwork media

The first collection uses the supplied presentation board. The second supplied collection is wired into the catalogue with its own board/crop system; its temporary board asset is ready to be replaced by the final extracted source image without changing catalogue code.

## Brand assets

- `public/brand/iliano-babenchini-mark.svg` — IB monogram
- `public/brand/certificate-template.svg` — certificate of authenticity
- `app/icon.svg` — favicon/app icon

## Brand direction

Private Museum: a digital private gallery combining museum restraint, luxury editorial design and conversion-focused art commerce.
