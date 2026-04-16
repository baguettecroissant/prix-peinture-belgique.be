import Link from 'next/link';
import { communes } from '../data/communes';

interface InternalLinksProps {
  currentSlug?: string;
  region?: string;
  limit?: number;
  language?: 'fr' | 'nl';
}

export default function InternalLinks({ currentSlug, region, limit = 30, language = 'fr' }: InternalLinksProps) {
  let filtered = communes;

  if (region) {
    filtered = communes.filter(c => c.region === region);
  }

  if (currentSlug) {
    filtered = filtered.filter(c => c.slug !== currentSlug);
  }

  const displayed = filtered.slice(0, limit);

  const basePath = language === 'nl' ? '/nl/schilder' : '/peintre';

  return (
    <div className="internal-links">
      <div className="container">
        <h3 style={{ marginBottom: '1rem' }}>
          {language === 'nl' ? 'Schilderwerken in uw regio' : 'Peintres dans votre région'}
        </h3>
        <div className="internal-links-grid">
          {displayed.map(c => {
            const displayName = language === 'nl' && c.name_nl ? c.name_nl : c.name;
            const slug = language === 'nl' && c.name_nl
              ? `${c.name_nl.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}-${c.zip}`
              : c.slug;
            return (
              <Link key={c.slug} href={`${basePath}/${slug}/`}>
                {displayName} ({c.zip})
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
