import type { Metadata } from "next";
import LocalizedHome from "../../components/LocalizedHome";

export const metadata: Metadata = {
  title: "Iliano Babenchini — Arte contemporanea da Milano",
  description: "Dipinti originali di Iliano Babenchini per collezioni, interni privati e progetti di design.",
  alternates: { canonical: "/it", languages: { "en": "/", "it": "/it", "ru": "/ru" } },
};

export default function ItalianHomePage() {
  return <LocalizedHome locale="it" />;
}
