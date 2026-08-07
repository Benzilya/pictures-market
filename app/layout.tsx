import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./release.css";
import "./artwork-media.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Iliano Babenchini — Contemporary Art from Milan",
  description: "Original paintings by Iliano Babenchini. Contemporary art from Milan for private interiors, collectors and design projects.",
  applicationName: "Iliano Babenchini — Private Museum",
  authors: [{ name: "Iliano Babenchini" }],
  creator: "Iliano Babenchini",
  alternates: { canonical: "/", languages: { en: "/", it: "/it", ru: "/ru" } },
  keywords: ["Iliano Babenchini", "contemporary artist Milan", "original paintings", "Italian contemporary art", "art for interiors"],
  openGraph: {
    title: "Iliano Babenchini — Contemporary Art from Milan",
    description: "Original paintings for private interiors and collections.",
    type: "website",
    locale: "en_US",
    siteName: "Iliano Babenchini — Private Museum",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
