import InquiryForm from "./InquiryForm";
import SiteHeader from "./SiteHeader";
import { artworks } from "../data/artworks";

type Locale = "it" | "ru";

type Copy = {
  eyebrow: string; title: string; intro: string; collection: string; privateSelection: string;
  selected: string; selectedTitle: string; artist: string; artistTitle: string; artistBody: string;
  designers: string; designersTitle: string; designersBody: string; contact: string; contactTitle: string; contactBody: string;
};

const copy: Record<Locale, Copy> = {
  it: {
    eyebrow: "ARTE CONTEMPORANEA · MILANO", title: "Arte che cambia la percezione dello spazio.",
    intro: "Dipinti originali di Iliano Babenchini per interni privati, collezioni e progetti d'autore. Ogni opera esiste come pezzo unico.",
    collection: "Esplora la collezione", privateSelection: "Richiedi una selezione privata", selected: "OPERE SELEZIONATE", selectedTitle: "Originali, presentati con spazio per respirare.",
    artist: "L'ARTISTA", artistTitle: "Silenzio, memoria e architettura dello spazio interiore.", artistBody: "A Milano, Iliano Babenchini esplora il rapporto tra presenza umana, memoria materica e spazio contemporaneo attraverso colore trattenuto, superficie e luce.",
    designers: "PER DESIGNER E COLLEZIONISTI", designersTitle: "L'arte scelta per lo spazio, non aggiunta dopo.", designersBody: "Selezioni private, preview d'interno, immagini ad alta risoluzione e riserva delle opere per architetti, designer e collezionisti.",
    contact: "RICHIESTA PRIVATA", contactTitle: "Trova un'opera con cui vuoi vivere.", contactBody: "Richiedi disponibilità, immagini aggiuntive, informazioni sulla consegna o una selezione privata.",
  },
  ru: {
    eyebrow: "СОВРЕМЕННОЕ ИСКУССТВО · МИЛАН", title: "Искусство, которое меняет ощущение пространства.",
    intro: "Оригинальные картины Iliano Babenchini для частных интерьеров, коллекций и авторских проектов. Каждая работа существует в единственном экземпляре.",
    collection: "Смотреть коллекцию", privateSelection: "Получить частную подборку", selected: "ИЗБРАННЫЕ РАБОТЫ", selectedTitle: "Оригиналы, которым оставлено пространство для воздуха.",
    artist: "ХУДОЖНИК", artistTitle: "Тишина, память и архитектура внутреннего пространства.", artistBody: "Работая в Милане, Iliano Babenchini исследует связь человеческого присутствия, материальной памяти и современного интерьера через сдержанный цвет, фактуру и свет.",
    designers: "ДИЗАЙНЕРАМ И КОЛЛЕКЦИОНЕРАМ", designersTitle: "Искусство подбирается для пространства, а не добавляется после.", designersBody: "Персональный подбор, интерьерные визуализации, материалы высокого разрешения и резервирование работ для архитекторов, дизайнеров и коллекционеров.",
    contact: "ЧАСТНЫЙ ЗАПРОС", contactTitle: "Найдите работу, с которой хочется жить.", contactBody: "Запросите наличие, дополнительные изображения, информацию о доставке или персональную подборку.",
  },
};

export default function LocalizedHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const featured = artworks.slice(0, 6);
  return (
    <main>
      <SiteHeader locale={locale} inquiryHref="#contact" />
      <section className="hero section-pad">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-text">{t.intro}</p><div className="hero-actions"><a className="button button-dark" href="/collection">{t.collection}</a><a className="button button-ghost" href="#contact">{t.privateSelection}</a></div></div>
        <a href="/artwork/respiro-di-luce" className="hero-art real-art board-1 crop-c0-r0" aria-label="Respiro di luce"><div className="hero-caption"><span>Respiro di luce · 2023</span><span>80 × 100 cm</span></div></a>
      </section>
      <section className="collection section-pad"><div className="section-heading"><p className="eyebrow">{t.selected}</p><h2>{t.selectedTitle}</h2><a href="/collection">{t.collection} →</a></div><div className="archive-grid">{featured.map((artwork) => <a className="archive-card" href={`/artwork/${artwork.slug}`} key={artwork.slug}><div className={`archive-image real-art board-${artwork.board} ${artwork.crop}`}><span className="status-pill">{artwork.status}</span></div><div className="archive-meta"><div><h3>{artwork.title}</h3><p>{artwork.year} · {artwork.dimensions}</p></div><strong>{artwork.price}</strong></div></a>)}</div></section>
      <section id="artist" className="artist section-pad"><div className="portrait-placeholder"><img src="/brand/iliano-babenchini-mark.svg" alt="IB" /></div><div className="artist-copy"><p className="eyebrow">{t.artist}</p><h2>{t.artistTitle}</h2><p>{t.artistBody}</p></div></section>
      <section id="designers" className="designers section-pad dark-section"><p className="eyebrow">{t.designers}</p><h2>{t.designersTitle}</h2><p>{t.designersBody}</p><a className="button button-light" href="#contact">{t.privateSelection}</a></section>
      <section id="contact" className="contact section-pad"><div><p className="eyebrow">{t.contact}</p><h2>{t.contactTitle}</h2><p className="hero-text">{t.contactBody}</p></div><InquiryForm /></section>
    </main>
  );
}
