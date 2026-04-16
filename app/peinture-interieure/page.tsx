import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { paintingPrices } from '../data/prices';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Prix Peinture Intérieure Belgique 2026 — Murs, Finitions, Devis',
  description: 'Prix peinture intérieure en Belgique : 15 à 40€/m² posé. Mat, satin, brillant. Levis, Sikkens, Sigma. Comparatif complet et devis gratuits de peintres.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peinture-interieure/' },
};

const faq = [
  { question: 'Combien coûte la peinture intérieure au m² en Belgique ?', answer: 'Le prix moyen est de 15 à 25€/m² pour une peinture standard (2 couches, murs en bon état) et de 25 à 40€/m² pour une finition premium ou des murs nécessitant une préparation poussée. Ces prix incluent la main-d\'œuvre, la peinture professionnelle et la protection des sols.' },
  { question: 'Quelle finition choisir : mat, satin ou brillant ?', answer: 'Mat velouté pour les séjours et chambres (masque les défauts, non lavable). Satin pour cuisines, salles de bain et couloirs (lavable, résistant). Brillant/laque uniquement pour les portes, plinthes et châssis (ultra-résistant).' },
  { question: 'Quelle est la meilleure marque de peinture en Belgique ?', answer: 'Les 4 marques professionnelles en Belgique : Levis (Ambiance Extra Mat, N°1 du marché), Sikkens (Alpha BL Mat, qualité supérieure), Sigma (S2U Nova Satin, excellent en pièces d\'eau), et Trimetal (Magnacryl, bon rapport qualité/prix).' },
  { question: 'Faut-il une sous-couche avant de peindre ?', answer: 'La sous-couche (primer) est recommandée sur : mur neuf (plâtre, Gyproc), changement de couleur radical, mur farineux, taches d\'humidité traitées, bois neuf. Elle améliore l\'adhérence de 50% et réduit la consommation de peinture de 25-30%.' },
  { question: 'Combien de temps durent les travaux pour un appartement ?', answer: 'Pour un appartement de 80 m² : 5 à 8 jours ouvrables (préparation + 2 couches). Pour une maison de 150 m² : 10 à 18 jours. Ces durées incluent le ponçage, l\'enduit, la sous-couche et 2 couches de finition.' },
];

export default function PeintureInterieurePage() {
  return (
    <>
      <GuideLinks currentPath="/peinture-interieure" variant="bar" />

      {/* Hero */}
      <section className="commune-header">
        <div className="container">
          <h1>🎨 Peinture intérieure en Belgique — Prix au m² et devis 2026</h1>
          <p>Guide complet de la peinture intérieure : prix au m², choix des finitions (mat, satin, brillant), couleurs tendance, marques professionnelles (Levis, Sikkens, Sigma) et préparation des murs.</p>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-peinture-interieure.png" alt="Peintre professionnelle appliquant de la peinture vert sauge dans un intérieur belge avec moulures" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <p>La <strong>peinture intérieure</strong> représente 70% des travaux de peinture en Belgique. C&apos;est le projet de rénovation le plus accessible et le plus rentable : un rafraîchissement complet peut <strong>augmenter la valeur de votre bien de 3 à 5%</strong>. Ce guide expert couvre tout ce qu&apos;il faut savoir avant de se lancer.</p>

            <div className="article-callout callout-tip">
              <div className="article-callout-icon">💡</div>
              <div className="article-callout-content">
                <strong>En résumé</strong>
                <p>Standard : <strong>15-25€/m²</strong> | Premium : <strong>25-40€/m²</strong> | Plafonds : <strong>20-35€/m²</strong> | TVA 6% pour logements de 10+ ans</p>
              </div>
            </div>

            <h2>Prix peinture intérieure au m² — Belgique 2026</h2>
            <p>Les tarifs varient selon le type de surface, la qualité de finition et l&apos;état des murs :</p>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Type de travaux</th><th>Prix posé (m²)</th><th>Durée de vie</th></tr></thead>
            <tbody>
              {paintingPrices.map(row => (
                <tr key={row.type}><td><strong>{row.icon} {row.type}</strong></td><td><span className="price-highlight">€{row.prixMin} – €{row.prixMax}</span></td><td>{row.dureeVie}</td></tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>* Prix TTC indicatifs. TVA 6% pour habitations de 10+ ans, 21% pour le neuf.</p>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Finitions : mat, satin ou brillant ?</h2>
            <div className="card-grid-3" style={{ marginBottom: '2rem' }}>
              <div className="card">
                <span className="card-icon">🎨</span>
                <div className="card-title">Mat velouté</div>
                <div className="card-subtitle">Séjour, salon, chambres — Masque les défauts, ambiance chaleureuse. NON lavable. Ex: Levis Ambiance Extra Mat.</div>
              </div>
              <div className="card">
                <span className="card-icon">✨</span>
                <div className="card-title">Satin</div>
                <div className="card-subtitle">Cuisine, SDB, couloir — Lavable, résistant aux taches et à l&apos;humidité. Le meilleur compromis. Ex: Sigma S2U Nova Satin.</div>
              </div>
              <div className="card">
                <span className="card-icon">💎</span>
                <div className="card-title">Brillant (laque)</div>
                <div className="card-subtitle"><Link href="/boiseries-portes/">Portes, plinthes, châssis</Link> uniquement — Ultra-résistant, facile à nettoyer. Ex: Sikkens Rubbol BL.</div>
              </div>
            </div>

            <h2>Couleurs tendance 2026</h2>
            <ul>
              <li><strong>Blanc chaud (RAL 9010)</strong> — Indémodable, lumineux, agrandit l&apos;espace. 58% des projets en Belgique.</li>
              <li><strong>Vert sauge</strong> — La star 2026. Naturel, apaisant, élégant. Parfait en mur d&apos;accent.</li>
              <li><strong>Greige (gris + beige)</strong> — Neutre et chaud, remplace le gris froid. Idéal pour les pièces à vivre.</li>
              <li><strong>Terracotta</strong> — Chaleur et cocooning. En mur d&apos;accent ou chambre.</li>
              <li><strong>Bleu nuit</strong> — Sophistiqué et dramatique. Un seul mur avec éclairage travaillé.</li>
            </ul>

            <h2>Les 4 marques pro en Belgique</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Marque</th><th>Gamme phare</th><th>Prix /10L</th><th>Point fort</th></tr></thead>
            <tbody>
              <tr><td><strong>Levis</strong></td><td>Ambiance Extra Mat</td><td>45-55€</td><td>N°1 en Belgique, velouté premium</td></tr>
              <tr><td><strong>Sikkens</strong></td><td>Alpha BL Mat</td><td>50-65€</td><td>1 500 teintes NCS, qualité supérieure</td></tr>
              <tr><td><strong>Sigma</strong></td><td>S2U Nova Satin</td><td>55-70€</td><td>Satin ultra-résistant, pièces d&apos;eau</td></tr>
              <tr><td><strong>Trimetal</strong></td><td>Magnacryl Prestige</td><td>40-50€</td><td>Bon rapport qualité/prix pro</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Préparation des murs — 80% du résultat</h2>
            <p>Un bon peintre consacre 2 jours de <Link href="/preparation-murs/" style={{ color: 'var(--primary)', fontWeight: 600 }}>préparation</Link> pour 1 jour de finition :</p>
            <ol>
              <li><strong>Diagnostic</strong> — Mesure d&apos;humidité, test d&apos;adhérence, identification des fissures</li>
              <li><strong>Dépose</strong> — Retrait du <Link href="/papier-peint/" style={{ color: 'var(--primary)', fontWeight: 600 }}>papier peint</Link> si présent (8-15€/m² en supplément)</li>
              <li><strong>Rebouchage</strong> — Enduit de rebouchage pour fissures et trous</li>
              <li><strong>Ponçage</strong> — Grain 120-150 sur toute la surface + dépoussiérage</li>
              <li><strong>Sous-couche</strong> — Primer fixant sur murs neufs, farineux ou tachés</li>
            </ol>

            <div className="article-callout callout-warning">
              <div className="article-callout-icon">⚠️</div>
              <div className="article-callout-content">
                <strong>85% des sinistres</strong> (écaillage, cloques, décollement) sont dus à un défaut de préparation — pas à la qualité de la peinture. Exigez une préparation soignée dans votre devis.
              </div>
            </div>

            <h2>Budget par type de projet</h2>
          </div>

          <table className="comparison-table">
            <thead><tr><th>Projet</th><th>Budget TTC</th><th>Durée</th></tr></thead>
            <tbody>
              <tr><td><strong>🛏️ 1 chambre (12-15 m²)</strong></td><td>350€ – 700€</td><td>1-2 jours</td></tr>
              <tr><td><strong>🛋️ Séjour (30-40 m²)</strong></td><td>1 200€ – 2 500€</td><td>3-4 jours</td></tr>
              <tr><td><strong>🏢 Appartement 80 m²</strong></td><td>2 500€ – 5 500€</td><td>5-8 jours</td></tr>
              <tr><td><strong>🏠 Maison 150 m²</strong></td><td>5 000€ – 12 000€</td><td>10-18 jours</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h2>Prix par ville</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem', margin: '1rem 0' }}>
              <Link href="/peintre/bruxelles-1000/" className="related-guide-card"><div className="rg-title">Bruxelles</div><div className="rg-desc">20-40€/m²</div></Link>
              <Link href="/peintre/liege-4000/" className="related-guide-card"><div className="rg-title">Liège</div><div className="rg-desc">15-30€/m²</div></Link>
              <Link href="/peintre/namur-5000/" className="related-guide-card"><div className="rg-title">Namur</div><div className="rg-desc">15-30€/m²</div></Link>
              <Link href="/peintre/charleroi-6000/" className="related-guide-card"><div className="rg-title">Charleroi</div><div className="rg-desc">14-27€/m²</div></Link>
              <Link href="/peintre/mons-7000/" className="related-guide-card"><div className="rg-title">Mons</div><div className="rg-desc">14-27€/m²</div></Link>
              <Link href="/peintre/tournai-7500/" className="related-guide-card"><div className="rg-title">Tournai</div><div className="rg-desc">14-27€/m²</div></Link>
            </div>
            <p><Link href="/peintre/" style={{ color: 'var(--primary)', fontWeight: 600 }}>→ Voir les 556 communes</Link></p>

            <p>Pour un guide encore plus détaillé, consultez notre <Link href="/guides/peinture-interieure-guide/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide complet peinture intérieure</Link> ou notre page <Link href="/tarif-peintre/" style={{ color: 'var(--primary)', fontWeight: 600 }}>tarifs peintre 2026</Link>.</p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Questions fréquentes — Peinture intérieure</h2>
          <FAQ items={faq} />
        </div>
      </section>

      <div className="brush-separator" />

      {/* Form */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">🎨 Devis Peinture Intérieure — Gratuit</h2>
          <LeadForm variant="compact" />
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }) }} />
    </>
  );
}
