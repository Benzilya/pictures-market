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
};

export const artworks: Artwork[] = [
  { slug: "respiro-di-luce", title: "Respiro di luce", year: 2023, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,800", status: "Available", series: "Human Presence", crop: "crop-c0-r0" },
  { slug: "mattino-a-camogli", title: "Mattino a Camogli", year: 2022, medium: "Olio su tela", dimensions: "90 × 120 cm", price: "€ 12,400", status: "Available", series: "Italian Memory", crop: "crop-c1-r0" },
  { slug: "attesa", title: "Attesa", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,600", status: "Available", series: "Human Presence", crop: "crop-c2-r0" },
  { slug: "oltre-il-confine", title: "Oltre il confine", year: 2022, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 15,200", status: "Available", series: "Inner Landscapes", crop: "crop-c3-r0" },
  { slug: "velato", title: "Velato", year: 2020, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,400", status: "Available", series: "Human Presence", crop: "crop-c0-r1" },
  { slug: "lungotevere", title: "Lungotevere", year: 2022, medium: "Olio su tela", dimensions: "100 × 130 cm", price: "€ 13,600", status: "Available", series: "Italian Memory", crop: "crop-c1-r1" },
  { slug: "rosso-interiore", title: "Rosso interiore", year: 2021, medium: "Olio su tela", dimensions: "70 × 90 cm", price: "€ 8,900", status: "Available", series: "Human Presence", crop: "crop-c2-r1" },
  { slug: "profondita", title: "Profondità", year: 2023, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 15,800", status: "Available", series: "Inner Landscapes", crop: "crop-c3-r1" },
  { slug: "sguardo-lontano", title: "Sguardo lontano", year: 2020, medium: "Olio su tela", dimensions: "60 × 80 cm", price: "€ 6,800", status: "Available", series: "Human Presence", crop: "crop-c0-r2" },
  { slug: "vicolo-antico", title: "Vicolo antico", year: 2021, medium: "Olio su tela", dimensions: "80 × 100 cm", price: "€ 9,600", status: "Available", series: "Italian Memory", crop: "crop-c1-r2" },
  { slug: "silenzio", title: "Silenzio", year: 2021, medium: "Olio su tela", dimensions: "80 × 120 cm", price: "€ 11,400", status: "Available", series: "Human Presence", crop: "crop-c2-r2" },
  { slug: "equilibrio", title: "Equilibrio", year: 2023, medium: "Olio su tela", dimensions: "100 × 140 cm", price: "€ 15,600", status: "Available", series: "Inner Landscapes", crop: "crop-c3-r2" },
];
