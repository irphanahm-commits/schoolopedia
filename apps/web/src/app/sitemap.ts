import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://schoolopedia.com';
  const lastModified = new Date();

  // 1. Core Platform Hubs
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guidance`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/opportunities`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pathways`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // 2. Tier 1 Countries
  const countryCodes = ['us', 'uk', 'ca', 'au', 'nz'];
  const countryRoutes: MetadataRoute.Sitemap = countryCodes.map((code) => ({
    url: `${baseUrl}/learn/${code}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Key Jurisdictions across Tier 1
  const usStates = [
    'california', 'texas', 'florida', 'new-york', 'illinois', 'pennsylvania',
    'ohio', 'georgia', 'north-carolina', 'michigan', 'virginia', 'washington',
    'massachusetts', 'arizona', 'tennessee', 'indiana', 'missouri', 'maryland',
    'wisconsin', 'colorado', 'minnesota', 'south-carolina', 'alabama', 'louisiana',
    'kentucky', 'oregon', 'oklahoma', 'connecticut', 'utah', 'iowa', 'nevada',
    'arkansas', 'mississippi', 'kansas', 'new-mexico', 'nebraska', 'idaho',
    'west-virginia', 'hawaii', 'new-hampshire', 'maine', 'montana', 'rhode-island',
    'delaware', 'south-dakota', 'north-dakota', 'alaska', 'district-of-columbia',
    'vermont', 'wyoming',
  ];

  const ukNations = ['england', 'scotland', 'wales', 'northern-ireland'];
  const caProvinces = [
    'ontario', 'quebec', 'british-columbia', 'alberta', 'manitoba',
    'saskatchewan', 'nova-scotia', 'new-brunswick', 'newfoundland-and-labrador',
    'prince-edward-island', 'northwest-territories', 'yukon', 'nunavut',
  ];
  const auStates = [
    'new-south-wales', 'victoria', 'queensland', 'western-australia',
    'south-australia', 'tasmania', 'australian-capital-territory', 'northern-territory',
  ];
  const nzPathways = ['english-medium', 'maori-medium'];

  const jurisdictionRoutes: MetadataRoute.Sitemap = [
    ...usStates.map((s) => ({
      url: `${baseUrl}/learn/us/${s}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...ukNations.map((n) => ({
      url: `${baseUrl}/learn/uk/${n}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...caProvinces.map((p) => ({
      url: `${baseUrl}/learn/ca/${p}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...auStates.map((a) => ({
      url: `${baseUrl}/learn/au/${a}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...nzPathways.map((nz) => ({
      url: `${baseUrl}/learn/nz/${nz}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  // 4. Grounded Curricular Vertical Slice Lessons & Hubs
  const lessonRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/learn/us/california/grade-8/mathematics`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/learn/us/california/grade-8/mathematics/linear-equations`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  // 5. Initial Editorial Blog Articles
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/california-math-framework-2026-linear-equations`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/why-schoolopedia-is-100-percent-free-forever`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/grade-8-math-standards-comparison-us-uk-australia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [
    ...coreRoutes,
    ...countryRoutes,
    ...jurisdictionRoutes,
    ...lessonRoutes,
    ...blogRoutes,
  ];
}
