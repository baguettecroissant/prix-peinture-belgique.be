import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Prix Peinture Extérieure Belgique 2026 — Façade, Volets, Devis',
  description: 'Prix peinture extérieure / façade en Belgique : 15 à 40€/m². Siloxane, pliolite, acrylique. Comparatif et devis gratuits.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/peinture-exterieure/' },
};

export default function PeintureExterieurePage() {
  return (
    <>
      <GuideLinks currentPath="/peinture-exterieure" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🏠 Peinture extérieure &amp; façade — Prix et devis Belgique 2026</h1>
          <p>Prix, types de peinture (siloxane, pliolite, acrylique), préparation, durée de vie et devis gratuits de peintres pour la façade.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Prix peinture extérieure au m²</h2>
            <p>La peinture extérieure de façade coûte entre <strong>15€ et 40€/m²</strong> posé en Belgique. Le prix varie selon le type de peinture, l&apos;état du support et la hauteur de la façade.</p>
            <p>La <strong>peinture siloxane</strong> est le meilleur choix pour les façades belges : résistante à l&apos;humidité, perméable à la vapeur d&apos;eau, et durable (12-15 ans). La pliolite convient aux supports poreux et friables. L&apos;acrylique est économique mais moins durable (6-8 ans).</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '720px' }}><LeadForm variant="compact" /></div></section>
    </>
  );
}
