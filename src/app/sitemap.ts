import type { MetadataRoute } from "next";

import { chemicalProfiles } from "@/data/chemicals";
import { featuredSites } from "@/data/featured-sites";

const BASE_URL = "https://www.wnyatlas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/places`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/chemicals`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research/schools-industrial-sites`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research/former-waterways`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research/radiological-industry-fill`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/risks/airborne-exposure`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/enforcement`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/health`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/health/cancer`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/health/neurological`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const placePages: MetadataRoute.Sitemap = featuredSites.map((site) => ({
    url: `${BASE_URL}/sites/${site.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
    ...(site.image ? { images: [`${BASE_URL}${site.image.src}`] } : {}),
  }));

  const chemicalPages: MetadataRoute.Sitemap = chemicalProfiles.map(
    (chemical) => ({
      url: `${BASE_URL}/chemicals/${chemical.id}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...publicPages, ...chemicalPages, ...placePages];
}
