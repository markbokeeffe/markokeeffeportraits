import "./globals.css";
import type { Metadata } from "next";
import AnalyticsListener from "./components/AnalyticsListener";

export const metadata: Metadata = {
  title: "Mark O'Keeffe Portraits",
  description: "Pencil portraiture by Mark O'Keeffe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Google Analytics */}
        <AnalyticsListener />
      </body>
    </html>
  );
}