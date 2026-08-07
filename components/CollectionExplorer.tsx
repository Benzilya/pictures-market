"use client";

import { useMemo, useState } from "react";
import type { Artwork } from "../data/artworks";
import ArtworkMedia from "./ArtworkMedia";

type Props = { artworks: Artwork[] };
type SeriesFilter = "All" | Artwork["series"];

export default function CollectionExplorer({ artworks }: Props) {
  const [series, setSeries] = useState<SeriesFilter>("All");
  const [availability, setAvailability] = useState<"All" | Artwork["status"]>("All");

  const visible = useMemo(
    () => artworks.filter((artwork) => (series === "All" || artwork.series === series) && (availability === "All" || artwork.status === availability)),
    [artworks, series, availability]
  );

  return (
    <>
      <div className="collection-toolbar" aria-label="Artwork filters">
        <label><span>Series</span><select value={series} onChange={(event) => setSeries(event.target.value as SeriesFilter)}><option>All</option><option>Human Presence</option><option>Italian Memory</option><option>Inner Landscapes</option></select></label>
        <label><span>Availability</span><select value={availability} onChange={(event) => setAvailability(event.target.value as "All" | Artwork["status"])}><option>All</option><option>Available</option><option>Reserved</option><option>Sold</option></select></label>
        <p className="filter-count">{visible.length} works</p>
      </div>

      <div className="collection-page-grid">
        {visible.map((artwork) => (
          <a className="collection-tile" href={`/artwork/${artwork.slug}`} key={artwork.slug}>
            <ArtworkMedia artwork={artwork} className="collection-tile-image" showStatus showViewLabel />
            <div className="collection-tile-meta"><div><h2>{artwork.title}</h2><p>{artwork.year} · {artwork.medium}</p><p>{artwork.dimensions} · {artwork.series}</p></div><strong>{artwork.price}</strong></div>
          </a>
        ))}
      </div>
    </>
  );
}
