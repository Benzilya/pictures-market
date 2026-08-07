import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iliano Babenchini — Contemporary Art from Milan",
  description:
    "Original paintings by Iliano Babenchini. Contemporary art from Milan for private interiors and collections.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
