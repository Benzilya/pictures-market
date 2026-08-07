import ArtworkMedia from "../components/ArtworkMedia";
import InquiryForm from "../components/InquiryForm";
import SiteHeader from "../components/SiteHeader";
import { artworks } from "../data/artworks";

const featured = [artworks[0], artworks[12], artworks[16], artworks[3]];

export default function HomePage() {
  const heroArtwork = artworks[0];
  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">CONTEMPORARY ART · MILANO</p>
          <h1>Art that changes the feeling of a space.</h1>
          <p className="hero-text">Original paintings by Iliano Babenchini for private interiors, collections and meaningful gifts. Each work exists as a single original.</p>
          <div className="hero-actions"><a className="button button-dark" href="/collection">Explore collection</a><a className="button button-ghost" href="#contact">Request a private selection</a></div>
        </div>
        <a className="hero-art-link" href={`/artwork/${heroArtwork.slug}`} aria-label={`Open ${heroArtwork.title} by Iliano Babenchini`}>
          <ArtworkMedia artwork={heroArtwork} className="hero-art" eager />
          <div className="hero-caption"><span>{heroArtwork.title} · {heroArtwork.year}</span><span>{heroArtwork.dimensions}</span></div>
        </a>
      </section>

      <section id="collection" className="collection section-pad">
        <div className="section-heading"><p className="eyebrow">SELECTED WORKS</p><h2>Original works, presented with room to breathe.</h2><a href="/collection">View all works →</a></div>
        <div className="art-grid">
          {featured.map((artwork, index) => (
            <a className={`art-card art-card-${index + 1}`} href={`/artwork/${artwork.slug}`} key={artwork.slug}>
              <ArtworkMedia artwork={artwork} className="artwork-surface" showStatus showViewLabel />
              <div className="art-meta"><div><h3>{artwork.title}</h3><p>{artwork.year} · {artwork.medium} · {artwork.dimensions}</p></div><p className="price">{artwork.price}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section id="full-collection" className="archive section-pad">
        <div className="archive-heading"><div><p className="eyebrow">PRIVATE MUSEUM · {artworks.length} WORKS</p><h2>The current collection.</h2></div><p>Human Presence · Italian Memory · Inner Landscapes</p></div>
        <div className="archive-grid">
          {artworks.map((artwork) => (
            <a className="archive-card" href={`/artwork/${artwork.slug}`} key={artwork.slug}>
              <ArtworkMedia artwork={artwork} className="archive-image" showStatus />
              <div className="archive-meta"><div><h3>{artwork.title}</h3><p>{artwork.year} · {artwork.medium}</p><p>{artwork.dimensions} · {artwork.series}</p></div><strong>{artwork.price}</strong></div>
            </a>
          ))}
        </div>
        <p className="source-note">Artwork previews are now rendered from the supplied source boards as native image crops for cleaner browser scaling. Dedicated high-resolution masters can replace them later without changing catalogue metadata.</p>
      </section>

      <section id="artist" className="artist section-pad"><div className="portrait-placeholder" aria-hidden="true"><img src="/brand/iliano-babenchini-mark.svg" alt="" /></div><div className="artist-copy"><p className="eyebrow">THE ARTIST</p><h2>Silence, memory and the architecture of inner space.</h2><p>Based in Milan, Iliano Babenchini explores the relationship between human presence, material memory and contemporary interiors. His paintings combine restrained colour, tactile surfaces and a sense of pause.</p><blockquote>“A painting should not fill an empty wall. It should change the atmosphere of the room.”</blockquote><a className="text-link" href="#contact">Discover the studio →</a></div></section>

      <section className="authenticity section-pad"><div className="authenticity-copy"><p className="eyebrow">AUTHENTICITY</p><h2>Every original leaves the studio with its identity documented.</h2><p>Each work is accompanied by a signed certificate recording title, year, medium, dimensions and a unique archive number.</p><a className="text-link" href="/brand/certificate-template.svg">View certificate →</a></div><div className="certificate-preview"><img src="/brand/certificate-template.svg" alt="Certificate of authenticity template" /></div></section>

      <section id="designers" className="designers section-pad dark-section"><p className="eyebrow">FOR DESIGNERS & COLLECTORS</p><h2>Art selected for the space, not added after it.</h2><p>Private selections, interior previews, high-resolution assets and project reservations are available for architects, interior designers and collectors.</p><a className="button button-light" href="#contact">Discuss a project</a></section>

      <section id="contact" className="contact section-pad"><div><p className="eyebrow">PRIVATE INQUIRY</p><h2>Find a work you want to live with.</h2><p className="hero-text">Request availability, additional images, delivery information or a private selection.</p></div><InquiryForm /></section>

      <footer className="footer section-pad"><div className="brand-lockup footer-brand"><img className="brand-mark" src="/brand/iliano-babenchini-mark.svg" alt="" /><span className="brand"><span>ILIANO</span><span>BABENCHINI</span></span></div><p>Contemporary Art · Milano</p><p className="footer-note">Private Museum · v0.9.0</p></footer>
    </main>
  );
}
