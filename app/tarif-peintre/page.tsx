import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Tarif Peintre Belgique 2026 — Prix au m² et à l\'heure',
  description: 'Tarif peintre en Belgique 2026 : 25-45€/h ou 15-40€/m². Comparatif par région (Wallonie, Bruxelles, Flandre). Devis gratuits.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/tarif-peintre/' },
};

export default function TarifPeintrePage() {
  return (
    <>
      <GuideLinks currentPath="/tarif-peintre" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>💰 Tarif peintre en Belgique 2026 — Prix au m² et à l&apos;heure</h1>
          <p>Combien coûte un peintre en Belgique ? Prix au m², tarif horaire par région, facteurs de prix et devis gratuits.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Tarif horaire d&apos;un peintre en Belgique</h2>
            <p>Le tarif horaire d&apos;un peintre professionnel en Belgique varie de <strong>25€ à 45€/h</strong> (hors TVA). Un peintre indépendant facture généralement 25-35€/h en Wallonie, 30-40€/h à Bruxelles et 30-45€/h en Flandre.</p>
            <p>Les entreprises de peinture avec employés se situent entre 35€ et 50€/h. La différence de prix reflète les charges sociales plus élevées et les assurances plus complètes.</p>
            <h2>Prix au m² — Vue d&apos;ensemble</h2>
            <p>Le prix au m² est plus fiable que le tarif horaire pour comparer les devis. Pour une peinture intérieure standard (2 couches sur murs préparés), comptez 15-40€/m² selon la région et l&apos;état des murs.</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '720px' }}><LeadForm variant="compact" /></div></section>
    </>
  );
}
