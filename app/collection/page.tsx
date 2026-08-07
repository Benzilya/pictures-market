import type { Metadata } from "next";
import CollectionExplorer from "../../components/CollectionExplorer";
import SiteHeader from "../../components/SiteHeader";
import { artworks } from "../../data/artworks";

export const metadata: Metadata = {
  title: "Collection — Iliano Babenchini",
  description: "Explore available original paintings by Iliano Babenchini, Milan. Human Presence, Italian Memory and Inner Landscapes.",
  alternates: { canonical: "/collection" },
};

export default function CollectionPage() {
  return (
    <main>
      <SiteHeader inquiryHref="/#contact" />
      <section className="collection-page section-pad">
        <div className="collection-page-heading">
          <div><p className="eyebrow">PRIVATE MUSEUM · {artworks.length} WORKS</p><h1>Collection.</h1></div>
          <p>Original works from Milan, each presented as a single authored object with certificate and archive record.</p>
        </div>
        <CollectionExplorer artworks={artworks} />
      </section>
    </main>
  );
}
