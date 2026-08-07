import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArtworkMedia from "../../../components/ArtworkMedia";
import InquiryForm from "../../../components/InquiryForm";
import SiteHeader from "../../../components/SiteHeader";
import { artworks } from "../../../data/artworks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return artworks.map((artwork) => ({ slug: artwork.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) return {};
  return {
    title: `${artwork.title} — Iliano Babenchini`,
    description: `${artwork.title}, ${artwork.year}. ${artwork.medium}, ${artwork.dimensions}. Original painting by Iliano Babenchini, Milan.`,
    alternates: { canonical: `/artwork/${artwork.slug}` },
    openGraph: { title: `${artwork.title} — Iliano Babenchini`, description: `${artwork.medium} · ${artwork.dimensions} · ${artwork.series}`, type: "article" },
  };
}

function statementFor(series: string) {
  if (series === "Human Presence") return "A study of presence, gesture and silence. The figure is treated less as a portrait than as an emotional space shaped by light, restraint and tactile surface.";
  if (series === "Italian Memory") return "Part of an ongoing exploration of Italy as remembered atmosphere rather than documentary place: architecture, weather, water and traces of time are compressed into a painterly memory.";
  return "A work built around balance, material rhythm and the tension between colour fields. The composition is intended to change subtly with distance, daylight and the architecture around it.";
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) notFound();
  const related = artworks.filter((item) => item.series === artwork.series && item.slug !== artwork.slug).slice(0, 3);
  const numericPrice = artwork.price.replace(/[^0-9]/g, "");
  const jsonLd = {
    "@context": "https://schema.org", "@type": "VisualArtwork", name: artwork.title,
    creator: { "@type": "Person", name: "Iliano Babenchini", address: { "@type": "PostalAddress", addressLocality: "Milan", addressCountry: "IT" } },
    artMedium: artwork.medium, artform: "Painting", dateCreated: artwork.year.toString(),
    description: `${artwork.series}. ${artwork.medium}, ${artwork.dimensions}.`,
    offers: { "@type": "Offer", priceCurrency: "EUR", price: numericPrice, availability: artwork.status === "Available" ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader inquiryHref="#inquiry" />

      <section className="artwork-detail section-pad">
        <ArtworkMedia artwork={artwork} className="artwork-detail-image" showStatus eager />
        <div className="artwork-detail-copy">
          <p className="eyebrow">{artwork.series} · {artwork.year}</p><h1>{artwork.title}</h1><p className="artwork-price">{artwork.price}</p>
          <dl className="artwork-specs"><div><dt>Medium</dt><dd>{artwork.medium}</dd></div><div><dt>Dimensions</dt><dd>{artwork.dimensions}</dd></div><div><dt>Original</dt><dd>Unique work</dd></div><div><dt>Certificate</dt><dd>Included</dd></div><div><dt>Location</dt><dd>Milan, Italy</dd></div></dl>
          <a className="button button-dark" href="#inquiry">Request acquisition</a><a className="button button-ghost" href="/collection">Back to collection</a>
        </div>
      </section>

      <section className="artwork-story section-pad"><p className="eyebrow">ABOUT THE WORK</p><h2>A work designed to unfold slowly.</h2><p>{statementFor(artwork.series)}</p><p>Surface, colour and scale are intentionally experienced differently at close range and across a room. Additional detail photographs, video and an interior-scale preview can be requested before acquisition.</p></section>
      <section className="artwork-trust section-pad dark-section"><p className="eyebrow">PRIVATE ACQUISITION</p><h2>Documented, protected and prepared for its next space.</h2><p>Every original is supplied with a signed certificate of authenticity and archive reference. Packing and delivery are arranged according to work size, destination and framing requirements.</p></section>
      <section id="inquiry" className="artwork-inquiry section-pad"><div><p className="eyebrow">INQUIRY</p><h2>Request details about {artwork.title}.</h2><p>Ask for additional images, a video, interior preview, reservation terms or international delivery information.</p></div><InquiryForm artworkTitle={artwork.title} /></section>

      {related.length > 0 && <section className="related section-pad"><div className="section-heading simple-heading"><p className="eyebrow">RELATED WORKS</p><h2>From the same series.</h2></div><div className="related-grid">{related.map((item) => <a href={`/artwork/${item.slug}`} className="collection-tile" key={item.slug}><ArtworkMedia artwork={item} className="collection-tile-image" /><div className="collection-tile-meta"><div><h2>{item.title}</h2><p>{item.year} · {item.dimensions}</p></div><strong>{item.price}</strong></div></a>)}</div></section>}
    </main>
  );
}
