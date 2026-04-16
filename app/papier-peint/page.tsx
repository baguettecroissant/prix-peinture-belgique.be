import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Papier Peint Belgique 2026 — Pose, Dépose et Prix au m²',
  description: 'Prix papier peint en Belgique : pose 20-45€/m², dépose 8-15€/m². Intissé, vinyle, panoramique. Tendances 2026 et devis gratuits de décorateurs.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/papier-peint/' },
};

const faq = [
  { question: 'Combien coûte la pose de papier peint au m² ?', answer: 'La pose de papier peint intissé coûte 20 à 45€/m² fourni posé (rouleau + colle + main-d\'œuvre). La dépose d\'un ancien papier peint coûte 8 à 15€/m² en supplément. Le papier peint panoramique (mur d\'accent) revient à 100 à 500€ par mur.' },
  { question: 'Intissé ou vinyle — quel papier peint choisir ?', answer: 'L\'intissé est le standard moderne : la colle se pose directement au mur (pas de trempage), il est robuste et se décolle en bandes entières. Le vinyle sur intissé est la variante lavable, idéale pour cuisines et salles de bain.' },
  { question: 'Peut-on peindre sur du papier peint ?', answer: 'Techniquement oui, si le papier peint est en bon état, bien collé et lisse. Mais le résultat professionnel est toujours meilleur après dépose. Les bulles, décollements et raccords visibles réapparaissent toujours sous la peinture.' },
];

export default function PapierPeintPage() {
  return (
    <>
      <GuideLinks currentPath="/papier-peint" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🖼️ Papier peint — Pose, dépose et prix Belgique 2026</h1>
          <p>Tout sur le papier peint en Belgique : types (intissé, vinyle, panoramique), pose et dépose, prix au m², tendances déco 2026 et devis gratuits.</p>
        </div>
      </section>

      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-papier-peint.png" alt="Décoratrice posant du papier peint géométrique vert et doré dans une chambre" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <p>Le <strong>papier peint</strong> fait un retour spectaculaire en décoration intérieure en 2026. Motifs géométriques, effets matière, panoramiques grand format — les possibilités sont infinies et bien au-delà de la simple <Link href="/peinture-interieure/" style={{ color: 'var(--primary)', fontWeight: 600 }}>peinture lisse</Link>.</p>

            <div className="article-callout callout-info">
              <div className="article-callout-icon">📊</div>
              <div className="article-callout-content">
                <strong>Prix 2026</strong>
                <p>Pose intissé : <strong>20-45€/m²</strong> | Dépose ancien : <strong>8-15€/m²</strong> | Panoramique : <strong>100-500€/mur</strong></p>
              </div>
            </div>

            <h2>Types de papier peint — Comparatif</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Type</th><th>Prix /rouleau</th><th>Pose</th><th>Idéal pour</th></tr></thead>
            <tbody>
              <tr><td><strong>Intissé ⭐</strong></td><td>25-80€</td><td>Facile (colle au mur)</td><td>Le standard. Robuste, décolle entier</td></tr>
              <tr><td><strong>Vinyle sur intissé</strong></td><td>30-100€</td><td>Facile</td><td>Pièces humides. Lavable</td></tr>
              <tr><td><strong>Papier classique</strong></td><td>10-40€</td><td>Trempage requis</td><td>Budget serré. Plus fragile</td></tr>
              <tr><td><strong>Panoramique</strong></td><td>100-500€/mur</td><td>Pro recommandé</td><td>Mur d&apos;accent spectaculaire</td></tr>
              <tr><td><strong>Naturel (lin, bambou)</strong></td><td>50-150€</td><td>Pro requis</td><td>Haut de gamme</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Tendances papier peint 2026</h2>
            <div className="card-grid-3" style={{ marginBottom: '2rem' }}>
              <div className="card"><span className="card-icon">🔷</span><div className="card-title">Géométrique</div><div className="card-subtitle">Lignes, hexagones, arcs en vert sauge, rose poudré, bleu gris</div></div>
              <div className="card"><span className="card-icon">🌿</span><div className="card-title">Tropical / botanique</div><div className="card-subtitle">Feuilles monstera, motifs jungle. Mur d&apos;accent spectaculaire</div></div>
              <div className="card"><span className="card-icon">🪨</span><div className="card-title">Effet matière</div><div className="card-subtitle">Faux lin, béton, pierre. Réaliste et élégant en intissé</div></div>
            </div>

            <h2>Dépose de l&apos;ancien papier peint</h2>
            <p>Les maisons belges ont souvent 3 à 5 couches superposées. La dépose est indispensable avant de repeindre ou de reposer :</p>
            <ol>
              <li><strong>Test</strong> — L&apos;intissé moderne se décolle entier. Le papier ancien résiste.</li>
              <li><strong>Perforation</strong> — Outil à pointes (Tiger/Piranha) pour l&apos;eau pénètre</li>
              <li><strong>Trempage ou vapeur</strong> — Eau chaude ou décolleuse vapeur, 10-15 min</li>
              <li><strong>Grattage</strong> — Couteau de peintre large (10-15 cm)</li>
              <li><strong>Nettoyage + séchage</strong> — 24h minimum avant <Link href="/preparation-murs/" style={{ color: 'var(--primary)', fontWeight: 600 }}>préparation</Link></li>
            </ol>

            <p>Guide complet : <Link href="/guides/papier-peint-tapissage-guide/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide expert papier peint</Link></p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '800px' }}><h2 className="section-title">Questions fréquentes — Papier peint</h2><FAQ items={faq} /></div></section>
      <div className="brush-separator" />
      <section className="section"><div className="container" style={{ maxWidth: '720px' }}><h2 className="section-title">🖼️ Devis Papier Peint — Gratuit</h2><LeadForm variant="compact" /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
    </>
  );
}
