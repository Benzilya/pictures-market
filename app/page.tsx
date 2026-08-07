const featured = [
  { title: "Respiro di luce", meta: "Oil on canvas · 120 × 90 cm", price: "€ 7,800", tone: "warm" },
  { title: "Attesa", meta: "Oil on canvas · 100 × 80 cm", price: "€ 6,400", tone: "stone" },
  { title: "Oltre il confine", meta: "Mixed media · 140 × 110 cm", price: "€ 11,800", tone: "deep" },
  { title: "Mattino a Camogli", meta: "Oil on canvas · 90 × 120 cm", price: "€ 8,600", tone: "sea" },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Iliano Babenchini home">
          <span>ILIANO</span>
          <span>BABENCHINI</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#collection">Collection</a>
          <a href="#artist">About</a>
          <a href="#designers">Designers</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Inquiry</a>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">CONTEMPORARY ART · MILANO</p>
          <h1>Art that changes the feeling of a space.</h1>
          <p className="hero-text">
            Original paintings by Iliano Babenchini for private interiors, collections and meaningful gifts.
            Each work exists as a single original.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#collection">Explore collection</a>
            <a className="button button-ghost" href="#contact">Request a private selection</a>
          </div>
        </div>
        <div className="hero-art artwork-surface tone-deep" role="img" aria-label="Abstract artwork placeholder">
          <div className="paint-stroke stroke-a" />
          <div className="paint-stroke stroke-b" />
          <div className="paint-stroke stroke-c" />
          <div className="hero-caption">
            <span>Private Museum</span>
            <span>Milan · 2026</span>
          </div>
        </div>
      </section>

      <section id="collection" className="collection section-pad">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORKS</p>
          <h2>Original works, presented with room to breathe.</h2>
          <a href="#contact">View all works →</a>
        </div>

        <div className="art-grid">
          {featured.map((artwork, index) => (
            <article className={`art-card art-card-${index + 1}`} key={artwork.title}>
              <div className={`artwork-surface tone-${artwork.tone}`}>
                <div className="paint-stroke stroke-a" />
                <div className="paint-stroke stroke-b" />
                <div className="paint-stroke stroke-c" />
                <span className="view-label">OPEN</span>
              </div>
              <div className="art-meta">
                <div>
                  <h3>{artwork.title}</h3>
                  <p>{artwork.meta}</p>
                </div>
                <p className="price">{artwork.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="artist" className="artist section-pad">
        <div className="portrait-placeholder" aria-hidden="true">
          <span>IB</span>
        </div>
        <div className="artist-copy">
          <p className="eyebrow">THE ARTIST</p>
          <h2>Silence, memory and the architecture of inner space.</h2>
          <p>
            Based in Milan, Iliano Babenchini explores the relationship between human presence, material memory
            and contemporary interiors. His paintings combine restrained colour, tactile surfaces and a sense of pause.
          </p>
          <blockquote>
            “A painting should not fill an empty wall. It should change the atmosphere of the room.”
          </blockquote>
          <a className="text-link" href="#contact">Discover the studio →</a>
        </div>
      </section>

      <section id="designers" className="designers section-pad dark-section">
        <p className="eyebrow">FOR DESIGNERS & COLLECTORS</p>
        <h2>Art selected for the space, not added after it.</h2>
        <p>
          Private selections, interior previews, high-resolution assets and project reservations are available for
          architects, interior designers and collectors.
        </p>
        <a className="button button-light" href="#contact">Discuss a project</a>
      </section>

      <section id="contact" className="contact section-pad">
        <div>
          <p className="eyebrow">PRIVATE INQUIRY</p>
          <h2>Find a work you want to live with.</h2>
        </div>
        <div className="contact-card">
          <p>Contact details are being prepared.</p>
          <a className="button button-dark" href="mailto:studio@example.com">Request details</a>
          <small>Placeholder contact · Milan, Italy</small>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="brand footer-brand"><span>ILIANO</span><span>BABENCHINI</span></div>
        <p>Contemporary Art · Milano</p>
        <p className="footer-note">Private Museum prototype · v0.3.0</p>
      </footer>
    </main>
  );
}
