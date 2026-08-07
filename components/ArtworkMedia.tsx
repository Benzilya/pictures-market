import type { Artwork } from "../data/artworks";

type Props = {
  artwork: Artwork;
  className?: string;
  showStatus?: boolean;
  showViewLabel?: boolean;
  eager?: boolean;
};

export default function ArtworkMedia({ artwork, className = "", showStatus = false, showViewLabel = false, eager = false }: Props) {
  const src = artwork.board === 1 ? "/artworks/collection-board.jpg" : "/artworks/collection-board-2.svg";

  return (
    <div className={`artwork-media board-media-${artwork.board} ${artwork.crop} ${className}`.trim()}>
      <img
        className="artwork-media-source"
        src={src}
        alt={`${artwork.title}, ${artwork.year} — Iliano Babenchini`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
      />
      {showStatus && <span className="status-pill">{artwork.status}</span>}
      {showViewLabel && <span className="view-label">VIEW</span>}
    </div>
  );
}
