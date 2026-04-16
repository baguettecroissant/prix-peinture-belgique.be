import { MetadataRoute } from 'next';
import { communes, getNLSlug } from './data/communes';
import { guides } from './data/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prix-peinture-belgique.be';

  // Static pages FR
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/devis/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/peintre/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/peinture-interieure/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/peinture-exterieure/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/peinture-plafond/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/boiseries-portes/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/papier-peint/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/preparation-murs/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tarif-peintre/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/mentions-legales/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // NL static pages
  const nlStaticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/nl/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/nl/offerte/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Guide pages
  const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
    url: `${baseUrl}/guides/${g.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // FR commune pages (Wallonie + Bruxelles)
  const frCommunes = communes.filter(c => c.region === 'Wallonie' || c.region === 'Bruxelles-Capitale');
  const frCommunePages: MetadataRoute.Sitemap = frCommunes.map(c => ({
    url: `${baseUrl}/peintre/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // NL commune pages (Flandre + Bruxelles)
  const nlCommunes = communes.filter(c => c.region === 'Flandre' || c.region === 'Bruxelles-Capitale');
  const nlCommunePages: MetadataRoute.Sitemap = nlCommunes.map(c => ({
    url: `${baseUrl}/nl/schilder/${getNLSlug(c)}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...nlStaticPages,
    ...guidePages,
    ...frCommunePages,
    ...nlCommunePages,
  ];
}
