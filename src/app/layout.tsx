import type { Metadata } from "next";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

import { SiteContactFooter } from "@/components/site-contact-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wnyatlas.com"),
  title: {
    default: "WNYAtlas | Western New York Environmental History",
    template: "%s | WNYAtlas",
  },
  description:
    "An evidence-based public atlas of Western New York's industrial, environmental, cleanup, and redevelopment history.",
  applicationName: "WNYAtlas",
  verification: {
    google: "6oRMbwPchT-o-6Gw1RcJejuupMVeALsiKdKiTay-ykI",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "WNYAtlas",
    title: "WNYAtlas | Western New York Environmental History",
    description:
      "Explore documented industrial sites, waterways, waste sites, cleanup projects, and environmental history across Western New York.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WNYAtlas — Western New York Industrial and Environmental Atlas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WNYAtlas | Western New York Environmental History",
    description:
      "Explore documented industrial sites, waterways, cleanup projects, and environmental history across Western New York.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
        <SiteContactFooter />
      </body>
    </html>
  );
}
