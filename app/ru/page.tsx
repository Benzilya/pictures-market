import type { Metadata } from "next";
import LocalizedHome from "../../components/LocalizedHome";

export const metadata: Metadata = {
  title: "Iliano Babenchini — Современное искусство из Милана",
  description: "Оригинальные картины Iliano Babenchini для коллекций, частных интерьеров и дизайнерских проектов.",
  alternates: { canonical: "/ru", languages: { "en": "/", "it": "/it", "ru": "/ru" } },
};

export default function RussianHomePage() {
  return <LocalizedHome locale="ru" />;
}
