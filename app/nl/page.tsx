import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';

export const metadata: Metadata = {
  title: 'Prijs Schilder België 2026 — Gratis Offertes Vergelijken',
  description: 'Vergelijk schildersprijzen in België 2026. Interieur vanaf €18/m², exterieur, plafonds, houtwerk. Gratis offerte van professionele schilders.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/nl/' },
};

export default function NLHomePage() {
  return (
    <>
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <div className="hero-badge">🎨 Prijsvergelijker — België 2026</div>
          <h1>
            <span className="highlight">Schilderwerken</span> in België
          </h1>
          <p className="hero-subtitle">
            Vergelijk prijzen en ontvang 3 gratis offertes van professionele schilders in uw regio.
          </p>
          <div className="hero-actions">
            <Link href="/nl/offerte/" className="btn btn-primary btn-lg">🎨 Vergelijk Prijzen</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">€18–€40</div>
              <div className="hero-stat-label">Prijs per m²</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">556</div>
              <div className="hero-stat-label">Gemeenten</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">48u</div>
              <div className="hero-stat-label">Gegarandeerd</div>
            </div>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <LeadForm variant="full" language="nl" />
        </div>
      </section>

      <div className="brush-separator" />

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Schilders in uw gemeente</h2>
          <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {[
              { name: 'Antwerpen', link: '/nl/schilder/antwerpen-2000/', icon: '⚓' },
              { name: 'Gent', link: '/nl/schilder/gent-9000/', icon: '🏰' },
              { name: 'Brugge', link: '/nl/schilder/brugge-8000/', icon: '🌊' },
              { name: 'Leuven', link: '/nl/schilder/leuven-3000/', icon: '🎓' },
              { name: 'Mechelen', link: '/nl/schilder/mechelen-2800/', icon: '🏛️' },
              { name: 'Hasselt', link: '/nl/schilder/hasselt-3500/', icon: '🌲' },
              { name: 'Bruxelles', link: '/nl/schilder/bruxelles-1000/', icon: '🏛️' },
              { name: 'Kortrijk', link: '/nl/schilder/kortrijk-8500/', icon: '🏭' },
            ].map(v => (
              <Link key={v.name} href={v.link} className="related-guide-card">
                <div className="rg-title">{v.icon} {v.name}</div>
                <div className="rg-desc">Schilderofferte →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
