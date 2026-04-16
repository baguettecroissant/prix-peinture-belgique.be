import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '../data/guides';

export const metadata: Metadata = {
  title: 'Guides Peinture Belgique 2026',
  description: 'Tous nos guides experts sur la peinture en Belgique. Prix, techniques, finitions, préparation, boiseries, papier peint.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/guides/' },
};

export default function GuidesIndexPage() {
  return (
    <>
      <section className="commune-header">
        <div className="container">
          <h1>Guides Peinture — Belgique 2026</h1>
          <p>Tout ce qu&apos;il faut savoir avant de faire peindre votre intérieur ou extérieur.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {guides.map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="card-icon">{g.icon}</span>
                  <div className="card-title">{g.title}</div>
                  <div className="card-subtitle">{g.description}</div>
                  <span className="rg-link" style={{ marginTop: '1rem', display: 'inline-block' }}>Lire le guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
