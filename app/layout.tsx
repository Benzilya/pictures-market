import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./release.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Iliano Babenchini — Contemporary Art from Milan",
  description:
    "Original paintings by Iliano Babenchini. Contemporary art from Milan for private interiors, collectors and design projects.",
  applicationName: "Iliano Babenchini — Private Museum",
  keywords: [
    "Iliano Babenchini",
    "contemporary artist Milan",
    "original paintings",
    "Italian contemporary art",
    "art for interiors",
  ],
  openGraph: {
    title: "Iliano Babenchini — Contemporary Art from Milan",
    description: "Original paintings for private interiors and collections.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
