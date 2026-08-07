export type ArtworkStatus = "Available" | "Reserved" | "Sold";

export type Artwork = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price: string;
  status: ArtworkStatus;
  series: "Human Presence" | "Italian Memory" | "Inner Landscapes";
  crop: string;
  board: 1 | 2;
};

export const artworks: Artwork[] = [
  { slug: "respiro-di-luce", title: "Respiro di luce", year: 2023, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,800", status: "Available", series: "Human Presence", crop: "crop-c0-r0", board: 1 },
  { slug: "mattino-a-camogli", title: "Mattino a Camogli", year: 2022, medium: "Olio su tela", dimensions: "90 × 120 cm", price: "€ 12,400", status: "Available", series: "Italian Memory", crop: "crop-c1-r0", board: 1 },
  { slug: "attesa", title: "Attesa", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,600", status: "Available", series: "Human Presence", crop: "crop-c2-r0", board: 1 },
  { slug: "oltre-il-confine", title: "Oltre il confine", year: 2022, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 15,200", status: "Available", series: "Inner Landscapes", crop: "crop-c3-r0", board: 1 },
  { slug: "velato", title: "Velato", year: 2020, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,400", status: "Available", series: "Human Presence", crop: "crop-c0-r1", board: 1 },
  { slug: "lungotevere", title: "Lungotevere", year: 2022, medium: "Olio su tela", dimensions: "100 × 130 cm", price: "€ 13,600", status: "Available", series: "Italian Memory", crop: "crop-c1-r1", board: 1 },
  { slug: "rosso-interiore", title: "Rosso interiore", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,900", status: "Available", series: "Human Presence", crop: "crop-c2-r1", board: 1 },
  { slug: "profondita", title: "Profondità", year: 2023, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 15,800", status: "Available", series: "Inner Landscapes", crop: "crop-c3-r1", board: 1 },
  { slug: "sguardo-lontano", title: "Sguardo lontano", year: 2020, medium: "Olio su tela", dimensions: "60 × 80 cm", price: "€ 6,800", status: "Available", series: "Human Presence", crop: "crop-c0-r2", board: 1 },
  { slug: "vicolo-antico", title: "Vicolo antico", year: 2021, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,600", status: "Available", series: "Italian Memory", crop: "crop-c1-r2", board: 1 },
  { slug: "silenzio", title: "Silenzio", year: 2021, medium: "Olio su tela", dimensions: "80 × 120 cm", price: "€ 11,400", status: "Available", series: "Human Presence", crop: "crop-c2-r2", board: 1 },
  { slug: "equilibrio", title: "Equilibrio", year: 2023, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 15,600", status: "Available", series: "Inner Landscapes", crop: "crop-c3-r2", board: 1 },

  { slug: "luce-tra-le-foglie", title: "Luce tra le foglie", year: 2023, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,800", status: "Available", series: "Human Presence", crop: "crop2-c0-r0", board: 2 },
  { slug: "mare-d-inverno", title: "Mare d'inverno", year: 2022, medium: "Olio su tela", dimensions: "100 × 120 cm", price: "€ 13,800", status: "Available", series: "Inner Landscapes", crop: "crop2-c1-r0", board: 2 },
  { slug: "la-finestra-azzurra", title: "La finestra azzurra", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,600", status: "Available", series: "Italian Memory", crop: "crop2-c0-r1", board: 2 },
  { slug: "nudo-di-schiena", title: "Nudo di schiena", year: 2020, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,400", status: "Available", series: "Human Presence", crop: "crop2-c1-r1", board: 2 },
  { slug: "pioggia-su-venezia", title: "Pioggia su Venezia", year: 2023, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 16,200", status: "Available", series: "Italian Memory", crop: "crop2-c0-r2", board: 2 },
  { slug: "caffe-al-mattino", title: "Caffè al mattino", year: 2022, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,200", status: "Available", series: "Italian Memory", crop: "crop2-c1-r2", board: 2 },
  { slug: "fiori-di-campo", title: "Fiori di campo", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,800", status: "Available", series: "Inner Landscapes", crop: "crop2-c0-r3", board: 2 },
  { slug: "notte-d-estate", title: "Notte d'estate", year: 2023, medium: "Olio su tela", dimensions: "100 × 120 cm", price: "€ 13,800", status: "Available", series: "Inner Landscapes", crop: "crop2-c1-r3", board: 2 },
  { slug: "il-vecchio-ponte", title: "Il vecchio ponte", year: 2022, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,600", status: "Available", series: "Italian Memory", crop: "crop2-c0-r4", board: 2 },
  { slug: "attimo-di-silenzio", title: "Attimo di silenzio", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,900", status: "Available", series: "Human Presence", crop: "crop2-c1-r4", board: 2 },
];
