import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Laquage Boiseries & Portes Belgique 2026 — Prix et Devis',
  description: 'Prix laquage boiseries en Belgique : portes 30-55€/unité, plinthes 5-10€/ml, châssis 15-30€/ml. Laque satin, ponçage, préparation. Devis gratuit.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/boiseries-portes/' },
};

const faq = [
  { question: 'Combien coûte le laquage d\'une porte intérieure ?', answer: 'Le laquage d\'une porte intérieure (2 faces) coûte 30 à 55€ tout compris. Ce prix inclut le ponçage (grain 120→180→220), la sous-couche et 2 couches de laque satin. Un escalier complet coûte 800 à 2 500€.' },
  { question: 'Laque satin ou brillant — que choisir ?', answer: 'Le satin (semi-mat) est le choix moderne : il masque mieux les petits défauts et représente 85% des projets en Belgique. Le brillant crée un effet miroir spectaculaire mais chaque imperfection est visible. Réservé aux projets haut de gamme.' },
  { question: 'Laque à l\'eau ou au solvant ?', answer: 'La laque à l\'eau (acrylique-alkyde) est le standard en 2026 : quasi sans odeur, séchage 4-6h, nettoyage à l\'eau. Elle représente 90% du marché. La laque au solvant (glycéro) n\'est plus utilisée qu\'en extérieur très exposé.' },
];

export default function BoisseriesPortesPage() {
  return (
    <>
      <GuideLinks currentPath="/boiseries-portes" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🚪 Laquage boiseries &amp; portes — Prix et devis Belgique 2026</h1>
          <p>Prix laquage de portes, plinthes, châssis et escaliers en Belgique. Laque satin vs brillant, préparation du bois, marques professionnelles et devis gratuits.</p>
        </div>
      </section>

      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-laquage-boiseries.png" alt="Artisan laquant une porte intérieure en blanc satin avec précision" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <p>Le <strong>laquage de boiseries</strong> est le travail de peinture le plus exigeant — ponçage multi-grains, 3 couches minimum, tolérance d&apos;erreur quasi nulle. Mais le résultat est spectaculaire : des menuiseries neuves pour 10-15 ans.</p>

            <div className="article-callout callout-info">
              <div className="article-callout-icon">📊</div>
              <div className="article-callout-content">
                <strong>Prix laquage 2026</strong>
                <p>Porte : <strong>30-55€/unité</strong> | Plinthes : <strong>5-10€/ml</strong> | Châssis : <strong>15-30€/ml</strong> | Escalier : <strong>800-2 500€</strong></p>
              </div>
            </div>

            <h2>Prix laquage par élément</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Élément</th><th>Prix posé</th><th>Couches</th><th>Durée de vie</th></tr></thead>
            <tbody>
              <tr><td><strong>🚪 Porte intérieure (2 faces)</strong></td><td>30€ – 55€</td><td>2-3</td><td>10-15 ans</td></tr>
              <tr><td><strong>📐 Plinthes</strong></td><td>5€ – 10€/ml</td><td>2</td><td>8-12 ans</td></tr>
              <tr><td><strong>🪟 Châssis fenêtre</strong></td><td>15€ – 30€/ml</td><td>2-3</td><td>8-12 ans</td></tr>
              <tr><td><strong>🪜 Escalier complet</strong></td><td>800€ – 2 500€</td><td>3</td><td>8-10 ans</td></tr>
              <tr><td><strong>🪵 Garde-corps</strong></td><td>25€ – 50€/ml</td><td>2-3</td><td>8-12 ans</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Satin vs brillant</h2>
            <div className="card-grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '2rem' }}>
              <div className="card"><span className="card-icon">✨</span><div className="card-title">Satin (85% des projets)</div><div className="card-subtitle">Choix moderne et élégant. Masque mieux les défauts. Toucher soyeux. Ex: Sikkens Rubbol BL Satin.</div></div>
              <div className="card"><span className="card-icon">💎</span><div className="card-title">Brillant (15%)</div><div className="card-subtitle">Effet miroir ultra-lisse. Plus difficile à appliquer. Portes d&apos;entrée, éléments prestige.</div></div>
            </div>

            <h2>Top marques laque professionnelle</h2>
            <ul>
              <li><strong>Sikkens Rubbol BL Satin</strong> — Le N°1 des pros. Durcit comme du glycéro, séchage 4h.</li>
              <li><strong>Trimetal Permalux NT Satin</strong> — Excellent tendu, auto-lissant. Alternative solide.</li>
              <li><strong>Sigma S2U Satin</strong> — Résistance exceptionnelle aux chocs. Idéal escaliers.</li>
              <li><strong>Levis Expert Lak Satin</strong> — Accessibilité en grande surface + qualité pro.</li>
            </ul>

            <h2>Préparation — La clé du résultat</h2>
            <p>Le laquage exige un ponçage en 3 grains successifs (120 → 180 → 220), chaque couche étant poncée avant la suivante. Plus de détails dans notre <Link href="/preparation-murs/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide préparation</Link>. Guide complet : <Link href="/guides/laquage-boiseries-portes-guide/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide expert laquage</Link>.</p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '800px' }}><h2 className="section-title">Questions fréquentes — Laquage</h2><FAQ items={faq} /></div></section>
      <div className="brush-separator" />
      <section className="section"><div className="container" style={{ maxWidth: '720px' }}><h2 className="section-title">🚪 Devis Laquage — Gratuit</h2><LeadForm variant="compact" /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
    </>
  );
}
