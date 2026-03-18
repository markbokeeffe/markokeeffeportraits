import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark O'Keeffe Portraits",
  description: "Graphite portraiture by Mark O'Keeffe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}