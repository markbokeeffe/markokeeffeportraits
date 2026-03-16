import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marko Keeffe Portraits | Fine Art Portrait Painter",
  description:
    "Marko Keeffe is an Irish fine art portrait painter based in Dublin, creating bespoke, heirloom-quality portraits commissioned by families across Ireland and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
