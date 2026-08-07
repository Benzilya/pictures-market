import type { Metadata } from "next";
import CollectionExplorer from "../../components/CollectionExplorer";
import { artworks } from "../../data/artworks";

export const metadata: Metadata = {
  title: "Collection — Iliano Babenchini",
  description: "Explore available original paintings by Iliano Babenchini, Milan. Human Presence, Italian Memory and Inner Landscapes.",
};

export default function CollectionPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="/" aria-label="Iliano Babenchini home">
          <img className="brand-mark" src="/brand/iliano-babenchini-mark.svg" alt="" />
          <span className="brand"><span>ILIANO</span><span>BABENCHINI</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/collection">Collection</a>
          <a href="/#artist">About</a>
          <a href="/#designers">Designers</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/#contact">Inquiry</a>
      </header>

      <section className="collection-page section-pad">
        <div className="collection-page-heading">
          <div>
            <p className="eyebrow">PRIVATE MUSEUM · {artworks.length} WORKS</p>
            <h1>Collection.</h1>
          </div>
          <p>Original works from Milan, each presented as a single authored object with certificate and archive record.</p>
        </div>
        <CollectionExplorer artworks={artworks} />
      </section>
    </main>
  );
}
