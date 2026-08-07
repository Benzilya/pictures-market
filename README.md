# Iliano Babenchini — Private Museum

Premium multilingual portfolio and art-commerce website for contemporary artist Iliano Babenchini, Milan.

## Status

Working Next.js prototype with a responsive premium homepage and the first real artwork catalogue pass.

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

- premium sticky navigation
- editorial hero section
- selected works gallery
- 12-work current collection
- artwork titles, years, dimensions, series and pricing
- artist statement section
- designer/collector service section
- inquiry CTA
- responsive mobile layout

## Artwork media

The current artwork previews are cropped from the supplied presentation board and stored as `public/artworks/collection-board.jpg`. During the next media pass they will be replaced by individual high-resolution files for each painting.

## Brand direction

Private Museum: a digital private gallery combining museum restraint, luxury editorial design and conversion-focused art commerce.
