import type { Metadata } from 'next';
import Link from 'next/link';
import { communes, getCommuneBySlug, getNLSlug, getPriceRange, getArchitecturalContext, getClimaticInfo, getLocalPaintingProblems, getDidYouKnow, getNearbyCommunes, getEnhancedFAQ } from '../../../data/communes';
import { paintingPrices } from '../../../data/prices';
import LeadForm from '../../../components/LeadForm';
import FAQ from '../../../components/FAQ';

export async function generateStaticParams() {
  const nlCommunes = communes.filter(c => c.region === 'Flandre' || c.region === 'Bruxelles-Capitale');
  return nlCommunes.map(c => ({ slug: getNLSlug(c) }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getCommuneByNLSlug(slug: string) {
  return communes.find(c => getNLSlug(c) === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const commune = getCommuneByNLSlug(slug);
  if (!commune) return { title: 'Gemeente niet gevonden' };

  const displayName = commune.name_nl || commune.name;
  return {
    title: `Prijs schilder ${displayName} (${commune.zip}) — Offertes schilderwerken 2026`,
    description: `Vergelijk schildersprijzen in ${displayName} (${commune.zip}). Interieur, exterieur, plafonds, houtwerk. Gratis offerte van schilders in ${commune.province_name}.`,
    alternates: { canonical: `https://prix-peinture-belgique.be/nl/schilder/${slug}/` },
  };
}

export default async function NLCommunePage({ params }: PageProps) {
  const { slug } = await params;
  const commune = getCommuneByNLSlug(slug);
  if (!commune) {
    return <div className="container section"><h1>Gemeente niet gevonden</h1></div>;
  }

  const displayName = commune.name_nl || commune.name;
  const priceRange = getPriceRange(commune.region);
  const arch = getArchitecturalContext(commune);
  const climate = getClimaticInfo(commune);
  const problems = getLocalPaintingProblems(commune);
  const didYouKnow = getDidYouKnow(commune);
  const nearby = getNearbyCommunes(commune, 8);
  const localFAQ = getEnhancedFAQ(commune);

  return (
    <>
      <section className="commune-header">
        <div className="container">
          <div className="commune-breadcrumb">
            <Link href="/nl/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{displayName}</span>
          </div>
          <h1>Prijs schilder {displayName} ({commune.zip}) — Offertes schilderwerken 2026</h1>
          <p>
            Op zoek naar een professionele schilder in {displayName}? De schilders in {commune.province_name} rekenen gemiddeld <strong>€{priceRange.min} tot €{priceRange.max}/m²</strong> voor schilderwerken (2 lagen).
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>{arch.title}</h2>
            {arch.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section-alt">
        <div className="container">
          <h2>Schildersprijzen in {displayName} ({commune.zip})</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Prijs (geplaatst)</th>
                  <th>Levensduur</th>
                  <th>Lagen</th>
                </tr>
              </thead>
              <tbody>
                {paintingPrices.map(row => (
                  <tr key={row.type}>
                    <td><strong>{row.icon} {row.type}</strong></td>
                    <td><span className="price-highlight">€{row.prixMin} – €{row.prixMax}</span></td>
                    <td>{row.dureeVie}</td>
                    <td>{row.couches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="article-callout callout-tip" style={{ marginTop: '1.5rem' }}>
            <div className="article-callout-icon">💡</div>
            <div className="article-callout-content">
              <strong>Wist u dat?</strong>
              <p>{didYouKnow}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section">
        <div className="container">
          <h2>Veelvoorkomende schilderproblemen in {displayName}</h2>
          <div className="card-grid-3">
            {problems.problems.map((p, i) => (
              <div className="card" key={i}>
                <span className="card-icon">{p.icon}</span>
                <div className="card-title">{p.title}</div>
                <div className="card-subtitle">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>{climate.title}</h2>
            <p>{climate.content}</p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">Gratis offerte — Schilders in {displayName}</h2>
          <LeadForm variant="compact" defaultCodePostal={commune.zip} defaultCommune={displayName} language="nl" />
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Veelgestelde vragen — Schilder {displayName}</h2>
          <FAQ items={localFAQ} />
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section">
        <div className="container">
          <h2>Schilders in de buurt van {displayName}</h2>
          <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {nearby.map(n => (
              <Link key={n.slug} href={`/nl/schilder/${getNLSlug(n)}/`} className="related-guide-card">
                <div className="rg-title">{n.name_nl || n.name}</div>
                <div className="rg-desc">{n.zip} — {n.province_name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": localFAQ.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }) }} />
    </>
  );
}
