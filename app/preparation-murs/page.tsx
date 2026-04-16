import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Préparation des Murs Avant Peinture — Techniques et Prix 2026',
  description: 'Préparation des murs avant peinture : enduit 8-20€/m², ponçage, sous-couche. Les 6 étapes professionnelles pour un résultat impeccable. Devis gratuit.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/preparation-murs/' },
};

const faq = [
  { question: 'Combien coûte la préparation des murs avant peinture ?', answer: 'La préparation coûte de 3 à 25€/m² selon l\'état du mur. Ponçage simple : 3-5€/m². Rebouchage fissures : 5-10€/m². Ratissage complet (mur très abîmé) : 15-25€/m². Sous-couche : 4-8€/m². La préparation représente souvent 30-50% du budget total d\'un chantier de peinture.' },
  { question: 'Faut-il poncer avant de repeindre ?', answer: 'Oui, toujours. Le ponçage (grain 120-150) crée une accroche mécanique pour la nouvelle peinture. Sans ponçage, la peinture peut se décoller en quelques mois. C\'est l\'étape la plus importante de la préparation.' },
  { question: 'Quand faut-il utiliser une sous-couche ?', answer: 'La sous-couche est recommandée sur : mur neuf (plâtre, Gyproc), mur farineux (poudre au toucher), taches (nicotine, eau, humidité), changement de couleur radical (foncé → clair), et bois neuf avant laquage. Elle réduit la consommation de 25-30%.' },
];

export default function PreparationMursPage() {
  return (
    <>
      <GuideLinks currentPath="/preparation-murs" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🪣 Préparation des murs — L&apos;étape clé avant peinture</h1>
          <p>&quot;80% du résultat, c&apos;est la préparation.&quot; Enduit, ponçage, rebouchage, sous-couche : les 6 étapes professionnelles pour un résultat impeccable et durable.</p>
        </div>
      </section>

      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-preparation-murs.png" alt="Artisan ponçant un mur enduit avec une ponceuse orbitale professionnelle" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <p>La <strong>préparation des murs</strong> est l&apos;étape la plus importante — et la plus souvent bâclée. 85% des sinistres de peinture (écaillage, cloques, décollement) sont dus à un défaut de préparation, pas à la qualité de la peinture.</p>

            <div className="article-callout callout-info">
              <div className="article-callout-icon">📊</div>
              <div className="article-callout-content">
                <strong>Prix préparation 2026</strong>
                <p>Ponçage : <strong>3-5€/m²</strong> | Rebouchage : <strong>5-10€/m²</strong> | Ratissage complet : <strong>15-25€/m²</strong> | Sous-couche : <strong>4-8€/m²</strong></p>
              </div>
            </div>

            <h2>Les 6 étapes de la préparation pro</h2>

            <h3>1. Diagnostic du support</h3>
            <ul>
              <li><strong>Test humidité</strong> — Humidimètre numérique, seuil 5% max</li>
              <li><strong>Test adhérence</strong> — Scotch-test sur l&apos;ancienne peinture</li>
              <li><strong>Test farinage</strong> — Main sur le mur : poudre = fixateur obligatoire</li>
            </ul>

            <h3>2. Protection du chantier</h3>
            <p>Bâche plastique sols, film meubles, ruban de masquage prises/interrupteurs.</p>

            <h3>3. Dépose ancien revêtement</h3>
            <p><Link href="/papier-peint/" style={{ color: 'var(--primary)', fontWeight: 600 }}>Papier peint</Link> : dépose vapeur (8-15€/m²). Peinture écaillée : grattage + ponçage.</p>

            <h3>4. Rebouchage et enduit</h3>
          </div>

          <table className="comparison-table">
            <thead><tr><th>État du mur</th><th>Traitement</th><th>Coût</th></tr></thead>
            <tbody>
              <tr><td><strong>Bon état</strong> (petits trous)</td><td>Rebouchage ponctuel (Polyfilla)</td><td>3-5€/m²</td></tr>
              <tr><td><strong>Défauts moyens</strong></td><td>Enduit de lissage 1 passe</td><td>8-12€/m²</td></tr>
              <tr><td><strong>Mur très abîmé</strong></td><td>Ratissage complet 2-3 passes</td><td>15-25€/m²</td></tr>
            </tbody>
          </table>

          <div className="article-prose" style={{ marginTop: '2rem' }}>
            <h3>5. Ponçage</h3>
            <ul>
              <li><strong>Grain 80-100</strong> : dégrossissage (enduit épais)</li>
              <li><strong>Grain 120-150</strong> : finition standard (murs)</li>
              <li><strong>Grain 180-220</strong> : finition fine (<Link href="/boiseries-portes/" style={{ color: 'var(--primary)', fontWeight: 600 }}>boiseries</Link>)</li>
            </ul>

            <h3>6. Sous-couche (primer)</h3>
            <div className="article-callout callout-tip">
              <div className="article-callout-icon">💰</div>
              <div className="article-callout-content">
                <strong>L&apos;investissement le plus rentable</strong>
                <p>La sous-couche améliore l&apos;adhérence de 50% et réduit la consommation de peinture de 25-30%. Elle bloque les taches et uniformise l&apos;absorption. Produits : Trimetal Magnafix (N°1), Levis Primer, Sigma Primaire.</p>
              </div>
            </div>

            <h2>Cas belges spécifiques</h2>
            <ul>
              <li><strong>Plâtre ancien (Bruxelles, Liège)</strong> — Bande calicot + enduit lissage. Jamais de ciment sur du plâtre.</li>
              <li><strong>Pierre enduite (Ardenne)</strong> — Enduit à la chaux, peinture respirante. Jamais d&apos;acrylique imperméable.</li>
              <li><strong>Gyproc (constructions récentes)</strong> — Bande armée aux jonctions. Sous-couche spéciale Gyproc obligatoire.</li>
            </ul>

            <p>Guide détaillé : <Link href="/guides/preparation-murs-guide/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide expert préparation</Link> | <Link href="/peinture-interieure/" style={{ color: 'var(--primary)', fontWeight: 600 }}>peinture intérieure</Link></p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '800px' }}><h2 className="section-title">Questions fréquentes — Préparation</h2><FAQ items={faq} /></div></section>
      <div className="brush-separator" />
      <section className="section"><div className="container" style={{ maxWidth: '720px' }}><h2 className="section-title">🪣 Devis Préparation + Peinture — Gratuit</h2><LeadForm variant="compact" /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
    </>
  );
}
