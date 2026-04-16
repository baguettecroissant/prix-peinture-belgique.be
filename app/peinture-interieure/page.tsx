import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Prix Peinture Intérieure Belgique 2026 — Murs, Finitions, Devis',
  description: 'Prix peinture intérieure en Belgique : 15 à 40€/m² posé. Mat, satin, brillant. Levis, Sikkens, Sigma. Comparatif complet et devis gratuits de peintres.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peinture-interieure/' },
};

export default function PeintureInterieurePage() {
  return (
    <>
      <GuideLinks currentPath="/peinture-interieure" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🎨 Peinture intérieure en Belgique — Prix au m² et devis 2026</h1>
          <p>Tout sur la peinture intérieure : prix au m², choix des finitions (mat, satin, brillant), marques (Levis, Sikkens, Sigma) et préparation des murs.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Prix peinture intérieure au m² en Belgique</h2>
            <p>Le prix moyen d&apos;une peinture intérieure en Belgique varie de <strong>15€ à 40€/m²</strong> posé (2 couches, murs préparés). Ce prix comprend la main-d&apos;œuvre, la peinture de qualité professionnelle et la protection des sols.</p>
            <p>Le prix dépend de l&apos;état des murs (neuf, bon état, abîmé), du type de finition (mat, satin), de la hauteur sous plafond et de la région. Bruxelles est en moyenne 15-20% plus cher que la Wallonie en raison du coût de la vie et des hauts plafonds fréquents.</p>
            <h2>Mat, satin ou brillant ?</h2>
            <p><strong>Mat velouté</strong> (Levis Ambiance, Sikkens Alpha): masque les imperfections, ambiance feutrée. Idéal pour séjours et chambres. Non lavable — réservé aux pièces sèches.</p>
            <p><strong>Satin</strong> (Levis Expert, Sigma S2U Satin): légèrement lustré, lavable, résistant. Parfait pour cuisines, salles de bain, couloirs. Le meilleur compromis durabilité/esthétique.</p>
            <p><strong>Brillant</strong> (laque): ultra-résistant, facile à nettoyer. Réservé aux boiseries, portes et plinthes.</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt">
        <div className="container" style={{ maxWidth: '720px' }}>
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
}
