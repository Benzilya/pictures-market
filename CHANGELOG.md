# Changelog

## v0.9.0 — Artwork Quality Upgrade

- Replaced CSS background cropping in the homepage, catalogue and artwork detail views with a reusable native-image media renderer.
- Added board-specific native image positioning for both supplied artwork presentation boards.
- Removed aggressive background-size hover zooming that caused visible pixelation and mosaic artifacts.
- Connected `Respiro di luce` to its dedicated artwork asset instead of the shared presentation board.
- Updated hero, featured works, full archive, catalogue filters, detail pages and related works to use the new renderer.
- Added lazy decoding for catalogue imagery and eager loading for hero/detail media.
- Kept catalogue metadata independent from media so dedicated high-resolution masters can be dropped in incrementally.

## v0.8.0 — Final QA + Launch

- Added shared responsive navigation across homepage, catalogue and artwork pages.
- Added mobile menu and IT / EN / RU language switcher.
- Added localized Italian and Russian homepage experiences.
- Replaced hard-coded placeholder email behavior with environment-driven inquiry handling.
- Added safe preview behavior when no studio email is configured.
- Replaced hard-coded production origin with `NEXT_PUBLIC_SITE_URL`.
- Added localized URLs to sitemap and language alternates to metadata.
- Added `.env.example` for launch configuration.
- Added GitHub Actions typecheck and production-build verification.
- Finalized homepage inquiry flow and release version label.
- Updated launch documentation.

## v0.7.0 — Release Candidate

- Added a dedicated `/collection` catalogue route.
- Added client-side filters for series and availability.
- Added static artwork routes for all 22 works at `/artwork/[slug]`.
- Added artwork-specific metadata and JSON-LD `VisualArtwork` schema.
- Added acquisition details, specifications, related works and inquiry flows.
- Added a reusable inquiry form that prepares a pre-filled studio email.
- Connected homepage cards, hero and archive items to artwork detail pages.
- Added premium release-candidate responsive styles.
- Added generated sitemap and robots metadata.
- Added a premium not-found page.
- Updated local-development and release documentation.

## v0.6.0 — Luxury Experience

- Expanded the catalogue from 12 to 22 artworks.
- Integrated the second supplied artwork presentation board.
- Added board-aware crop handling for both artwork sources.
- Added the IB monogram logo and brand lockup.
- Added favicon/app icon.
- Added a certificate of authenticity template.
- Added an authenticity section to the homepage.
- Expanded metadata and Open Graph configuration.
- Updated the homepage featured selection to mix both supplied collections.
- Updated local setup and repository-sync documentation.

## v0.4.0 — Real Artwork Catalogue

- Integrated the first supplied artwork board.
- Added 12 artwork records with title, year, medium, size, series, status and pricing.
- Replaced abstract placeholders in the hero and gallery with artwork previews.

## v0.3.0 — Working Frontend

- Initialized the Next.js application.
- Added responsive homepage, premium navigation, hero, gallery, artist section, designers section, inquiry CTA and footer.
