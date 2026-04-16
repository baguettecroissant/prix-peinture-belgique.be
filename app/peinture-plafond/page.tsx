import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Prix Peinture Plafond Belgique 2026 — Techniques et Devis',
  description: 'Prix peinture plafond en Belgique : 20 à 35€/m². Techniques, rouleaux, peinture anti-traces. Devis gratuits.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peinture-plafond/' },
};

export default function PeinturePlafondPage() {
  return (
    <>
      <GuideLinks currentPath="/peinture-plafond" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>⬜ Peinture plafonds — Prix au m² et conseils Belgique 2026</h1>
          <p>Techniques de pro, choix de la peinture, rouleaux adaptés, peinture anti-traces. Prix et devis de peintres.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Prix peinture plafond en Belgique</h2>
            <p>Peindre un plafond coûte entre <strong>20€ et 35€/m²</strong> posé en Belgique. Le surcoût par rapport aux murs s&apos;explique par la position de travail (en hauteur) et la difficulté technique (risque de traces et coulures).</p>
            <p>Pour un résultat sans traces, les peintres professionnels utilisent une peinture mate haute opacité (type Levis Plafond Extra Mat) et un rouleau à poils courts (6-8 mm). L&apos;application en passes croisées est essentielle.</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '720px' }}><LeadForm variant="compact" /></div></section>
    </>
  );
}
