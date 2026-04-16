import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Prix Peinture Plafonds Belgique 2026 — Techniques, Prix au m²',
  description: 'Prix peinture plafond en Belgique : 20 à 35€/m² posé. Techniques anti-traces, peintures spécial plafond. Devis gratuit de peintres professionnels.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peinture-plafond/' },
};

const faq = [
  { question: 'Combien coûte la peinture d\'un plafond au m² ?', answer: 'Le prix d\'une peinture de plafond varie de 20 à 35€/m² posé (blanc mat, 2 couches). Pour les plafonds avec moulures, comptez 30 à 50€/m². Le surcoût par rapport aux murs (25-40%) s\'explique par la difficulté de la posture de travail et l\'exigence technique.' },
  { question: 'Quelle peinture choisir pour un plafond ?', answer: 'Utilisez une peinture "spécial plafond" extra mate et anti-projections : Levis Plafond Extra Mat (N°1 en Belgique), Sigma Superlatex Mat Plafond, ou Trimetal Magnacryl Plafond. Ne jamais utiliser de peinture murale ordinaire sur un plafond.' },
  { question: 'Comment éviter les traces au plafond ?', answer: 'Technique pro : croisez les passes (d\'abord parallèles à la fenêtre, puis perpendiculaires). Utilisez un rouleau anti-traces 5-6 mm avec manche télescopique. Finissez TOUJOURS dans le sens de la lumière. Ne surchargez pas le rouleau. Minimum 4h entre les couches.' },
];

export default function PeinturePlafondPage() {
  return (
    <>
      <GuideLinks currentPath="/peinture-plafond" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>⬜ Peinture plafonds — Prix au m² et conseils Belgique 2026</h1>
          <p>Tout sur la peinture de plafond : prix au m², techniques anti-traces, peintures spécifiques, cas particuliers (moulures, bois, salle de bain) et devis gratuits.</p>
        </div>
      </section>

      <section style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/hero-peinture-plafond.png" alt="Peintre professionnel appliquant de la peinture blanche sur un plafond avec rouleau télescopique" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority sizes="100vw" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <p>Le plafond est l&apos;un des travaux de peinture les plus techniques. Position inconfortable, risque de coulures, lumière rasante impitoyable — c&apos;est pourquoi les peintres facturent <strong>25-40% de plus</strong> que pour les murs.</p>

            <div className="article-callout callout-info">
              <div className="article-callout-icon">📊</div>
              <div className="article-callout-content">
                <strong>Prix plafond 2026</strong>
                <p>Blanc mat : <strong>20-35€/m²</strong> | Avec moulures : <strong>30-50€/m²</strong> | Plafond cathédrale : <strong>35-55€/m²</strong></p>
              </div>
            </div>

            <h2>Pourquoi ça coûte plus cher que les murs ?</h2>
            <div className="card-grid-3" style={{ marginBottom: '2rem' }}>
              <div className="card"><span className="card-icon">💪</span><div className="card-title">Posture</div><div className="card-subtitle">Travailler bras tendus fait baisser la productivité de 30-40%</div></div>
              <div className="card"><span className="card-icon">💧</span><div className="card-title">Coulures</div><div className="card-subtitle">La gravité travaille contre le peintre. Chaque passe doit être parfaite</div></div>
              <div className="card"><span className="card-icon">☀️</span><div className="card-title">Lumière</div><div className="card-subtitle">La lumière rasante révèle le moindre défaut. Tolérance zéro</div></div>
            </div>

            <h2>Technique professionnelle en 6 étapes</h2>
            <ol>
              <li><strong>Protection</strong> — Bâchage intégral sols et meubles, masquage des murs (5 cm du plafond)</li>
              <li><strong>Ponçage</strong> — Grain 120 sur l&apos;ancien plafond + dépoussiérage</li>
              <li><strong>Sous-couche isolante</strong> — Si taches (nicotine, eau) : Levis Primer, Trimetal Fix</li>
              <li><strong>1ère couche</strong> — Rouleau anti-traces (5-6 mm), passes croisées</li>
              <li><strong>Séchage</strong> — 4h min (6h si humidité &gt; 70%)</li>
              <li><strong>2ème couche</strong> — Finir TOUJOURS dans le sens de la lumière</li>
            </ol>

            <h2>Cas particuliers</h2>
            <h3>Plafond avec moulures (Bruxelles, maisons de maître)</h3>
            <p>Les moulures se peignent au spalter 5 cm AVANT les surfaces au rouleau. +30-50% sur le prix. Consultez nos <Link href="/peintre/bruxelles-1000/" style={{ color: 'var(--primary)', fontWeight: 600 }}>prix à Bruxelles</Link>.</p>

            <h3>Plafond salle de bain</h3>
            <p>Peinture satin anti-moisissure obligatoire. Le mat absorbe l&apos;humidité et favorise les moisissures. Complétez par un extracteur d&apos;air.</p>

            <h3>Plafond en bois</h3>
            <p>Lasure ou vernis mat, pas de peinture ordinaire. <Link href="/boiseries-portes/" style={{ color: 'var(--primary)', fontWeight: 600 }}>Guide boiseries</Link> pour plus de détails.</p>

            <p>Guide complet : <Link href="/guides/peinture-plafond-guide/" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide expert plafonds</Link> | <Link href="/peinture-interieure/" style={{ color: 'var(--primary)', fontWeight: 600 }}>peinture intérieure</Link></p>
          </div>
        </div>
      </section>

      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '800px' }}><h2 className="section-title">Questions fréquentes — Plafonds</h2><FAQ items={faq} /></div></section>
      <div className="brush-separator" />
      <section className="section"><div className="container" style={{ maxWidth: '720px' }}><h2 className="section-title">⬜ Devis Peinture Plafond — Gratuit</h2><LeadForm variant="compact" /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faq.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
    </>
  );
}
