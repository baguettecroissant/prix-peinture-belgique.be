import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import GuideLinks from '../components/GuideLinks';

export const metadata: Metadata = {
  title: 'Laquage Boiseries & Portes Belgique 2026 — Prix et Devis',
  description: 'Prix laquage boiseries et portes en Belgique : 30 à 55€/porte. Laque satin, brillant, préparation, ponçage. Devis gratuits.',
  alternates: { canonical: 'https://prix-peinture-belgique.be/boiseries-portes/' },
};

export default function BoiseriePage() {
  return (
    <>
      <GuideLinks currentPath="/boiseries-portes" variant="bar" />
      <section className="commune-header">
        <div className="container">
          <h1>🚪 Laquage boiseries &amp; portes — Prix et devis Belgique 2026</h1>
          <p>Laque satin ou brillant, préparation du bois, ponçage entre couches. Prix par élément et devis de peintres spécialisés.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="article-prose">
            <h2>Prix laquage portes et boiseries</h2>
            <p>Le laquage d&apos;une porte intérieure coûte entre <strong>30€ et 55€/porte</strong> en Belgique. Ce prix comprend le ponçage, la sous-couche et 2-3 couches de laque satin ou brillant.</p>
            <p>Pour les châssis de fenêtres, comptez 15-30€ par mètre linéaire. Les escaliers en bois se facturent généralement au forfait : 800 à 1 500€ pour un escalier standard (laquage ou vitrification).</p>
            <div className="mt-4"><Link href="/devis/" className="btn btn-primary btn-lg">🎨 Comparez les Prix — Devis Gratuit</Link></div>
          </div>
        </div>
      </section>
      <div className="brush-separator" />
      <section className="section-alt"><div className="container" style={{ maxWidth: '720px' }}><LeadForm variant="compact" /></div></section>
    </>
  );
}
