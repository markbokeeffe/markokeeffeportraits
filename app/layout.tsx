import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from 'react'
import AnalyticsListener from "./components/AnalyticsListener";

const GA_MEASUREMENT_ID = 'G-5X0ZT7YP60'

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
      <head>
        {/* Google Analytics */}
        <script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body>
        {children}
        {/* Google Analytics Listener */}
        <Suspense fallback={null}>
          <AnalyticsListener />
        </Suspense>
      </body>
    </html>
  );
}